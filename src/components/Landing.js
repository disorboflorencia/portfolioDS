import React from 'react'
import "../Landing.css"
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'



const Landing = () => {

    const history = useHistory()

    setTimeout(() => {
        history.push('/who')
        }, 9000)

    return (
        <div className="fade-Out">
            <Link to="/who">
                <div className="content">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                    preserveAspectRatio="xMidYMid meet">
                  
                    <g className="logo1" id="logoLanding" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path  d="M1630 3905 c-16 -19 -9 -61 29 -167 72 -199 38 -471 -72 -586 -51
                    -53 -257 -151 -394 -186 -32 -9 -121 -24 -196 -35 -273 -40 -406 -118 -481
                    -282 -42 -92 -57 -166 -58 -284 0 -202 53 -370 175 -549 49 -72 210 -242 249
                    -262 40 -21 111 -18 139 6 l24 20 -30 22 c-122 90 -262 311 -308 483 -40 150
                    -45 332 -11 446 44 146 269 259 624 314 264 41 331 65 416 150 95 95 144 237
                    144 422 0 217 -70 404 -178 478 -42 29 -55 31 -72 10z"/>
                    <path d="M2350 3320 c-13 -9 -10 -14 15 -33 94 -70 143 -132 177 -225 18 -47
                    22 -79 21 -182 0 -315 -111 -578 -305 -725 -80 -61 -201 -118 -298 -140 -98
                    -23 -120 -32 -120 -49 0 -31 28 -39 118 -33 92 6 184 32 282 82 82 41 214 129
                    265 176 116 107 217 289 256 459 16 69 13 212 -6 277 -42 145 -153 298 -269
                    372 -51 32 -106 40 -136 21z"/>
                    <path d="M3315 2296 c-138 -32 -364 -141 -527 -256 -162 -114 -351 -321 -320
                    -352 21 -21 81 5 168 73 213 165 375 257 550 312 265 84 450 75 705 -32 160
                    -67 448 -249 589 -373 47 -41 96 -80 109 -87 28 -16 46 -2 36 28 -9 29 -379
                    377 -485 457 -104 79 -294 174 -415 210 -112 32 -314 42 -410 20z"/>
                    </g>
                    
                    </svg>
                </div>
                <div className="bg "></div>
                <div className="bg bg2 "></div>
                <div className="bg bg3  "></div>
            </Link>
        </div>
    )
}

export default Landing
