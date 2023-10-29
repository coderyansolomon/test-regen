import { Suspense } from 'react'
import Posts from './components/Posts'
import PostsSkeleton from './components/PostsSkeleton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts Page</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts delay={5000} />
      </Suspense>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolor quaerat nam doloribus nesciunt. Blanditiis totam eveniet harum obcaecati. Consequuntur corrupti dolore fuga consectetur perspiciatis praesentium mollitia autem atque obcaecati?</p>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts delay={10000} />
      </Suspense>
    </main>
  )
}
