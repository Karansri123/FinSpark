import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => {
              return (
                <div
                  key={index}
                  className="group text-center p-6 bg-gradient-to-br from-yellow-50 via-pink-100 to-indigo-200 border border-transparent rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="text-5xl font-extrabold text-pink-500 mb-2 group-hover:text-indigo-400 transition-colors duration-300 drop-shadow-md">
                    {statsData.value}
                  </div>
                  <div className="text-md text-gray-500 uppercase tracking-wider group-hover:text-yellow-500 transition-colors duration-300">
                    {statsData.label}
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-pink-300 to-yellow-200 mx-auto mt-3 rounded-full group-hover:from-indigo-300 group-hover:to-pink-400 group-hover:w-24 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The perfect way to manage your financial journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => {
              return (
                <Card key={index} className="p-6">
                  <CardContent className='space-y-4 pt-4'>
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {howItWorksData.map((step, index) => {
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
    Transform Your Finances, Transform Your Future!
    </h2>
    <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
    A <span className="font-semibold text-yellow-300">rapidly expanding group of financially wise users </span> is already boosting their financial outcomes with <span className="font-bold text-yellow-400">FinSpark</span>.
    </p>
    <Link href="/dashboard">
      <Button
        size="lg"
        className="bg-yellow-400 text-gray-900 font-semibold rounded-full px-6 py-3 hover:bg-yellow-300 hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        🚀 Start Your Free Trial Now
      </Button>
    </Link>
  </div>
</section>


    </div>
  );
}
