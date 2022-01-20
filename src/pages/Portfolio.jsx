export default function Portfolio() {
  const myPortfolio = [
    {
      id: 1,
      title: 'Billing App',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui numquam repudiandae voluptatibus, delectus ad recusandae quidem necessitatibus assumenda eligendi!',
      img: 'https://camo.githubusercontent.com/1ab7a597b161f7c97293276d0a52d4071c3ec48b608cdb867a1e5bd9c757436b/687474703a2f2f7777772e63687269737469616e656e6776616c6c2e73652f77702d636f6e74656e742f75706c6f6164732f323031372f31302f456c656374726f6e2d7475746f7269616c2d6170702d6769746875622e706e67',
      github: '',
    },
    {
      id: 2,
      title: 'Medical History Interoperability',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui numquam repudiandae voluptatibus, delectus ad recusandae quidem necessitatibus assumenda eligendi!',
      img: 'https://miro.medium.com/max/2000/0*hTjBjk0Jq0EWoHOY',
      github: '',
    },
  ]
  return (
    <main className='bg-dark text-light flex flex-col justify-center'>
      <section className='w-80 mx-auto'>
        <h1 className='font-hammer text-5xl text-center mb-10'>
          Portfolio
        </h1>
        <div className='flex gap-2 p-1 w-full overflow-x-auto snap-proximity snap-x'>
          {myPortfolio.map(project => (
            <div
              key={project.id}
              className={`snap-center shrink-0 overflow-hidden min-h-6 w-[95%] bg-dark `}
            >
              <img
                src={project.img}
                className='object-cover w-full rounded-2xl '
                alt={project.name}
              />
              <div className='mt-2'>
                <h3 className='font-hammer font-semibold text-lg text-light'>
                  {project.title}
                </h3>
                <p className='font-mont'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
