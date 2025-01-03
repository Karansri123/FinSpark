"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj)=>{
    const serialized = {... obj};
    if(obj.balance){
        serialized.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) {
            throw new Error("Unauthorized");
        }

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });
        if (!user) {
            throw new Error("User not found");
        }

        // Convert balance to float before saving
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid balance");
        }

        // Check if this is the user's first account
        const existingAccount = await db.account.findMany({
            where: { userId: user.id },
        });
        const shouldBeDefault = existingAccount.length === 0 ? true : data.isDefault;

        if (shouldBeDefault) {
            await db.account.updateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false },
            });
        }

        // Create the new account
        const newAccount = await db.account.create({
            data: {
                userId: user.id,
                balance: balanceFloat,
                isDefault: shouldBeDefault,
                ...data, // Spread other properties from data
            },
        });

        const serializedAccount =  serializeTransaction(newAccount);

        revalidatePath('/dashboard')
        return {success: true , data:serializedAccount}

    } catch (error) {
        console.error("Error creating account:", error.message);
        throw new Error(error.message || "Failed to create account");
    }
}
 