import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <main className='bg-dark text-light pt-8 flex justify-center h-[calc(100vh-60px)]'>
      <section className='w-80'>
        <h1 className='font-hammer text-5xl text-center mb-10'>
          Skills
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nulla eveniet ducimus
          reprehenderit, voluptatibus quidem voluptas
          molestias sed, possimus et obcaecati blanditiis
          sapiente, iure officiis tenetur at praesentium
          doloremque odio nesciunt natus. Rerum consectetur
          doloribus, perferendis quae ducimus iusto maiores,
          dolore impedit optio delectus quo eius molestias
          repudiandae doloremque distinctio! Similique
          voluptate tenetur nihil odio voluptas cum vitae
          reiciendis aliquid ea.
        </p>
      </section>
      <section className='absolute bottom-0 w-screen '>
        <div className='my-[20px] flex justify-center'>
          <Link
            to='/portfolio'
            className='btn text-center bg-primary w-80 text-dark font-semibold'
          >
            Portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
