export default function ContactMe() {
  const wayContact = [
    {
      id: 1,
      title: 'Email',
      icon: 'bxl-gmail',
      to: 'mailto:jd.camayo@gmail.com?Subject=Contact%20me%20from%20webpage',
    },
    {
      id: 2,
      title: 'Telegram',
      icon: 'bxl-telegram',
      to: 'https://t.me/jdcamayos',
    },
    {
      id: 3,
      title: 'WhatsApp',
      icon: 'bxl-whatsapp',
      to: 'https://wa.me/+573184853359',
    },
    {
      id: 4,
      title: 'Phone',
      icon: 'bxs-phone',
      to: 'tel+573184853359',
    },
  ]
  const handlerExternalLink = link => {
    window.open(link, '_blank')
  }
  return (
    <main className='bg-dark text-light pt-8 flex justify-center h-[calc(100vh-60px)]'>
      <section className='w-80'>
        <h1 className='font-hammer text-5xl text-center mb-10'>
          Contact me
        </h1>
        <div className='flex flex-col space-y-6 justify-center'>
          {wayContact.map(item => (
            <button
              key={item.id}
              className='btn bg-primary text-dark flex flex-row justify-between px-10'
              onClick={() => handlerExternalLink(item.to)}
            >
              <span className='font-semibold self-center'>
                {item.title}
              </span>
              <span className='text-2xl self-center'>
                <i className={`bx ${item.icon}`}></i>
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
