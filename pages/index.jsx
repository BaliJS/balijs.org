import Head from 'next/head'

import '../styles/index.css'

export default () => {
  return (
    <>
      <Head>
        <title>BaliJS | Javascript community in Bali</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="/"
            >
              Bali<span className="text-yellow-400">JS</span>
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: '75vh' }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: 'url("/cover.jpg")'
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Join us!
                  </h1>
                  <p className="my-4 text-lg text-gray-300">
                    Let's learn & grow together
                  </p>
                  <a
                    className="bg-yellow-400 text-gray-800 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer hover:bg-yellow-200"
                    href="https://t.me/balijs"
                  >
                    Telegram
                  </a>
                  <a
                    className="bg-yellow-400 text-gray-800 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer hover:bg-yellow-200"
                    href="https://forum.balijs.org"
                  >
                    Forum
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: 70, transform: 'translateZ(0px)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </main>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: 80, transform: 'translateZ(0px)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">BALIJS</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Javascript community in Bali, Indonesia
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://forum.balijs.org/category/7/newsletter"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/BaliJS/talks"
                      >
                        Talks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  @BaliJS 2020
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
