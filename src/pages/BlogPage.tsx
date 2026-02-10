import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router-dom'

export function BlogPage() {
  const posts = [
    {
      title: '10 Skincare Tips for Glowing Skin',
      excerpt: 'Discover the essential daily habits that will transform your skin and give you a natural, healthy glow.',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'February 5, 2024',
      category: 'Skincare',
    },
    {
      title: 'The Benefits of Regular Massage Therapy',
      excerpt: 'Learn how incorporating massage into your wellness routine can reduce stress and improve overall health.',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'January 28, 2024',
      category: 'Wellness',
    },
    {
      title: 'Hair Care Trends for 2024',
      excerpt: 'From balayage to curtain bangs, explore the hottest hair trends and how to maintain them.',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'January 15, 2024',
      category: 'Hair',
    },
    {
      title: 'Makeup Tips for Every Occasion',
      excerpt: 'Master the art of makeup with our expert tips for day, evening, and special event looks.',
      image: 'https://images.pexels.com/photos/1582992/pexels-photo-1582992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'January 8, 2024',
      category: 'Makeup',
    },
    {
      title: 'The Importance of Self-Care',
      excerpt: 'Why taking time for yourself isn\'t selfish – it\'s essential for your mental and physical wellbeing.',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'December 20, 2023',
      category: 'Wellness',
    },
    {
      title: 'Nail Health: More Than Just Beauty',
      excerpt: 'Understanding the connection between nail health and overall wellness, plus tips for stronger nails.',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'December 10, 2023',
      category: 'Beauty',
    },
  ]

  return (
    <div className="pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-micro text-[#D4A24F] mb-4">Beauty & Wellness Tips</p>
            <h1 className="heading-display text-5xl md:text-7xl text-[#111111] mb-6">
              Our Blog
            </h1>
            <p className="text-[#6F6F6F] max-w-2xl mx-auto text-lg leading-relaxed">
              Expert advice, tips, and inspiration for your beauty and wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group border-[#111111]/10 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4A24F] text-[#111111] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <p className="text-sm text-[#6F6F6F] mb-2">{post.date}</p>
                  <CardTitle className="text-2xl text-[#111111] group-hover:text-[#D4A24F] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6F6F6F] mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="text-[#D4A24F] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
