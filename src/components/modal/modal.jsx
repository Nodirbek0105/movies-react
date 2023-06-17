import React, { useRef, useState } from 'react'

export default function Modal( boolean , id) {
    const ref = useRef(null)
    const [modal, setModal] = useState(false)
    function handleToggle() {
        setModal(!modal)
    } function handleClick() {
        ref.current.classList.toggle("d-none")
    }
    // return (
    //     <div className='container'>
    //         <button className='btn-success' onClick={handleToggle}>
    //             modal with useState
    //         </button>
    //         {modal &&
    //             < div className="modal-first">
    //                 <div className="modal-content">
    //                     <div onClick={handleToggle} className="close-modal btn-danger">
    //                         x
    //                     </div>
    //                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi dolorem voluptatum commodi quis, molestiae minima autem architecto nemo earum.</p>
    //                 </div>
    //             </ div>
    //         }<button className='btn-success' onClick={handleClick}>
    //             modal with useRef
    //         </button>
    //         < div ref={ref} className="modal-first d-none">
    //             <div className="modal-content">
    //                 <div onClick={handleClick} className="close-modal btn-danger">
    //                     x
    //                 </div>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur fugiat, non, doloribus pariatur maxime et impedit, cumque ex commodi sequi? Minus quo magni consequuntur libero quia quibusdam culpa? Beatae consequatur voluptas perferendis iste numquam nihil dolorum commodi, quidem totam odit adipisci, eum laudantium facere? Ipsum pariatur temporibus soluta magni provident! Quos ipsam, voluptatem eveniet nihil error ut modi laborum beatae fuga, est, voluptas quam vero aspernatur rem nobis! Saepe nihil tempore veniam nisi commodi, error iusto incidunt quae quod ad necessitatibus voluptate. Sunt laudantium aliquam ea labore exercitationem quia aliquid doloremque commodi perferendis, sit quam quis, voluptatibus, quos tempore?</p>
    //             </div>
    //         </ div>

    //     </div>
    // )
    return (
<div class="movie-about-div">
          <div class="left-about">
            <img data-img-movie src="" alt="" />
            <div class="about-movie-absolute-mask">
              <div class="bottom-mask">
                <div class="visibility">
                  <svg xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.5);" height="48" width="48"><path fill="#fff" d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z"/></svg>

                  <span data-visibility=""></span>
                </div>
                <div class="runtime">
                  <span class="img">
                    <svg  xmlns="http://www.w3.org/2000/svg" style="transform: scale(0.5);" height="48" width="48"><path fill="#fff" d="m7 8 3.7 7.6h6.5L13.5 8h4.45l3.7 7.6h6.5L24.45 8h4.45l3.7 7.6h6.5L35.4 8H41q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8Zm0 10.6V37h34V18.6Zm0 0V37Z"/></svg>
                  </span>
                  <span data-runtime=""></span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-about">
            <p data-title-movie></p>
            <p data-overage></p>
            <p data-overview></p>
            <p data-date></p>
            <p data-count></p>
            <span data-diagram class="diagram"></span>
          </div>
        </div>
    )
}
