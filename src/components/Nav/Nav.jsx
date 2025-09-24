import React, { useRef } from 'react'
import "./Nav.css"

function Nav() {
    let mobile = useRef();
    let menu = useRef();
    let backdrop = useRef();
    return (
        <div className='container'>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="d-flex align-items-center">
                    <div class="py-2 px-3 rounded-3 fs-4 fw-bold text-white d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, var(--primary-500), var(--warm-500))" }}>G</div>
                    <div class="ms-2">
                        <h1 className='fs-5 m-0'>GrowHabits</h1>
                        <div className='small text-muted d-lg-block d-none'>Grow healthy • Be kind • Learn daily</div>
                        <div className='small text-muted d-lg-none'>Grow healthy</div>
                    </div>
                </div>
                <div class="nav-items">
                    <ul className='d-lg-flex d-none gap-3 align-items-center mt-3' style={{ listStyle: "none" }}>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Home</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Habits</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Tracker</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Games</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Rewards</li>
                    </ul>
                </div>
                <div class="right-nav d-flex gap-3">
                    <select className='p-2 d-lg-block d-none border-0 rounded shadow-none' style={{ outline: "none" }}>
                        <option value="">Eng</option>
                        <option value="">Urdu</option>
                    </select>
                    <button className='border-0 d-lg-block d-none outline-none py-2 px-3 rounded-2 fw-bold text-white' style={{ background: "var(--btn-linear)" }}>Get Started</button>
                    <button className='border-0 d-lg-none d-block outline-none py-2 px-1 rounded-2 fw-bold text-white' style={{ background: "var(--btn-linear)" }}>Get Started</button>
                    <div className="hamburger d-flex d-lg-none" ref={menu} onClick={() => {
                        mobile.current.classList.toggle("active-mobile")
                        menu.current.classList.toggle("active-ham")
                        backdrop.current.classList.toggle("active-backdrop")
                    }}>
                        <div className="ham2"></div>
                        <div className="ham2"></div>
                        <div className="ham2"></div>
                    </div>
                </div>
                <div class="mobile d-flex d-lg-none" ref={mobile}>
                    <ul className='d-flex flex-column gap-3 align-items-center mt-3' style={{ listStyle: "none" }}>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Home</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Habits</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Tracker</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Games</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Rewards</li>
                    </ul>
                </div>
                <div className="backdrop d-lg-none" ref={backdrop}></div>
            </div>
        </div>
    )
}

export default Nav