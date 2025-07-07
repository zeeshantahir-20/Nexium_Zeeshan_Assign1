import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Heart, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About QuoteGen
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the story behind our mission to bring inspiration and wisdom to everyone, everywhere.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <Quote className="h-6 w-6 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At QuoteGen, we believe that the right words at the right time can transform lives. 
                Our mission is to make wisdom and inspiration accessible to everyone through carefully 
                curated quotes from history's greatest minds and contemporary thought leaders.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated with Love</h3>
                <p className="text-gray-600">
                  Every quote is handpicked for its power to inspire, motivate, and provide wisdom for life's journey.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Inspiration</h3>
                <p className="text-gray-600">
                  Get immediate access to relevant quotes based on your current mood, situation, or goals.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Topic-Focused</h3>
                <p className="text-gray-600">
                  Find exactly what you need with our topic-based search covering motivation, love, success, and more.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  QuoteGen was born from a simple observation: in our fast-paced world, we often forget to pause 
                  and seek the wisdom that can guide us through challenges and celebrate our victories.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of literature enthusiasts and technology experts came together to create a platform 
                  that bridges the gap between timeless wisdom and modern accessibility. We've carefully compiled 
                  quotes from philosophers, leaders, artists, and thinkers who have shaped human understanding.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're seeking motivation for a new project, comfort during difficult times, or simply 
                  want to start your day with inspiration, QuoteGen is here to provide the perfect words for every moment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}