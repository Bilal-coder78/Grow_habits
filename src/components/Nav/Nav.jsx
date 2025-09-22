import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div className='container'>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="d-flex align-items-center">
                    <div class="py-2 px-3 rounded-3 fs-4 fw-bold text-white d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, var(--primary-500), var(--warm-500))" }}>G</div>
                    <div class="content ms-2">
                        <h1 className='fs-5 m-0'>GrowHabits</h1>
                        <div className='small text-muted'>Grow healthy • Be kind • Learn daily</div>
                    </div>
                </div>
                <div class="nav-items">
                    <ul className='d-flex gap-3 align-items-center mt-3' style={{listStyle:"none"}}>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Home</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Habits</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Tracker</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Games</li>
                        <li className='li-items p-2 rounded fw-bold text-muted cursor-pointer'>Rewards</li>
                    </ul>
                </div>
                <div class="right-nav d-flex gap-3">
                    <select className='p-2 border-0 rounded shadow-none' style={{ outline: "none" }}>
                        <option value="">English</option>
                        <option value="">Urdu</option>
                    </select>
                    <button className='border-0 outline-none py-2 px-3 rounded-2 fw-bold text-white' style={{background:"var(--btn-linear)"}}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Nav