"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"

export function Reviews() {
  const { t } = useLanguage()

  const reviews = [
    {
      name: t("review1.name"),
      text: t("review1.text"),
      rating: 5,
    },
    {
      name: t("review2.name"),
      text: t("review2.text"),
      rating: 5,
    },
    {
      name: t("review3.name"),
      text: t("review3.text"),
      rating: 5,
    },
  ]

  // Replace with actual Google review link
  const googleReviewLink = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            {t("reviews.subtitle")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            {t("reviews.title")}
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            <a href={googleReviewLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              {t("reviews.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
