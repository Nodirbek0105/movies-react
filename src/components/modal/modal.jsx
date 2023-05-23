import React, { useRef, useState } from 'react'

export default function Modal() {
    const ref = useRef(null)
    const [modal, setModal] = useState(false)
    function handleToggle() {
        setModal(!modal)
    } function handleClick() {
        ref.current.classList.toggle("d-none")
    }
    return (
        <div className='container'>
            <button className='btn-success' onClick={handleToggle}>
                modal with useState
            </button>
            {modal &&
                < div className="modal-first">
                    <div className="modal-content">
                        <div onClick={handleToggle} className="close-modal btn-danger">
                            x
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi dolorem voluptatum commodi quis, molestiae minima autem architecto nemo earum.</p>
                    </div>
                </ div>
            }<button className='btn-success' onClick={handleClick}>
                modal with useRef
            </button>
            < div ref={ref} className="modal-first d-none">
                <div className="modal-content">
                    <div onClick={handleClick} className="close-modal btn-danger">
                        x
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur fugiat, non, doloribus pariatur maxime et impedit, cumque ex commodi sequi? Minus quo magni consequuntur libero quia quibusdam culpa? Beatae consequatur voluptas perferendis iste numquam nihil dolorum commodi, quidem totam odit adipisci, eum laudantium facere? Ipsum pariatur temporibus soluta magni provident! Quos ipsam, voluptatem eveniet nihil error ut modi laborum beatae fuga, est, voluptas quam vero aspernatur rem nobis! Saepe nihil tempore veniam nisi commodi, error iusto incidunt quae quod ad necessitatibus voluptate. Sunt laudantium aliquam ea labore exercitationem quia aliquid doloremque commodi perferendis, sit quam quis, voluptatibus, quos tempore?</p>
                </div>
            </ div>

        </div>
    )
}
