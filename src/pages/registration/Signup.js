import React from 'react'
import SocialLogin from '../../components/SocialLogin';
import { auth } from '../../firebase';
import { exceptionHandler, toast } from '../../utils';

export default () => {
    const userPayload = React.useRef({ email: '', password: '', confirmPassword: '' });

    const onChange = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        userPayload.current = {
            ...userPayload.current,
            [e.target.id]: e.target.value
        }
    }
    const onSignup = async () => {
        try {
            const user = userPayload.current;
            console.log(user);
            if (user.password !== user.confirmPassword) return toast.info('Passwords do not match!');
            await auth.sendSignInLinkToEmail(user.email, { url: 'http://localhost:3000/user/signin', handleCodeInApp: true });
            toast.info('A verification link has been sent to your email!')
        } catch (error) {
            exceptionHandler(error)
        }

    }
    return (
        <div id="__next" data-reactroot>
            <div style={{ paddingTop: 0 }}>
                <main>
                    <div className="px-3 container-fluid">
                        <div className="min-vh-100 row">
                            <div className="d-flex align-items-center col-xl-5 col-lg-6 col-md-8">
                                <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
                                    <div className="mb-4"><img src="assets/images/logo-square.svg" alt="..." style={{ maxWidth: '4rem' }} className="img-fluid mb-3" />
                                        <h2>Sign up</h2>
                                        <p className="text-muted">His room, a proper human room although a little too small, lay
                                            peacefully between its four familiar walls. A collection of textile samples lay
                                            spread out on the table.</p>
                                    </div>
                                    <form className="form-validate">
                                        <div className="mb-4"><label className="form-label" htmlFor="loginUsername">Email
                                            Address</label><input type="email" name="loginUsername" placeholder="name@address.com" autoComplete="off" required id="email" className="form-control" onChange={onChange} /></div>
                                        <div className="mb-4"><label className="form-label" htmlFor="loginPassword">Password</label><input type="email" name="password" placeholder="Password" required id="password" className="form-control" onChange={onChange} /></div>
                                        <div className="mb-4"><label className="form-label" htmlFor="loginPassword2">Confirm your
                                            password</label><input type="email" name="loginPassword2" placeholder="Password" required id="confirmPassword" className="form-control" onChange={onChange} /></div>
                                        {/* <div className="mb-4"><label className="form-label" htmlFor="loginPassword2"> Sign Up As :
                                        </label>
                                            <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
                                            &nbsp; <label htmlFor="html"> Buyer </label>
                                            &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
                                            &nbsp; <label htmlFor="css"> Seller </label>
                                        </div> */}
                                        <div className="d-grid"><button type="button" className="btn btn-primary btn-lg" onClick={onSignup}>Sign
                                            up</button></div>
                                    </form>
                                    <SocialLogin />
                                    <hr className="my-4" />
                                    <p className="text-sm text-muted">By signing up you agree to Directory's
                                        {/* */} <a href="#">Terms and Conditions</a> and
                                        {/* */} <a href="#">Privacy Policy</a>.
                                    </p><a className="close-absolute me-md-5 me-xl-6 pt-5" href="/"><svg className="svg-icon w-3rem h-3rem">
                                        <use xlinkHref="#close-1" />
                                    </svg></a>
                                </div>
                            </div>
                            <div className="d-none d-md-block col-xl-7 col-lg-6 col-md-4">
                                <div className="bg-cover h-100 me-n3 position-relative"><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                                    <img src={require('../../assets/images/login.webp')} alt='...' />
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div style={{ position: 'absolute' }}><svg width={0} height={0} className="hidden">
                    <symbol viewBox="0 0 64 64" id="calls-1">
                        <title>Calls</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="landline-1">
                        <title>Landline</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M52 26.3V53a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V26.3" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={20} y={30} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={30} y={30} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={40} y={30} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={20} y={39} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={30} y={39} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={40} y={39} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={20} y={48} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={30} y={48} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={40} y={48} width={4} height={4} rx={1} ry={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M17.8 24.7a3.9 3.9 0 0 0 3-4.4c-.3-3-1.4-7.3 11.2-7.3s11.5 4.3 11.2 7.3a3.9 3.9 0 0 0 3 4.4l9.9 2c1.3.2 3.2.8 4.6-1.1a11.4 11.4 0 0 0-2-13.4C53.5 7.2 43.1 5 32 5S10.5 7.2 5.3 12.3a11.4 11.4 0 0 0-2 13.4c1.4 1.8 3.3 1.3 4.6 1.1z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="smartphone-1">
                        <title>Smartphone</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M15 10h34M15 48h34" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer1" x={15} y={2} width={34} height={60} rx={4} ry={4} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={55} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="chat-app-1">
                        <title>Chat App</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M33.8 27.6a13 13 0 0 0 3.2.4h5v7l7.6-7A13 13 0 0 0 49 2H37a13 13 0 0 0-12 18" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={43} cy={15} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={35} cy={15} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={51} cy={15} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M37.4 54.3c-8.2-1.4-7.4-3.5-7.4-4.9v-2.5a13.9 13.9 0 0 0 4-10.1v-6.7C34 22.8 28.7 20 24 20s-10 2.8-10 10.1v6.7a13.8 13.8 0 0 0 4.1 10.1v2.5c0 1.4.7 3.5-7.4 4.9S2 60 2 62h44c0-2-1.3-6.4-8.6-7.7z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="paper-plane-1">
                        <title>Paper Plane</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M26 38v21l10.3-14.6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M3 29L59 5l-9 48-24-15-23-9zM59 5L26 38" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="read-email-1">
                        <title>Read Email</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M54 33.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M42.08 41.944L62 28M2 28l19.92 13.944M2 62l20.929-21.071c3.905-3.9 14.237-3.9 18.143 0L62 62" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M54 21.063L62 28v34H2V28l8-6.937" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="mail-1">
                        <title>Mail</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 12h60v40H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="telephone-operator-1">
                        <title>Telephone Operator</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M46 33h5a3.3 3.3 0 0 0 3-3v-7a3.3 3.3 0 0 0-3-3h-5m-29 0h-5a3.3 3.3 0 0 0-3 3v7a3.3 3.3 0 0 0 3 3h6.2" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M25.4 42.3C20.7 39.4 17 33.2 17 26V16C17 5.6 24.8 2 31.4 2 38 2 46 5.6 46 16v16c0 4-4 7-7 7" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M24 41.3V44c0 2 .4 5-10.6 7A14.2 14.2 0 0 0 2 62h59a14.6 14.6 0 0 0-11.6-11C38.7 49 39 46 39 44v-5" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M39 39a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M21.4 48.5l10 12.5 10.2-12.5M17 18c12 0 12-8 20-8s9 7 9 7" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="customer-support-1">
                        <title>Customer Support</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M24 40.5V44c0 2 .6 5-10.4 7A14.6 14.6 0 0 0 2 62h59a14.3 14.3 0 0 0-11.4-11C39 49 40 46 40 44v-5" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M46.4 33H51a3.3 3.3 0 0 0 3-3v-7a3.3 3.3 0 0 0-3-3h-5m-28 0h-6a3.3 3.3 0 0 0-3 3v7a3.3 3.3 0 0 0 3 3h5.2" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M46 18C26 18 26 4 26 4s1 12-8 15m18 43l9.6-12m-27.7 0L28 62M17.9 50a10.8 10.8 0 0 1-4.9-4c4-4 5-20 5-20m28 0s0 16 4 20a10.7 10.7 0 0 1-4.7 4" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M26 42c-4.7-2.9-8-8.8-8-16V16C18 5.6 25.4 2 32 2s14 3.6 14 14v16c0 4-4 7-6 7" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M40 38.9a2.9 2.9 0 0 0-2.9-2.9h-2.2a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 2.9 3.1H37a3 3 0 0 0 3-3.1z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="support-1">
                        <title>Support</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M12 26v-4c0-11 8-20 19-20h2c11 0 19 9 19 20v4M40 58a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4a4 4 0 0 0 4-4zm0 0s12 0 12-14" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M16 44H7.6A3.6 3.6 0 0 1 4 40.4V29.6A3.6 3.6 0 0 1 7.6 26H16zm32 0h8.4a3.6 3.6 0 0 0 3.6-3.6V29.6a3.6 3.6 0 0 0-3.6-3.6H48z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="sailing-1">
                        <title>Sailing</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M34 6s14.2 4.9 25.3 36H16.1S34 32.8 34 6z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M18 60c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.8 7.8 0 0 1-4 1c-4 0-4-2-8-2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M14 61l-6-5.3V50h50a30.4 30.4 0 0 1-8 10M34 50V2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="yacht-1">
                        <title>Yacht</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M8 39V25.7S23.5 21 38 21l10.7 7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M12 24.6V15h8v7.8" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2 49v-7.7s27.9-12.1 60-15.1c0 5.7-1.8 13.1-12.1 22.8z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={44} cy={37} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={52} cy={35} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="airplane-mode-1">
                        <title>Airplane Mode</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M57.5 7.5a5 5 0 0 0-7.1 0L39.9 18.1l-25.6-3.3s-1.9-.3-2.7.5l-3 3a1.3 1.3 0 0 0-.4 1.4c.2.5 1.6 1.2 2 1.4L28 30l-7.2 7.2-.7.7-9.1-1.3a1.6 1.6 0 0 0-1.5.5l-2.2 2.2c-.3.3-.9 1 .4 1.6l11.6 4.8s4.2 10.3 4.8 11.6 1.3.7 1.6.4l2.2-2.2a1.6 1.6 0 0 0 .5-1.5l-1.3-9.1.7-.7 7.2-7.1 9 17.7c.2.5.9 1.9 1.4 2a1.3 1.3 0 0 0 1.4-.4l3-3c.8-.8.5-2.7.5-2.7l-3.4-25.6 10.6-10.6a5 5 0 0 0 0-7z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="speedometer-1">
                        <title>Speedometer</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={30} cy={32} cx={32} data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M10 32a22 22 0 1 1 44 0" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M24 20l4.188 17.142a3.987 3.987 0 1 0 6.93-3.624C35.124 33.396 24 20 24 20" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="restaurant-1">
                        <title>Restaurant</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <ellipse data-name="layer1" cx={58} cy={18} rx={4} ry={6} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </ellipse>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M4 12v38m54-26v26M10 12v6a4 4 0 0 1-4 4H4" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={31} cy={33} r={19} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M38 41.4A11 11 0 0 1 20.1 34m2.3-8A11 11 0 0 1 42 32.9" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="swimming-pool-1">
                        <title>Swimming Pool</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M48 25H20m28 16H20M10 10a5 5 0 0 1 5-5 5 5 0 0 1 5 5v41.3M38 10a5 5 0 0 1 5-5 5 5 0 0 1 5 5v41.2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M18 51c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.8 7.8 0 0 1-4 1c-4 0-4-2-8-2m-32 8c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m32 0c-4 0-4 2-8 2s-4-2-8-2m28 1a7.7 7.7 0 0 1-4 1c-4 0-4-2-8-2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="flip-flops-1">
                        <title>Flip Flops</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M27.9 45.4c-.9-4.3-3.7-14.7-3.2-21.4s4.4-22.7-10-22C10.5 2.3.5 3.6 2.2 18.4s8 33.5 15.5 35.3 11-4 10.2-8.3zm22.7-33.2C36.2 9.9 38.3 25.8 38 32.4s-4.3 16.3-5.7 20.4 1.5 10 9.3 9.1 16.3-18.3 19.7-32.5-6.5-16.5-10.7-17.2z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M14 10c.8 2.1-1.5 5.3-4 8s-7.5 12.1 0 20m12-4s5.2-13.4-8.2-21.4m36.6 7.2c-1 2 .9 5.3 3.1 8.3s6.2 12.7-2.3 19.6m-11.7-5.2s-3.7-13.7 10.8-20" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="mountain-1">
                        <title>Mountain</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M14.4 25L2.1 47h40L31.9 29m16.2 18h14l-7.8-13.7" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M24.1 27l7.9 2-6.8-12c-1.1-2-5.1-2-6.2 0l-4.5 8 5.6 4zm20.3-2.9L41 30.2l4.3 3 3-1.5 6 1.5-5.1-9.1c-.8-1.5-3.9-1.5-4.8 0z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="beach-1">
                        <title>Beach</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M7.998 61.99a26.781 26.781 0 0 1 19.111-8c12.12 0 20.89 8 20.89 8zm33.998-42c1.49 9.448 2.088 23.518-7.842 34.888" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M33.998 33.99c.659-.96 6.727-11.74 7.828-13.697a.244.244 0 0 1 .4-.034l11.77 13.73A26.77 26.77 0 0 0 50.25 20.38a.085.085 0 0 1 .124-.114 54.868 54.868 0 0 0 9.624 5.724s.35-5.554-5.67-9.773a.145.145 0 0 1 .07-.265c4.316-.453 5.6-1.962 5.6-1.962s-5.453-4.627-11.688-2.13a.176.176 0 0 1-.246-.192c.679-3.285 1.934-7.678 1.934-7.678s-5.637 2.32-7.863 5.776a.277.277 0 0 1-.373.09c-5.584-3.144-9.764-1.865-9.764-1.865l5.728 5.728a.13.13 0 0 1-.101.224 11.836 11.836 0 0 0-11.629 6.047 37.693 37.693 0 0 1 9.648-.072.189.189 0 0 1 .107.317c-.91.983-3.909 5.02-1.753 13.755z" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={8} cy="27.995" cx="11.998" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="suitcase-1">
                        <title>Suitcase</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M28 38h-8V26l4-4 4 4v12zm-4-16v-6M12 56v4m40-4v4" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer1" x={2} y={16} width={60} height={40} rx={3} ry={3} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M24 16v-5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5m-28 0v40m40-40v40" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cabin-baggage-1">
                        <title>Cabin Baggage</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M25 40h12v10H25zm-2 18v4m16-4v4" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M17 24h28v34H17zm8 0V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v19" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="road-1">
                        <title>Road</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M52.1 2C32.1 2 24 14.2 24 20s4 6.1 4 12c0 8.2-24 20-24 20M58 8c-7.5 0-14 4.2-14 10s14 10.2 14 26c0 14.1-10 18-10 18" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M42 10l-1.3.7m-4.4 41.4l-1.8 1.6m7.1-9.8a14 14 0 0 1-1.5 3.6m.9-11.8a16 16 0 0 1 .7 2.7m-5.5-11l1.8 2.7m-4.3-10.7a10.5 10.5 0 0 0 .3 3m4.1-10.2a13.2 13.2 0 0 0-2.4 2.1m-6.4 42.9L28 58" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="subway-1">
                        <title>Subway</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M18 50l-8 12m36-12l8 12" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </path>
                        <rect data-name="layer2" x={10} y={2} width={44} height={48} rx={3} ry={3} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M10 14h44M10 34h44" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M28 8h8" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx={18} cy={42} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={46} cy={42} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M12.7 58h38.6" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="sedan-1">
                        <title>Sedan</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M48 28l-5.5-10a3.7 3.7 0 0 0-3.1-2H17.3a3.2 3.2 0 0 0-2.6 2l-5 10M58 42h4V31a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v11h4m12 0h28" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={12} cy={42} r={6} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={52} cy={42} r={6} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="bus-1">
                        <title>Bus</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M52 44h8.5a1.5 1.5 0 0 0 1.5-1.5V28l-2-9c-.6-1.7-1.3-3-3-3H5a3 3 0 0 0-3 3v23a2.2 2.2 0 0 0 2 2h6m8 0h26M2 30h50m0-13.8V44M19 30V16m17 14V16" data-name="layer1" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={4} cy={44} cx={14} data-name="layer2" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={4} cy={44} cx={48} data-name="layer2" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path d="M52 36h10" strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" data-name="layer1" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cart-1">
                        <title>Cart</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 6h10l10 40h32l8-24H16" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={23} cy={54} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={49} cy={54} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="paper-bag-1">
                        <title>Paper Bag</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M8 22h48v40H8z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M22 26V12A10 10 0 0 1 32 2a10 10 0 0 1 10 10v14" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="retail-bag-1">
                        <title>Retail Bag</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M4 14h56v48H4zm2 0V2h52v12" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M6.2 2.1L16 8 6 14M57.8 2.1L48 8l10 6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M42 24a10 10 0 0 1-20 0" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="dollar-sign-1">
                        <title>Dollar Sign</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M39.889 24A8 8 0 0 0 32 17.334c-4.418 0-8 2.914-8 7.333s4 6.42 8 7.334c4 .9 8 2.917 8 7.334s-3.582 7.333-8 7.333a8 8 0 0 1-8-8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M32 17.334v-5.335m0 40.003v-5.335" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pay-by-card-1">
                        <title>Pay by Card</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M40 20l8.8 8.7C51.2 31.1 52 34.2 52 40c0 8.6-.1 22-.1 22M22 44a20 20 0 0 0 3.3 11.5C28.1 60 28 61.3 28 62" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M29.8 44H14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v31M30 2v23" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M44.1 39.1L28.4 23.5a5 5 0 0 0-7 0 5 5 0 0 0 0 7l8.6 8.6s-2.6 8 6 14.9" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="money-1">
                        <title>Money</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M42 22a20 20 0 1 1-20 20" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={20} cy="22.001" cx={22} data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M26.949 17a5.006 5.006 0 0 0-4.932-4.167c-2.762 0-5 1.822-5 4.583s2.5 4.012 5 4.584 5 1.822 5 4.584-2.238 4.584-5 4.584a5 5 0 0 1-5-5" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path d="M22.018 12.832v-2.831m0 23.998v-2.832" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path d="M42 53.999v-2.834" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M37 46.165a5 5 0 0 0 5 5c2.762 0 5-1.822 5-4.582S44.5 42.562 42 42a9.814 9.814 0 0 1-2.887-1.1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M46.93 37a4.993 4.993 0 0 0-1.535-2.835" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="money-box-1">
                        <title>Money Box</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M28.8 19.5a21.1 21.1 0 0 0-7.1 2.2c-7.9 4.2-9.2 11-9.2 16.3s2.3 13.1 10.8 20h7.3v-4l8.9.5a20.1 20.1 0 0 0 2.3 3.5h6.7v-6a47.9 47.9 0 0 0 6-5c2.9.3 5.9-2 7-8.7 0-1-.5-1.3-1-1.3a6.8 6.8 0 0 1-3-1c-.4-.5-1.6-4.7-3.8-8a11.7 11.7 0 0 1 4.1-5.2c-2.8-1.4-5.7-2.4-11.4-1.8-1.5-.3-4-.9-6.4-1.3" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx="34.5" cy={14} r={8} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M12.5 38c-2.9-.3-10-1.4-10 2s1.9 3.4 3.8 2.6 4.3-5.5-3.8-8.6m25.7-8.9a20.1 20.1 0 0 1 12.7-.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer1" cx="48.5" cy={34} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pay-1">
                        <title>Pay</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M52 37h10v22H52zm0 18.2c-2 0-14.9 5.8-22 5.8-4.2 0-7.9-2.2-16-6-3.8-1.8-12-6.6-12-10s10.9 1.1 20.1 4" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx="34.1" cy={11} r={8} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx={20} cy={29} r={8} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M36.1 53h-10a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4c12 0 8-6 22-6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="open-box-1">
                        <title>Open Box</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M10 36.125v14.037l22 11.58 22-11.58V36.125" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M54 23.246l7-8.549-21.742-11.42-7.324 8.42L54 23.246z" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M32 61.742v-27" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M31.934 11.704l-7.258-8.42L3 14.769l7 8.742 21.934-11.807z" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M32 34.742l-8.584 8.929L2.967 31.995 10 23.511l22 11.231zm22-11.496l7 8.742-20.324 11.743L32 34.742l22-11.496z" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="delivery-time-1">
                        <title>Delivery Time</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M62 46v-5l-8-7h-8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={24} cy={54} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={54} cy={54} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M50 54H28m-8 0h-4v-8h46v8h-4M24.5 24H46v22m-30 0V29.8M2 38h6m-2 8h2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={14} cy={18} r={12} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M14 12v8h6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="store-1">
                        <title>Store</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M36 36h12v22H36z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M56 30v28H8V30" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M16 36h14v12H16z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M52.6 6H11.4L2 22.5a7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0zM2 22h60M32 6v16.5m-15 0L22 6m25 16.5L42 6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="label-tag-1">
                        <title>Label Tag</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={48} cy={15} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="tag-1">
                        <title>Tag</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={48} cy={16} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="giftbox-1">
                        <title>Giftbox</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M56 34v28H8V34M4 22h56v12H4z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M24 22v40m16-40v40M26.2 5A7.4 7.4 0 0 0 20 2a8 8 0 0 0-5.3 14c4.2 3.7 17.3 6 17.3 6 0-6-3.4-14.3-5.8-17zm11.6 0A7.4 7.4 0 0 1 44 2a8 8 0 0 1 5.3 14C45.1 19.7 32 22 32 22c0-6 3.4-14.3 5.8-17z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="fountain-pen-1">
                        <title>Fountain Pen</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M27.4 17.9L41.6 3.7a5.4 5.4 0 0 1 7.6 0L51 5.6M14.54 42.148l23.617-23.617 7.778 7.778-23.617 23.617z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M45.9 26.3l15.5-15.5L53.6 3 38.1 18.5" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2.6 61.8s7.4-.9 11.8-2.9a6.9 6.9 0 0 0 1.9-1l.7-.6a7 7 0 1 0-9.9-9.9l-.6.7a6.9 6.9 0 0 0-1.1 2.1c-1.9 4.4-2.8 11.6-2.8 11.6zm8.1-8.1l-8.1 8.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pen-1">
                        <title>Pen</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M9.7 54.3l-7.6 7.6m15.1-10.8a6.5 6.5 0 0 0-4.3-4.3 6 6 0 0 1-5.6.9l-.9.7-.5.7a6.4 6.4 0 0 0-1 1.9c-1.8 4.2-2.8 10.9-2.8 10.9s6.8-.9 11-2.7a6.5 6.5 0 0 0 1.7-1l.7-.6.7-.9a6 6 0 0 1 1-5.6z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M61.1 6.9l-36 40.4a6 6 0 1 1-9-8l.5-.5L57 2.8a2.8 2.8 0 0 1 4 4z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="key-1">
                        <title>Key</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M56.7 7.3a18 18 0 0 0-28.7 21l-8 7.9V40h-6v6H8v6H4l-2 2v8h8l25.8-26A18 18 0 0 0 56.7 7.3zm-5.9 11.5a4 4 0 1 1 0-5.7 4 4 0 0 1 0 5.7z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="keyhole-1">
                        <title>Keyhole</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M38.5 48l-2.2-17.1a9 9 0 1 0-8.7 0L25.5 48z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="stack-1">
                        <title>Stack</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer3" fill="none" stroke="#101010" strokeMiterlimit={10} d="M18.3 39.6L4.2 47 32 61.7 59.8 47l-14.1-7.4" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M18.5 24.6L4.2 32.1 32 46.8l27.8-14.7-14.3-7.5" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M32 2.3L4.2 17 32 31.7 59.8 17 32 2.3z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="screwdriver-1">
                        <title>Screwdriver</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M36.651 31.653l15.675-15.675 5.245-.983L62 5l-2-2-10.243 4.18-1.029 5.292-15.629 15.629" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M15.584 59.761L29.16 46.184a7.474 7.474 0 0 0 2.1-4.152l6.557-4.548a2.7 2.7 0 0 0 .438-4.229L31.5 26.5a2.7 2.7 0 0 0-4.229.438l-4.493 6.477a7.477 7.477 0 0 0-4.278 2.113L4.928 49.1a7.535 7.535 0 0 0 10.656 10.661z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="configuration-1">
                        <title>Configuration</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M31.156 23.33l-4.683-4.683a3.964 3.964 0 0 1-1.1-3.349A11.737 11.737 0 0 0 13.739 2c-.338 0-.67.023-1 .051l4.406 6.973a1.3 1.3 0 0 1-.1 1.532l-2.4 2.875a1.3 1.3 0 0 1-.645.419l-3.2.913a1.3 1.3 0 0 1-1.49-.606L4.756 6.189a11.73 11.73 0 0 0 6.4 19 11.593 11.593 0 0 0 4.028.2 4.011 4.011 0 0 1 3.363 1.1l7.553 7.555m3.554 3.556l7.86 7.86a3.98 3.98 0 0 1 1.1 3.339 11.542 11.542 0 0 0-.094 1.466 11.658 11.658 0 0 0 13.509 11.588l-5-7.92a1.3 1.3 0 0 1 .1-1.532l2.4-2.875a1.3 1.3 0 0 1 .644-.419l3.2-.913a1.3 1.3 0 0 1 1.49.606l4.833 8.439a11.671 11.671 0 0 0 2.291-7.731A11.734 11.734 0 0 0 48.71 38.625a3.945 3.945 0 0 1-3.337-1.079l-5-5" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M27.96 32.186L12.285 47.861l-5.245.983-4.429 9.995 2 2 10.243-4.181 1.029-5.291 15.629-15.629" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M49.027 4.078L35.451 17.655a7.474 7.474 0 0 0-2.1 4.152L26.8 26.355a2.7 2.7 0 0 0-.438 4.229l6.757 6.757a2.7 2.7 0 0 0 4.229-.438l4.493-6.477a7.477 7.477 0 0 0 4.271-2.116l13.571-13.576A7.535 7.535 0 0 0 49.027 4.078z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="feather-1">
                        <title>Feather</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M51.491 12.509L2 62m19.938-19.939V26.517M32.41 31.59h16.651m-21.654 5.005h16.815" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M42.1 21.9V8.169c-10.828 5.992-23.594 17.8-31.528 41.086l2.087 2.086 2.087 2.088C61.553 37.478 62 2 62 2a41.974 41.974 0 0 0-13.147 3.014l-6.634 16.767" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="edit-1">
                        <title>Edit</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M54.368 17.674l6.275-6.267-8.026-8.025-6.274 6.267" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M17.766 54.236l36.602-36.562-8.025-8.025L9.74 46.211 3.357 60.618l14.409-6.382zM9.74 46.211l8.026 8.025" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="security-1">
                        <title>Security</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M19 26.8V15A13 13 0 0 1 32 2a13 13 0 0 1 13 13v11.8" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M23 24.1V15a9 9 0 0 1 18 0v9.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={42} r={20} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M34 45a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2 2 2 0 0 1 2 2z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="find-1">
                        <title>Find</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer1" cx="24.2" cy="24.2" r="22.2" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M39.9 39.9L62 62" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pin-1">
                        <title>Pin</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={8} cy={22} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="love-pin-1">
                        <title>Love Pin</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M42 21.5a5.5 5.5 0 0 0-10-3.2 5.5 5.5 0 0 0-10 3.2 5.5 5.5 0 0 0 0 .6C22.6 27.9 32 34 32 34s8.3-5.6 9.8-10.9a5.5 5.5 0 0 0 .2-1.6z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="map-location-1">
                        <title>Map Location</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M38 46.2c12.6.8 22 4 22 7.8s-12.5 8-28 8-28-3.6-28-8 9.4-7 22-7.8" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M32 2a18.1 18.1 0 0 0-18.1 18.1C13.9 36.4 32 52.4 32 52.4s18.1-16 18.1-32.3A18.1 18.1 0 0 0 32 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeMiterlimit={10} stroke="#101010" fill="none" ry={6} rx={6} cy={20} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="navigation-map-1">
                        <title>Navigation Map</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M24.4 32.8L20 33.9l-18-6v28L20 62l24-6.1 18 5v-27l-12-4m-30 4V62m24-24v17.9" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M32 2a14 14 0 0 0-14 14c0 12.6 14 26 14 26s14-13.4 14-26A14 14 0 0 0 32 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={4} cy={16} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="compass-map-1">
                        <title>Compass Map</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M16.2 30.6L2 25.9v28L20 60l24-6.1 18 6v-28L56 30m-36 5.4V60m24-24.6v18.5" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M23.6 30.4l4.2-12.6 12.6-4.2-4.2 12.6-12.6 4.2z" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={18} cy={22} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="destination-map-1">
                        <title>Destination Map</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M43.1 17l9.9 9.9M43 27l9.9-9.9m-19.5 7.6a10 10 0 0 1 6.8-2.7M29.7 35.2a10 10 0 0 0 .5-2.9V32a10 10 0 0 1 .9-4.3M21.2 42a10 10 0 0 0 6.6-3.5M9.8 42h7.6M2 42h4" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M62 10v50l-22-6-16 6-22-6V4l22 6 16-6 22 6z" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="map-marker-1">
                        <title>Map Marker</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M43.2 48.1l-7.2-4L18 52 2 44.1V4l16 7.9L36 3l18 8.9v20.3M36 44.1V3M18 52V11.9" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M52 32a10 10 0 0 0-10 10c0 9 10 19 10 19s10-10 10-19a10 10 0 0 0-10-10z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={3} cy={42} cx={52} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="compass-1">
                        <title>Compass</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M32 2v8m0 44v8M2 32h8m43.9 0h8" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path d="M20 44l6-18 18-6-6 18-18 6zm6-18l12 12" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="earth-globe-1">
                        <title>Earth Globe</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M57.7 16.5A30 30 0 1 1 43.4 4.3" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M32 12c0 4.2 6 1.7 6 6s-4.6 7.3-8 5-7.9-3.5-11.9 2.1-1.3 12 1.5 11.9 5.5-2.8 6.7.6 1.5 3.4 2.8 4.2 1.3 2.2.9 4.1 2 8 4 8 3.8-.8 4-4 2.6-3.3 3.8-4.2-.9-4.3 1.3-6.5 6.6-6.2 2.8-7.2-3.5-1.8-4-3.4-2-3.2 1-3.3a11.9 11.9 0 0 0 8.7-3.6c2.5-2.6 3.8-5.2 6.1-5.2A25.6 25.6 0 0 0 51.2 9a30 30 0 0 0-7.8-4.7C36.7 7.5 32 7.8 32 12z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="globe-1">
                        <title>Globe</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M54.8 43.8A28 28 0 0 1 15.2 4.2M13 2l7.9 7.9M57 46l-7.9-7.9M23 62h24M35 52v10" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={20} cy={24} cx={35} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="world-map-1">
                        <title>World Map</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M53.9 28.4A26 26 0 1 1 41 13m-2.1-1c-5.8 2.8-9.9 3.1-9.9 6.7s5.2 1.5 5.2 5.2-4 6.3-6.9 4.4-6.9-3-10.4 1.8-1.2 10.4 1.3 10.3 4.8-2.4 5.9.6 1.3 3 2.4 3.6 1.2 1.9.8 3.6 1.8 6.9 3.5 6.9 3.3-.7 3.5-3.5 2.3-2.9 3.3-3.7-.7-3.7 1.1-5.6 5.7-5.4 2.5-6.3-3-1.5-3.5-2.9-1.8-2.8.9-2.9a10.3 10.3 0 0 0 7.4-3.1l.7-.7" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M51 2a10 10 0 0 0-10 10c0 9 10 20 10 20s10-11 10-20A10 10 0 0 0 51 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeMiterlimit={10} stroke="#101010" fill="none" r={2} cy={12} cx={51} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="needle-1">
                        <title>Needle</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M47.714 42l2.857 2.857a2.026 2.026 0 0 1 0 2.857l-2.857 2.857a2.026 2.026 0 0 1-2.857 0L42 47.714M62 62L49.143 49.143M18.429 18.429L5.571 5.571M2 9.143L9.143 2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M25.571 17l22.143 22.143a2.026 2.026 0 0 1 0 2.857L42 47.714a2.026 2.026 0 0 1-2.857 0L17 25.571" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx="14.143" cy="28.429" r="4.041" transform="rotate(-45 14.143 28.429)" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx="28.429" cy="14.143" r="4.041" transform="rotate(-45 28.428 14.143)" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M11.286 25.571l14.285-14.285m-2.142 12.143l4.285-4.286m1.429 7.143L32 23.429M32 32l4.298-4.335m4.273 12.906l4.286-4.285m-7.143-1.429L40.571 32" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="hospital-1">
                        <title>Hospital</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M6 56V16m52 0v40" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M23 45h18v16H23z" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M23 61H2v-5h21m18 0h21v5H41" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M32 45v16" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M22.756 16H2v-6h20.063m19.874 0H62v6H41.244M11 21h6v6h-6zm36 0h6v6h-6zM11 33h6v6h-6zm0 12h6v6h-6zm36 0h6v6h-6zM23 33h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zM29 21.542V27h-6v-6h4.636m8.728 0H41v6h-6v-5.458" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={12} r={10} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M32 8v8m-4-4h8" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="medical-emergency-1">
                        <title>Medical Emergency</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M40 34.994h-5v-5h-6v5h-5v6h5v5h6v-5h5v-6z" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={32} cy="37.994" r={15} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M14.95 25.967a3.928 3.928 0 0 0 3.019-4.486c-.318-3.018 1.406-7.465 14.031-7.465s14.316 4.447 14 7.465 2.865 4.25 4.018 4.487 4.812 1.533 6.082 1.77 3.2.767 4.576-1.082a11.194 11.194 0 0 0-2-13.235C53.52 8.258 43.116 5.994 32 5.994S10.479 8.258 5.317 13.42a11.2 11.2 0 0 0-1.994 13.238C4.7 28.5 6.628 27.977 7.9 27.739s5.9-1.534 7.05-1.772z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M11.365 26.88L8 50.994a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8l-3.386-24.267" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="wall-clock-1">
                        <title>Wall Clock</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M32 7v5m0 40v5M7 32h5m40 0h5" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={33} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M30.084 32.432L21 25m27-7L33.822 32.178" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="time-1">
                        <title>Time</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M32 10v23l13 7" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="alarm-clock-1">
                        <title>Alarm Clock</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M20 2.847A13.326 13.326 0 0 0 2.847 20zm24 0A13.326 13.326 0 0 1 61.153 20z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx={32} cy={35} r={26} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M6 62l8.122-8.122M58 62l-8.122-8.122" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M43 36H32V17" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="watch-1">
                        <title>Watch</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M15.802 18.635L21 2h22l5.198 16.634M15.823 45.391L21 61.958h22l5.177-16.567M52.619 28H56a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3.381" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M24 27l8.037 7.073L43 23" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={32} r={21} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="vintage-camera-1">
                        <title>Vintage Camera</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M49 13V7h9v6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer3" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 13h60v40H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={35} r={12} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={35} r={6} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 27h20.8m18.1 0H62M25.4 45H2m36.6 0H62" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M15 20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={54} cy={21} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="camera-1">
                        <title>Camera</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M59 17H46.6L40 9H24l-6.6 8H5a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3V20a3 3 0 0 0-3-3z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={33} r={14} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={54} cy={25} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={33} r={6} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="camera-shutter-1">
                        <title>Camera Shutter</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M25 20h34m-20 0l17.2 29.7M46 32.1L28.4 61.8M38.9 44H4.5M25 44L7.8 14.3M18 31.9L35.4 2.2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="image-1">
                        <title>Image</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={17} cy={15} r={5} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M8 46c0-2.8 6.6-16 13.3-16s6.1 6 8.7 6 4.6-18 12-18 14 25.8 14 28" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 46h60M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="image-gallery-1">
                        <title>Image Gallery</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer3" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 54H2V2h52v8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 10h52v52H10z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer2" cx={22} cy={22} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M16 50c0-2.8 2.6-16 9.3-16s6.1 6 8.7 6 2.6-16 10-16 12 23.8 12 26" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 50h52" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="radio-set-1">
                        <title>Radio Set</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M8 16L42 4" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer2" x={2} y={16} width={60} height={44} rx={3} ry={3} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={50} cy={28} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={50} cy={44} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={24} cy={38} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={18} cy={34} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={18} cy={42} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={18} cy={50} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={30} cy={34} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={30} cy={42} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={30} cy={50} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={17} cy={26} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={12} cy={30} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={31} cy={26} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={36} cy={30} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={35} cy={47} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={13} cy={47} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={10} cy={38} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={38} cy={38} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={24} cy={45} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={24} cy={52} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={24} cy={31} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={24} cy={24} r={1} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="headphones-1">
                        <title>Headphones</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M12 36V26c0-11 8-20 19-20h2c11 0 19 9 19 20v10" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M14.3 16.3c2.8 2.8 4.4.4 4.4.4A14.7 14.7 0 0 1 31.2 10h1.6a14.7 14.7 0 0 1 12.5 6.7s2.2 3.5 4.9.7" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M17 56H5.6A3.6 3.6 0 0 1 2 52.4V39.6A3.6 3.6 0 0 1 5.6 36H17zm30 0h11.4a3.6 3.6 0 0 0 3.6-3.6V39.6a3.6 3.6 0 0 0-3.6-3.6H47z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="guitar-1">
                        <title>Guitar</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M35 23.4A11.1 11.1 0 0 0 22 25a10 10 0 0 0-1.8 2.5c-1 1.7-2.7 4.4-6.5 4.5h-.9a12.7 12.7 0 0 0-7.1 3.5C.3 41.1.9 50.6 7.1 56.9s15.7 6.9 21.2 1.4a12.6 12.6 0 0 0 3.5-7 1.9 1.9 0 0 0 .1-.7 8.4 8.4 0 0 1 4.5-6.8A10 10 0 0 0 39 42a11.1 11.1 0 0 0 1.7-13" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M20.2 38.1l34.1-34c1.6-1.6 2.7-3 4.2-1.4l2.8 2.8c1.6 1.6.1 2.7-1.4 4.2L25.8 43.8" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer1" cx="19.9" cy="44.1" r={6} transform="rotate(-45 19.892 44.16)" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M59.9 4.1l-47 47" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M9.4 47.6l7 7" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="mix-1">
                        <title>Mix</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M16 24v30m0-44v6m16 18v20m0-44v16m16 26v2m0-44v34M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={16} cy={20} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={30} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={48} cy={48} r={4} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="sun-1">
                        <title>Sun</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={14} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M32 2v8m0 44v8m30-30h-8m-44 0H2m8.8-21.2l5.6 5.6m31.2 31.2l5.6 5.6m0-42.4l-5.6 5.6M16.4 47.6l-5.6 5.6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="dawn-1">
                        <title>Dawn</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M20 45a12 12 0 1 1 24 0M32 17v8" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M56 45H8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M12.8 25.8l5.6 5.6m32.8-5.6l-5.6 5.6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="heavy-rain-1">
                        <title>Heavy Rain</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeMiterlimit={10} stroke="#101010" fill="none" d="M49 12.015c-.168 0-.33.02-.5.025a16.98 16.98 0 0 0-32.293 4.447A11 11 0 1 0 13 38.011h36a13 13 0 1 0 0-26z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path d="M11.998 46l-6.404 8.001M23.998 46L11.19 61.997M36 46l-6.404 8.001M48 46L35.191 61.997" strokeMiterlimit={10} stroke="#101010" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cloud-lightning-1">
                        <title>Cloud Lightning</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M42 41.1h7a13 13 0 1 0 0-26h-.5a17 17 0 0 0-32.3 4.4A11 11 0 1 0 13 41.1h9" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M36 36.6L26 49.1h8L24.4 61" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="partly-cloudy-1">
                        <title>Partly Cloudy</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M27.1 39.5a10 10 0 1 1 6.9-10M24 8v6M8 30H2m6.4-15.5l4.3 4.2m26.9-4.2l-4.3 4.2M12.7 41.3l-4.3 4.3" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M52 36a13 13 0 0 0-25 4.1h-1a8 8 0 1 0 0 16h26a10 10 0 0 0 0-20z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="crescent-moon-1">
                        <title>Crescent Moon</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M35 2a25 25 0 0 1-22 36.8 24.9 24.9 0 0 1-10.6-2.3A30 30 0 1 0 35 2z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="book-1">
                        <title>Book</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M18 10h32" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M54 2H18a8 8 0 0 0 0 16h36v44H18a8 8 0 0 1-8-8V10" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="reading-1">
                        <title>Reading</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M54 12h8v44H42c-6 0-10 2-10 3.8" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M32 16c0-3.6 4-12 12.6-12H54v46H43.9C37.8 50 32 54.2 32 60" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M32 16c0-2-4-4-14-4H2v44h20c6 0 10 2 10 3.8z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="address-book-1">
                        <title>Address Book</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M51 8h8v42h-8m8-28h-8m8 14h-8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M9 2h42v60H9zm4 10H3m10 10H3m10 10H3m10 10H3m10 10H3" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M21 12h20v14H21z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="diary-1">
                        <title>Diary</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M19 6v56" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M47 6h8v56H12a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M47 26l-6.9-4-7.1 4V2h14v24z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="three-columns-layout-1">
                        <title>Three Columns Layout</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M62 18H2m20 0v44m20-44v44" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="contacts-1">
                        <title>Contacts</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M18 10h32" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M54 2H18a8 8 0 0 0 0 16h36v44H18a8 8 0 0 1-8-8V10" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M44.7 45.5c.6.4 1.5.9 1.3 2.1a6.2 6.2 0 0 1-5.9 4.4c-3.9 0-8.7-3.1-12.9-7.3S20 35.8 20 31.9a6.2 6.2 0 0 1 4.3-5.9c1.2-.2 1.7.7 2.1 1.3l3 4.5a2.1 2.1 0 0 1-.6 2.8c-1.3 1-2.5 1.4 2.3 6.2s5.1 3.5 6.2 2.3a2.1 2.1 0 0 1 2.8-.6z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="user-1">
                        <title>User</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="women-1">
                        <title>Women</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M49 17c0 17.2 2.9 18.9 7 23a70.8 70.8 0 0 1-16 2v2c0 2 0 6 10 8s10 10 10 10H4s0-8 10.2-10 9.8-6 9.8-8v-2a71 71 0 0 1-16-2c4.1-4.1 8-5.8 8-23 0 0 0-14 12-14 0 0 21-6.5 21 14z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="male-user-1">
                        <title>Male User</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M50.9 55.3a12.2 12.2 0 0 0-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 0 0 4.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 0 0 4.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 0 0-4.3 1.6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="female-user-1">
                        <title>Female User</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M13.1 55.3a11.9 11.9 0 0 1 4.3-1.6c8.1-1.5 8.6-5.7 8.6-7.4V46a58.8 58.8 0 0 1-11.9-2c3.3-3.3 5.9-5.2 5.9-19.2 0 0-.1-10.8 10-10.8 0 0 14-2.4 14 11.2s2.8 15.5 6.1 18.8A60.6 60.6 0 0 1 38 46v.3c0 1.6.5 5.8 8.6 7.4a12.1 12.1 0 0 1 4.3 1.7" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="student-1">
                        <title>Student</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M24 41.1V44c0 2 .6 4.9-10.4 7S2 62 2 62h60s0-8.6-12.4-11C38.9 48.9 39 46 39 44v-2.7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M16 50.5L32 62l16-11.3m-10.4-8.4A17.2 17.2 0 0 0 44.8 32c3 0 3.7-4.3 3.7-5.3S49 22.1 46 22v-6m-28 0v6c-3 0-3 4.1-3 5s.4 5 3.4 5a15.9 15.9 0 0 0 7.2 10.3" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M32 12L4 6l28-4 28 4-28 6z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M18 9v7l14 2 14-2V9M6 6.4V30" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="identity-1">
                        <title>Identity</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M34 46.9c4-.9 4-2.3 4-3.3v-1.5a9.3 9.3 0 0 1-2.9-6.9v-4.5a7 7 0 0 1 13.9 0v4.5a9.3 9.3 0 0 1-3 6.9v1.5c0 .9 0 2.4 4.1 3.3S54 52 54 52H30a5.1 5.1 0 0 1 4-5.1z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 10H2v50h60V10h-8M26 24H10m10 8H10m14 8H10m8-30h28" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 4h8v12h-8zm36 0h8v12h-8z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="heart-1">
                        <title>Heart</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="like-1">
                        <title>Like</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M54.4 30.4A25.4 25.4 0 0 0 58 17.9 13.9 13.9 0 0 0 44 4c-6.1 0-12 3.9-14 9.3C28 7.9 22.1 4 16 4A13.9 13.9 0 0 0 2 17.9C2 29.9 12.3 42 30 54l2.4-1.6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={46} cy={44} r={16} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M46 36v16m-8-8h16" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="unlike-1">
                        <title>Unlike</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M54.4 30.4A25.4 25.4 0 0 0 58 17.9 13.9 13.9 0 0 0 44 4c-6.1 0-12 3.9-14 9.3C28 7.9 22.1 4 16 4A13.9 13.9 0 0 0 2 17.9C2 29.9 12.3 42 30 54l2.4-1.6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={46} cy={44} r={16} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M38 44h16" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="diamond-1">
                        <title>Diamond</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 22h60M16 6l16 16L48 6M32 22v36" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M48 6l14 16-30 36L2 22 16 6h32z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="ribbon-1">
                        <title>Ribbon</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M17.7 36.6L10 55.7l8.8-1.1 5.5 6.8 6.5-18.8m15.5-6L54 55.7l-8.8-1.1-5.4 6.8-6.6-18.8" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy="22.6" r={20} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy="22.6" r={12} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="diploma-1">
                        <title>Diploma</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M17.6 37.7L10 56.4l8.8-1.1 5.5 6.8 6.4-18.6m15.7-5.8L54 56.4l-8.8-1.1-5.4 6.8-6.5-18.6" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy="22.9" r={12} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M32 4.5l4.5-2.6 3.1 4.2 5.1-.5 1.1 5 4.9 1.7-1 5 3.8 3.5-3 4.2 2.1 4.8-4.5 2.6v5.1l-5.2.6-2.1 4.7-4.9-1.5-3.9 3.4-3.9-3.4-4.9 1.5-2.1-4.7-5.2-.6v-5.1l-4.5-2.6 2.1-4.8-3-4.2 3.8-3.5-1-5 4.9-1.7 1.1-5 5.1.5 3.1-4.2L32 4.5z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="quality-1">
                        <title>Quality</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeMiterlimit={10} d="M19 38.9l-3 23 16-6 16 6-2.9-23M32 45.8v10.1" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy="23.9" r={12} fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M32 4.7l4.6-2.6 3.1 4.2 5.3-.5 1.1 5.2 5.1 1.6-1.1 5.2 3.9 3.6-3.1 4.3 2.1 4.8-4.5 2.7-.1 5.3-5.2.6-2.2 4.8-5-1.6-4 3.5-4-3.5-5 1.6-2.2-4.8-5.2-.6-.1-5.3-4.5-2.7 2.1-4.8-3.1-4.3 3.9-3.6-1.1-5.2 5.1-1.6L19 5.8l5.3.5 3.1-4.2L32 4.7z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="podium-1">
                        <title>Podium</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M23.3 54h-9.6l6.8-8h.1a4.8 4.8 0 0 0-6.9-6.6M32 24V10l-4.1 2.1M42 38h8l-4 6s6 0 6 5.1-7.2 6.2-10 2.9M28 24h8" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M2 32h30v30H2zM16 2h30v30H16zm16 30h30v30H32" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="data-app-1">
                        <title>Data App</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M2 23v22l30.082 14L62 45V23L32 37.048 2 23zm30 14.048V59m25.332-38.178L62 23M37.459 11.548l9.148 4.269m-29.232.009l9.147-4.27M2 23l4.742-2.213" strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" ry={4} rx={7} cy={19} cx={13} data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" ry={4} rx={7} cy={25} cx={32} data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" ry={4} rx={7} cy={9} cx={32} data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" ry={4} rx={7} cy={19} cx={51} data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="shield-security-1">
                        <title>Shield Security</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M56 12A33 33 0 0 1 32 2 33 33 0 0 1 8 12S5.9 48 32 62c26.1-14 24-50 24-50z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M45 24L31 38l-7-7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="imac-screen-1">
                        <title>iMac Screen</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M22 60h20M32 50v10m30-20V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v34" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2 40v8a2 2 0 0 0 2 2h56a2 2 0 0 0 2-2v-8z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="laptop-screen-1">
                        <title>Laptop Screen</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M6 45l-4 6v2h60v-2l-4-6" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M6 11h52v34H6z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="iphone-1">
                        <title>Iphone</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M14 59a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9H14zM50 5a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v5h36zm0 45V10m-36 0v40" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={56} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="low-battery-1">
                        <title>Low Battery</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M62 26h-6v-8H2v28h54v-8h6V26z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="low-power-1">
                        <title>Low Power</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M62 26h-6v-8H2v28h54v-8h6V26z" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M10 24h12v16H10z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="refresh-window-1">
                        <title>Refresh Window</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M52.4 46l4.8 4.8L62 46m-24 0l-4.8-4.8-4.8 4.8" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M50.9 56.6a11.8 11.8 0 0 1-14.1-2.1A12.1 12.1 0 0 1 34 42m5.6-6.6a11.8 11.8 0 0 1 14.1 2.1A12.1 12.1 0 0 1 56.4 50" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={8} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={15} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={22} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M54 38V18M2 18v32h32M2 6h52v12H2z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="schedule-window-1">
                        <title>Schedule Window</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={8} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={15} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={22} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M2 6h52v12H2zm52 22V18M2 18v32h30" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={46} cy={42} r={16} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M46 34v10h8" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="food-1">
                        <title>Food</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M50.5 37v23a2 2 0 0 1-2 2 2 2 0 0 1-2-2V37" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M18.5 17V2m4 0v15m4-15h-12l-1 20c0 3.2 2.1 5.2 5 5.8V60a2 2 0 0 0 4 0V27.8c2.9-.6 5-2.6 5-5.8zm24 35V2a10 10 0 0 0-10 10v20a5 5 0 0 0 5 5z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="restaurant-2">
                        <title>Restaurant</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M52.5 15.5c0-5.5-3.6-13.7-8-13.7s-8 8.1-8 13.7 2.5 8.1 6 9l-1 33.5c0 3.2 1.9 4 3 4s3.2-.6 3-4l-1-33.5c3.4-.9 6-4.3 6-9z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M24.5 2.1h-12l-1 20c0 3.2 2.1 5.2 5 5.8v32.2a2 2 0 0 0 4 0V27.9c2.9-.6 5-2.6 5-5.8z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="dinner-1">
                        <title>Dinner</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx="32.7" cy={33} r={19} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx="32.7" cy={33} r={11} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M61.7 34.2V48a2 2 0 0 1-2 2 2 2 0 0 1-2-2V34.1M6.7 12v9.5" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M61.7 34.2V12a6.3 6.3 0 0 0-6.3 6.3V31a3.2 3.2 0 0 0 3.2 3.2zm-50.5-9.5L10.5 12H2.9l-.6 12.7a3.5 3.5 0 0 0 2.4 3.5V48a2 2 0 1 0 4 0V28.1a3.5 3.5 0 0 0 2.5-3.4z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="balloon-whisk-1">
                        <title>Balloon Whisk</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M8.6 61A4 4 0 0 1 3 61a4 4 0 0 1 0-5.7l9.9-9.9a4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M18.5 45.5L58.1 5.9m0 19.8a14 14 0 1 0-23-14.9l-12 30.1 30.2-12a13.9 13.9 0 0 0 4.8-3.2z" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M53.9 21.5C59.3 16 61.2 9 58.1 5.9S48 4.7 42.5 10.1a23.1 23.1 0 0 0-3.5 4.5L23 40.9 49.4 25a23.2 23.2 0 0 0 4.5-3.5z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="ladle-1">
                        <title>Ladle</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M42.1 2a11.9 11.9 0 0 1 0 16.8L22.5 38.4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M22.5 38.4a13.8 13.8 0 1 0 19.6 19.5z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="barbecue-1">
                        <title>Barbecue</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M8 22H2m60 0h-5.9M32 14V2M18 14V8m28 6V6" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M16 62l9.3-12.9M48 62l-9-13m17-23a24 24 0 0 1-48 0v-6h48z" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="tea-kettle-1">
                        <title>Tea Kettle</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={16} r={4} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer2" d="M12.8 45.5a8 8 0 1 1 1.3-14.4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M62 26a3.7 3.7 0 0 0-4 4v6c0 2 0 6-6.1 6M48 28H16" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M48 52a20 20 0 1 0-32 0z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="moka-coffee-pot-1">
                        <title>Moka Coffee Pot</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M11 26L7 8h8m6-6h24" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M43 34v8m-20-8v8M57 8l-9.3 14.2L45 34H21L15 8h42zM43 8l-2 26M23 8l2 26m20 8H21l-6 20h36l-6-20zm-4 0l2 20M25 42l-2 20" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="coffee-beans-1">
                        <title>Coffee Beans</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M54 18c-3.7 4.9-5.9 5.8-12 6-4.4.1-7.7.9-9.9 3.1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M40 42c9-.1 18-6.1 21-14.5S59 9.6 49.1 8.2s-20.7 5-24.1 14.3l-.2.7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M10 32c3.7 4.9 5.9 5.8 12 6s9.9 1.6 12 6" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M39 36.5c3.4 9.3-2 17.9-11.9 19.3S6.4 50.8 3 41.5s2-17.9 11.9-19.3 20.7 5 24.1 14.3z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="loaf-of-bread-1">
                        <title>Loaf Of Bread</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M34 59H10a6 6 0 0 1-6-6V25.3A4.8 4.8 0 0 1 2 21c0-8 8.1-16 18-16h24M3.7 25h24" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M62 21c0-8-8.1-16-18-16s-18 8-18 16a4.8 4.8 0 0 0 2 4.3V53a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V25.3a4.9 4.9 0 0 0 2-4.3z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="croissant-1">
                        <title>Croissant</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M28.3 39.6l7.8 22m3.5-33.3l22 7.8m-45 3.2l-4.4 15.3m27.3-38.2l14.9-4.3" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M53.1 10.7a29.8 29.8 0 0 0-17.3-8.5c-4.7-.5-7.3 2.9-6.7 4.3s22.6 11.3 5.7 28.3-25.9-5.7-28.4-5.7-4.5 3.8-4.3 6.6a30 30 0 1 0 50.9-25z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="wine-glass-1">
                        <title>Wine Glass</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M47.8 18C47.3 11.3 46 2 46 2H18s-1.3 9.3-1.8 16M32 39.1V62m-10 0h20" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M16.2 18c-.1 1.5-.2 2.9-.2 4 0 6 5.5 16 16.2 16S48 28 48 22c0-1.1-.1-2.5-.2-4z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="birthday-cake-1">
                        <title>Birthday Cake</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M58 39.8v18.7m-52 0v-25m26-17v10m-16-10v10m32-10v10m14 32v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M6 33.5v-5a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v11.3M6 33.5a7 7 0 0 0 7 7c3.9 0 7-2.1 7-6m0 0c0 3.9 3.1 6 7 6s7-2.1 7-6m0 0c0 3.9 3.1 6 7 6s7-2.1 7-6m0 0c0 3.9 3.1 6 7 6a7 7 0 0 0 3-.7M19 7.5a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9zm16 0a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9zm16 0a7.3 7.3 0 0 0-3-6s-3 2.7-3 6a3 3 0 0 0 5.9.9 2.6 2.6 0 0 0 .1-.9z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="beer-pint-1">
                        <title>Beer Pint</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M48 22.7a8 8 0 0 0-4-14.9 7.9 7.9 0 0 0-2.3.4 6 6 0 0 0-9.1-3.1A11 11 0 0 0 15.2 8H15a9 9 0 0 0-3 17.5" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M48 22v37a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V22zM30 32v20M20 32v20m20-20v20m8-26h4a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M48 46h4a2 2 0 0 0 2-2V32a2 2 0 0 0-2-2h-4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pint-1">
                        <title>Pint</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M49 14a43.6 43.6 0 0 0-2-12H17a43.6 43.6 0 0 0-2 12" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M19.1 33.9A48.3 48.3 0 0 1 21 46v14a2 2 0 0 0 2.1 2h17.8a2 2 0 0 0 2.1-2V46a48.3 48.3 0 0 1 1.9-12.1C46 29.6 49 19 49 14H15c0 5 3 15.6 4.1 19.9z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={21} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={38} cy={27} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={30} cy={33} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={34} cy={41} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={30} cy={49} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="salami-1">
                        <title>Salami</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M54 32l8-5.8V37l-8-5z" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                        <circle data-name="layer2" cx={12} cy={31} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={20} cy={27} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={16} cy={37} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M27.6 32c-1.8 7.2-9 13-15.9 13S.6 39.2 2.4 32s9-13 15.9-13 11.1 5.8 9.3 13z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M18.3 19H41a13 13 0 0 1 13 13 13 13 0 0 1-13 13H11.7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="ham-1">
                        <title>Ham</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" transform="rotate(-45 41.278 22.722)" ry="7.247" rx="5.178" cy="22.722" cx="41.278" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M10.785 46.774L8.75 48.81a4.131 4.131 0 0 0-5.537 6.12c2.142 2.143 2.934 1.471 3.658 2.2 1 1 .426 1.887 2.2 3.66a4.142 4.142 0 0 0 5.857-5.857 4.14 4.14 0 0 0-.334-.25l1.706-1.714" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" transform="rotate(-45 41.278 22.721)" ry="24.847" rx="15.53" cy="22.722" cx="41.278" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M23.709 5.152C17.68 11.183 9.869 23.517 12 37.359c0 0 .965 4.893 0 5.857a4.146 4.146 0 0 0 0 5.858L14.926 52a4.14 4.14 0 0 0 5.855 0c.965-.965 5.857 0 5.857 0 13.842 2.129 26.176-5.682 32.209-11.711" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cheese-1">
                        <title>Cheese</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={47} cy={38} r={3} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={35} cy={47} r={5} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx="26.1" cy={36} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={16} cy={46} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer2" cx={12} cy={34} r={4} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M62 30L30 2S2 5.3 2 22l60 8z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2 22v32l60 8v-6.2l-1.5.3a5 5 0 0 1 0-10l1.5.3V30" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pizza-slice-1">
                        <title>Pizza Slice</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={4} cy="23.999" cx="28.999" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r={2} cy="33.999" cx="34.999" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" r="2.5" cy="37.499" cx="20.999" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M49.979 35.087L57 32C51.011 18.087 39.13 7.567 25 2l-2.527 7.3" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M22.473 9.3L7 54l42.978-18.91C44.833 23.128 34.618 14.087 22.473 9.3zm-5.474 40.299v8.4m8-11.92v15.92m16-22.907v12.907" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="hamburger-1">
                        <title>Hamburger</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M58.9 34.4A5 5 0 0 1 62 39a5 5 0 0 1-5 5M7 44a5 5 0 0 1-5-5 5 5 0 0 1 2-4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M8 26c-2 0-9.6 5.4-4 9 3.3 1.9 6.7-2.8 8-2.8S18 36 24 36s9.1-4 12-4 5.1 4 8 4 4.8-2 8-2 9.2 1.9 10-2-6-6-6-6" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M57 54l-.6 5a3.7 3.7 0 0 1-3.4 3H11a3.7 3.7 0 0 1-3.6-3l-.5-5" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M32 44l16 8 8-8" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M56 26a24 24 0 1 0-48 0h48z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <circle data-name="layer1" cx={44} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={38} cy={14} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={32} cy={10} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={28} cy={16} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={22} cy={12} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M62 49a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5 5 5 0 0 1 5-5h50a5 5 0 0 1 5 5z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="asian-cuisine-1">
                        <title>Asian Cuisine</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M46 2L32.1 30M58 10L40 30M22 62h20" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2.1 30a30 30 0 0 0 59.8 0z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="apple-1">
                        <title>Apple</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M23 6c5.2 0 10 3.8 10 12v2m4-6c0-6 2-12 12-12 0 6-2 12-12 12z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M33 20c-3.4 0-4.9-2-12-2S7 24.8 7 36s8.2 26 16.9 26c5.3 0 5.7-4 8.6-4s5.2 4 8.7 4S57 52.5 57 36 46.6 18 43 18s-6.1 2-10 2z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="lemon-1">
                        <title>Lemon</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M62 17.2c-5-9.1-15.3-7.4-18.9-.1 6.6 9.8 16.4 4.3 18.9.1zm-20.3-.3a11.5 11.5 0 0 0-6.6-11.4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M45.9 31.7c-1-6.6-2.8-7.3-2.8-8.8s1.1-4.4 0-5.5-3.9-.1-5.5 0-2.3-1.8-8.8-2.8-13.7 3.4-18.6 8.3-8 9.3-8.2 16.4 2.5 6.3 2.7 8.2-2.2 6.1 0 8.2 6.3-.3 8.2 0 2.5 3 8.2 2.7 10.4-2.2 16.4-8.2 9.4-11.9 8.4-18.5z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="banana-1">
                        <title>Banana</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M15.9 4s2.1 10.4 2.5 12.2 2.3 2.2 3.4 3c3.1 2.3 6.5 7.1 8.7 9s6.8 6.9 13.4 7.8 10.7.8 14 0a3.1 3.1 0 0 1 4 4c-.6 1.6-4.7 5.3-8.6 6.6s-14.7 2.6-19.8.8" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M1.9 4h16.6M5.9 4v10c0 .9-2.2 5.7-3.4 11.7S3.9 42 11.9 50s18.5 10 23.4 10c8.2 0 9.4-4 8.8-5.9s-2.7-2.9-7.9-5.3S21.5 39.5 19 31.2 13.6 17.5 11.9 16s-.5-1.1 0-2 2-10 2-10" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="ice-cream-cone-1">
                        <title>Ice Cream Cone</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M19.1 29.8L32 62l13.4-34" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                        <path data-name="layer1" d="M32 2a18 18 0 0 0-18 18v6a4 4 0 1 0 8 0v-2a4 4 0 1 1 8 0v6a4 4 0 1 0 8 0v-6a2 2 0 0 1 4 0 4 4 0 0 0 8 0v-4A18 18 0 0 0 32 2z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="food-2">
                        <title>Food</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M25.998 2.008v14a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4v-14m5.998 0V62" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M39.996 61.998L40 2c1 0 11.996 16.01 11.996 36.01h-12" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="brewed-coffee-1">
                        <title>Brewed Coffee</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M18 36h25.998v14c0 8-8.191 12-8.191 12H26s-8.002-4-8.002-12c0-12 .002-14 .002-14z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M6 62h52M36 30c0-12 12-16 12-28M26.002 30c0-6.125 5.998-8.896 5.998-14" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M43.998 37.998h2a6 6 0 0 1 0 12h-2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="roast-chicken-1">
                        <title>Roast Chicken</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M54.865 25.717l2.326-2.327a2.94 2.94 0 0 0 3.94-4.356c-1.524-1.522-2.088-1.046-2.604-1.562-.709-.708-.3-1.343-1.564-2.604a2.947 2.947 0 1 0-4.168 4.166c.072.072.16.115.238.18l-2.818 2.815" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M34.289 43.082a10.073 10.073 0 0 0 14.242 0 10.25 10.25 0 0 0 .737-.826c.048-.06.091-.127.138-.19.16-.208.317-.417.457-.632 2.973-4.46 3.235-11.059 4.434-12.256l.34-.34a2.399 2.399 0 0 0 0-3.39l-2.713-2.715a2.4 2.4 0 0 0-3.393 0l-.34.34c-1.283 1.284-8.416 1.146-13.115 5.06a10.423 10.423 0 0 0-.787.706 10.07 10.07 0 0 0 0 14.243z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M49.746 22.031C43.996 12 15.996 4 3.376 31.154c-3.59 8 2.628 14.877 10.628 14.877H41.83" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M2 52h55.996" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="chocolate-bar-1">
                        <title>Chocolate Bar</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M46 10L30 26m24-8L38 34m-8-24l24 24m-8 8l16-16L38 2 22 18" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M1.964 37.963l20.01-20.011 24 24-20.011 20.01z" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M39.3 35.4l-16-5.4V19.4" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pineapple-1">
                        <title>Pineapple</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M50 41c0 11.6-6 21-18 21s-18-9.4-18-21 6-21 18-21 18 9.4 18 21z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M32 18c-12 0-13.6-8-13.6-8S32 8.2 32 18M46 2C34.6 2 34 12 34 18 46.7 18 46 7.1 46 2z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M17.9 27.9l27.3 27.3M14 40l21.6 21.6m-8.9-40.9l23.1 23.1m-3.8-16L18.7 55.1M50 39.9L28.3 61.6M37 20.8L14.1 43.7" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="grater-1">
                        <title>Grater</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M50.3 12L50 8c-.2-2.9-2.5-6-6-6H20c-3.3 0-5.7 2.3-6 6l-.3 4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M46.3 12L46 8.3c-.1-.9-.8-2.3-2-2.3H20c-.4 0-1.8 0-2 2.4l-.3 3.6m2.3 8v2m8-2v2m8-2v2m8-2v2m-20 6v2m8-2v2m8-2v2m-20 6v2m8-2v2m8-2v2m8-2v2M20 52v2m8-2v2m8-2v2m8-2v2M24 44v2m8-2v2m8-2v2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M50.3 12H13.7L10 58a3.9 3.9 0 0 0 4 4h36a3.9 3.9 0 0 0 4-4z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="tea-cup-1">
                        <title>Tea Cup</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M16 3v16m6 16V25a6 6 0 0 0-6-6 6 6 0 0 0-6 6v10z" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M48 3v54a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V3zm0 10a14 14 0 0 1 14 14v4a14 14 0 0 1-14 14" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M48 41a10 10 0 0 0 10-10v-4a10 10 0 0 0-10-10" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="glazed-donut-1">
                        <title>Glazed Donut</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M58.6 45.8a30 30 0 0 1-48.9 6.3M18 14l4 4m-8 8l-4 4m2 8h4m10-28h8m10 4l-4 4m10 6l4 2m-4 8v4" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={32} cy={32} r={10} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <path data-name="layer1" d="M9.7 52.1a30 30 0 1 1 48.9-6.3M9.7 52.1c1.9-.3 3-3 4.3-6.1s7.2-2.6 6 2 2.9 7.3 5.8 6 3.1-2.6 6.3-2 6.1.5 7.9-2.4 2.8-.2 6 .4 4-8 12.6-4.2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cocktail-1">
                        <title>Cocktail</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M34 36v22m-10 0h20" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M46.3 16a8 8 0 1 1 3.2 4.6" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M2 6h8a5.6 5.6 0 0 1 4 2l8 8m25 7l7-7H14l7 7" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M47 23H21l13 13 13-13z" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="sandwich-1">
                        <title>Sandwich</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M10 22.5L2 46l8 4m4 6a6 6 0 0 0 11.6 2.2 5 5 0 0 0 9.3-1.2 6 6 0 0 0 10.8-1M54 26.2a10 10 0 0 1 0 19.6" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M32 2C19.4 2 2 3.9 2 14s8 8.5 8 8.5V51a5 5 0 0 0 5 5h34a5 5 0 0 0 5-5V22.4s8-.3 8-8.4S54.3 2 32 2z" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer1" cx={19} cy={15} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={27} cy={27} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={44} cy={20} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={42} cy={38} r={2} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                        <circle data-name="layer1" cx={25} cy={45} r={1} fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </circle>
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="taco-1">
                        <title>Taco</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M10 57.567c-7 0-8-6.283-8-14a43.145 43.145 0 0 1 16-34 8.6 8.6 0 0 1 7.309-1.758" data-name="layer1" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M17.368 52.191c-6.713-.94-5.572-4.972-4.555-6.47 1.9-2.8-1.1-4.156-2.48-6.463s-1.019-4.912 2.307-6.687c2.127-1.135 3.861-2.85 2.309-6.922-1.812-4.758 3.422-4.82 5.051-6.082 2.439-1.891 1.768-3.07 2-7.223s4.75-5.81 8-4.777c0 0 4.378 2 7.795-.3s7.955.444 6.815 4.309" data-name="layer2" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M12.378 57.206L62 35.567s-2.473-10-5.707-16-9.829-10.455-20.667-6.533-13.557 13.535-14.914 25.072c-1.42 12.053-4 19.461-10.711 19.461" data-name="layer1" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="seafood-1">
                        <title>Seafood</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M56.35 25.418c.33 4.916-2.16 14.242-7.207 19.035-2.346-5.166-7.509-7.295-7.048-7.193m-5.81-29.105c-11.428 0-20 8.713-20 8.713s9.834.9 10.117 4.434" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M39.969 6.1a28 28 0 0 0-8.978 7.83c-7.094 9.508-10.432 21.324-12.733 31.8A122.8 122.8 0 0 0 42 37.194c6.875-3.377 11.381-7.461 14.344-11.777M14.738 62c1.179-4.473 2.172-10.143 3.518-16.271A125.052 125.052 0 0 1 2 48.809S13.145 52.457 14.738 62z" data-name="layer2" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" ry="2.054" rx="2.021" cy="11.685" cx="51.878" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </ellipse>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#101010" fill="none" d="M39.969 6.1c0 9.629 4.914 17.547 16.375 19.316C61.754 17.536 62 8.881 62 2.348c0 0-11.561-2.033-22.031 3.752z" data-name="layer1" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="checked-circle-1">
                        <title>Checked Circle</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={30} transform="rotate(-45 32 32)" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M20.998 32.015l8.992 8.992 16.011-16.011" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="real-estate-1">
                        <title>Real Estate</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M2 29L32 5l30 24" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M23 62V40h18v22" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M10 22.6V62h44V8h-9v7.445" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="house-1">
                        <title>House</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="setting-1">
                        <title>Setting</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={10} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M61 27h-6.551a22.857 22.857 0 0 0-3.041-7.336l4.634-4.634a1 1 0 0 0 0-1.414l-5.657-5.658a1 1 0 0 0-1.414 0l-4.634 4.634A22.857 22.857 0 0 0 37 9.552V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6.552a22.857 22.857 0 0 0-7.336 3.041l-4.635-4.635a1 1 0 0 0-1.414 0l-5.657 5.657a1 1 0 0 0 0 1.414l4.634 4.634A22.857 22.857 0 0 0 9.552 27H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6.552a22.856 22.856 0 0 0 3.041 7.336l-4.635 4.635a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l4.634-4.634A22.86 22.86 0 0 0 27 54.449V61a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.551a22.86 22.86 0 0 0 7.336-3.041l4.634 4.634a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414l-4.634-4.634A22.856 22.856 0 0 0 54.449 37H61a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="property-1">
                        <title>Property</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M54 22.6V8h-9v7.445M40 62h14V29.769M10 30v32h14" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <circle data-name="layer2" cx={32} cy={29} r={5} fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeLinecap="round" strokeMiterlimit={10} d="M24 42h16v20H24zm8-37L2.436 28.651a.5.5 0 0 0-.036.749l3.287 3.287a.5.5 0 0 0 .668.035L32 12l25.65 20.718a.5.5 0 0 0 .668-.035l3.287-3.283a.5.5 0 0 0-.041-.744z" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="plug-1">
                        <title>Plug</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" d="M36 46v8h-8v-8m4 8.1V62" style={{ stroke: 'var(--layer1, #101010)' }}>
                        </path>
                        <path data-name="layer1" d="M46 18v18a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V18m-4 0h36m-26 0V2m16 16V2" fill="none" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="calls-2">
                        <title>Calls</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="coins-1">
                        <title>Coins</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <ellipse data-name="layer2" cx={44} cy="7.1" rx={18} ry="5.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M26 14.9c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1M38 43.7c1.9.2 3.9.3 6 .3 9.9 0 18-2.3 18-5.1m-36-2.8V7.5" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer2" d="M62 7.1v39.8c0 2.8-8.1 5.1-18 5.1-2.1 0-4.1-.1-6-.3" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <ellipse data-name="layer1" cx={20} cy="40.9" rx={18} ry="5.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M2 48.9c0 2.8 8 5.1 18 5.1s18-2.3 18-5.1" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" d="M38 40.9v16c0 2.8-8.1 5.1-18 5.1S2 59.7 2 56.9V41.3" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="money-2">
                        <title>Money</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M2 49.5V16.2S6 12 18 12s15.2 6 28 6a63.4 63.4 0 0 0 16-2.5v34S57.6 52 48 52s-17.2-6-28-6a44.8 44.8 0 0 0-18 3.5z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer2" d="M41.9 31.6c1 5.5-2.7 10-8.1 10s-10.6-4.5-11.6-10 2.7-10 8.1-10S41 26 41.9 31.6z" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                        <path data-name="layer1" d="M11.9 12.4A10 10 0 0 1 2 24m0 14a10 10 0 0 1 9.9 8.7M62 26a10 10 0 0 1-9.9-8.4m.1 34.2A10.1 10.1 0 0 1 52 50a10 10 0 0 1 10-10" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="secure-payment-1">
                        <title>Secure Payment</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M38 42H4.4A2.4 2.4 0 0 1 2 39.6V12.4A2.4 2.4 0 0 1 4.4 10h43.2a2.4 2.4 0 0 1 2.4 2.4V22M2 18h48m-39.9 8H26m-16 8h7" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M38 38h24v16H38zm6 0V28a6 6 0 0 1 6-6 6 6 0 0 1 6 6v10m-6 6v4" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="bank-cards-1">
                        <title>Bank Cards</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M10.3 29l-2.2-6.1a2.4 2.4 0 0 1 1.4-3.1L50.1 5.1a2.4 2.4 0 0 1 3.1 1.4l8.7 24a2.4 2.4 0 0 1-1.4 3.1L50 37.4m-39.9-9.2L55 11.8m-8.3 9.8l4.5-1.6" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <rect data-name="layer1" x={2} y={29} width={48} height={30} rx="2.4" ry="2.4" fill="none" stroke="#101010" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                        <path data-name="layer1" fill="none" stroke="#101010" strokeMiterlimit={10} d="M10 43h14m12-6h6M10 51h2m8 0h2m8 0h2m8 0h2" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #101010)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="close-1">
                        <title>Close</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M41.999 20.002l-22 22m22 0L20 20" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="angle-right-1">
                        <title>Angle Right</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M26 20.006L40 32 26 44.006" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="angle-left-1">
                        <title>Angle Left</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M39 20.006L25 32l14 12.006" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="checkmark-1">
                        <title>Checkmark</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M16 33l11 11 21-22" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="checkmark-2">
                        <title>Checkmark</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M2 30l21 22 39-40" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="delete-circle-1">
                        <title>Delete Circle</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx="32.001" cy={32} r={30} transform="rotate(-45 32.001 32)" fill="none" stroke="#202020" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M42.999 21.001l-22 22m22 0L21 21" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="backpack-1">
                        <title>Backpack</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M56 26v32a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V26" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M12 62H6a4 4 0 0 1-4-4V42a4 4 0 0 1 4-4h2m44 24h6a4 4 0 0 0 4-4V42a4 4 0 0 0-4-4h-2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <rect data-name="layer1" x={8} y={10} width={48} height="19.98" rx={4} ry={4} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M24 10a8 8 0 1 1 16 0M24.1 46h-8v-8h8v8zM48 46h-8v-8h8v8zm-27.9-8V10.2m0 35.8v4M44 38V10.2M44 46v4" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="camping-1">
                        <title>Camping</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M62 61.995V45.997L44.531 23.995H20.898L2 45.997v15.998h60z" strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path d="M44.531 23.995L26.004 45.997 26 61.995m29.996.003L44.531 39.996 32.006 61.998m-6.002-16.001H2" strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" r={8} cy="9.997" cx={10} data-name="layer1" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="camp-fire-1">
                        <title>Camp Fire</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M6 62l46-14m-9.8 9.2L58 62M12 48l9.9 3" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M28 46c-7-1.3-14-4.5-14-12s7.4-9.1 4-14c3.6 2.2 5.7 4.9 6 8 0-6.2 1.3-8.3 4-12s2.9-11.1 2-14c6.4 3.2 13.5 10.7 12 24a18.1 18.1 0 0 0 4-12s16.3 25.2-8 32" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="do-not-disturb-1">
                        <title>Do Not Disturb</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M46 32V17a15 15 0 0 0-30 0 4 4 0 0 0 8 .1 7 7 0 1 1 12.2 4.7C30.7 27.1 16 26.2 16 36v24a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V32z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M24 36h14v18H24z" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="colander-1">
                        <title>Colander</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M8.3 21H2m60 0h-6.3" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </path>
                        <circle data-name="layer2" cx={20} cy={23} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={28} cy={23} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={24} cy={29} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={32} cy={29} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={40} cy={29} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={36} cy={35} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={28} cy={35} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={36} cy={23} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer2" cx={44} cy={23} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <path data-name="layer1" d="M56 17a24 24 0 0 1-48 0z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M41.1 47a10 10 0 0 0-18.3 0z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="dome-plate-cover-1">
                        <title>Dome Plate Cover</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M6 45v-2a26 26 0 0 1 52 0v2M28.6 17.1a4 4 0 1 1 6.7.1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M2 45h60m-2 0l-2 5a4.2 4.2 0 0 1-4 3H10c-1.7 0-3.2-1.3-4-3l-2-5" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="hot-coffee-1">
                        <title>Hot Coffee</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" d="M52 17.965v22.857c0 9.467-9.582 17.143-19.049 17.143h-1.9C21.58 57.965 12 50.289 12 40.822V17.965zM52 22h1.016A8.984 8.984 0 0 1 62 30.982a8.982 8.982 0 0 1-8.982 8.982H52" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path d="M32 13.998v-12m-12.002 12V8.002m24.004 5.996V8.002M62 60a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h56a2 2 0 0 1 2 2z" strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" data-name="layer1" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="donut-1">
                        <title>Donut</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <circle data-name="layer2" cx={32} cy={32} r={10} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <path data-name="layer2" d="M54 24c-6 1.8-7.1-3.5-6-6-4.5 1.2-8.9-1.9-6-8-3.4-.7-5.7-4.3-3.9-7.4A30.3 30.3 0 1 0 61.7 28c-4.4.8-6.8-1-7.7-4z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M28 12l2 2m-8 4l-4 4m-6-4v4m0 8l-2 2m6 4v4m-2 6l2 2m10 2l2 2m10-4l-2 2m10-4v4m1.8-12l4.2 4m4-10v4" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="cocktail-glass-1">
                        <title>Cocktail Glass</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M32 30v32m-10 0h20m7.3-54a54.4 54.4 0 0 0 .7-6H14a54.2 54.2 0 0 0 .7 6" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M32 30c11.7 0 15.8-13.8 17.3-22H14.7c1.5 8.2 5.6 22 17.3 22z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="spirit-glass-1">
                        <title>Spirit Glass</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M20 62h24M32 46v16m21.9-34C53.1 17 46 2 46 2H18s-7.1 14.3-7.9 26" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M10.1 28c0 .7-.1 1.4-.1 2 0 11.1 10.1 16 22 16s22-4.9 22-16c0-.7 0-1.3-.1-2z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="tropical-cocktail-1">
                        <title>Tropical Cocktail</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M33 32.1v28m-10 0h20" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </path>
                        <path data-name="layer1" d="M47.3 14.1a8 8 0 1 1 5.2 5.4" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" d="M1 4.1h8c5.2 0 9 3.6 10 10" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" d="M52.3 19.9a20.8 20.8 0 0 0 2.3-5.8H11.5a20.7 20.7 0 0 0 2.3 5.8" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M13.8 19.9C17.9 27.1 26 32.1 33 32.1s15.2-5 19.3-12.2z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="chicken-breast-1">
                        <title>Chicken Breast</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" d="M12.983 44.548l-4.234 4.237A4.131 4.131 0 0 0 3.212 54.9c2.143 2.143 2.934 1.471 3.658 2.2 1 1 .426 1.887 2.2 3.66a4.142 4.142 0 0 0 5.857-5.86 4.123 4.123 0 0 0-.334-.25l4.228-4.228" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" r={1} cy="9.97" cx="43.999" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" r={1} cy="11.974" cx="35.999" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <circle strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" r={1} cy="17.972" cx="45.999" data-name="layer2" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path strokeLinejoin="round" strokeLinecap="round" stroke="#202020" fill="none" d="M55.85 8.175a21 21 0 0 0-29.7 0A21.827 21.827 0 0 0 24.618 9.9c-.1.127-.193.268-.291.4-.332.434-.658.869-.951 1.32-6.2 9.3-6.746 23.059-9.244 25.555l-.709.709a5 5 0 0 0 0 7.072l5.658 5.656a5 5 0 0 0 7.07 0l.709-.709c2.676-2.676 17.549-2.391 27.35-10.547a21.513 21.513 0 0 0 1.641-1.475 21 21 0 0 0-.001-29.706z" data-name="layer1" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="pizza-1">
                        <title>Pizza</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M28.1 20v-6a24.1 24.1 0 1 0 21.8 13.9l-5.4 2.5m10.3-12.2l5-2.4A24 24 0 0 0 38.1 2l-.8 5" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M10.1 38a18 18 0 1 0 34.3-7.6L28.1 38V20a18 18 0 0 0-18 18z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <circle data-name="layer1" cx="21.1" cy={35} r={2} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer1" cx="25.1" cy={47} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <circle data-name="layer1" cx="35.1" cy={43} r={3} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }}>
                        </circle>
                        <path data-name="layer1" d="M38.1 7h-.8l-3.2 21 20.7-9.8A18 18 0 0 0 38.1 7z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="chinese-takeout-1">
                        <title>Chinese Takeout</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M53 2L41 16m20-9.2L42.4 22.3" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M3 28l6 34h32l6-34-16-16c-2.6-2.5-9.1-2.8-12 0S3 28 3 28z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M47 28H3l38 34m-26-6l8.2-9.9" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="orange-1">
                        <title>Orange</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M59.6 32.3c5.9 14.2.1 23.7-12.9 21.3S18.2 37.8 12.3 23.7 12.2 0 25.2 2.3s28.5 15.8 34.4 30z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" d="M59.2 50.6A32.7 32.7 0 0 1 34 62 32 32 0 0 1 2 30C2 20 6.2 10.6 13.4 4.7" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M20 26l32 4M24 8l28 40M42 18L32 40" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="watermelon-1">
                        <title>Watermelon</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M56 15h6v4a30 30 0 1 1-60 0v-4h6" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M8 15v4a24 24 0 1 0 48 0v-4zm24 16v4M20 23h-4m31.7 0h-4M24 29l-2.8 2.8M40 29l2.8 2.8" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="french-bread-1">
                        <title>French Bread</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M4 35c0-6.428 7.599-20 28-20 20.404 0 28 9.083 28 20 0 10.595-9.981 10.002-21.999 10.002h-24C11.018 45.002 4 42.454 4 35zm15.056-17.793c2.7 1.77 6.945 5.676 6.945 11.792m4-13.999c3 1.383 5.44 6.318 5.999 12m4-11.46c2.701 1.769 5.44 5.78 5.999 11.46" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M2 51h60" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="birthday-cake-2">
                        <title>Birthday Cake</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M6 59.998V29.996a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v30.002" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M2 59.995h59.998" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" d="M5.998 34.998a7.001 7.001 0 0 0 7 7c3.867 0 7-2.133 7-6m.002 0c0 3.867 3.135 6 7 6 3.867 0 7-2.133 7-6m0 0c0 3.867 3.135 6 7 6 3.867 0 7-2.133 7-6m0 0c0 3.867 3.135 6 7 6a6.974 6.974 0 0 0 3.002-.676M31.998 17.998v9.998m-16.002-9.998v9.998M48 17.998v9.998" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M18.996 8.998a7.341 7.341 0 0 0-3-5.998s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.594 2.594 0 0 0 .14-.867zm16.002 0a7.341 7.341 0 0 0-3-5.998s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.597 2.597 0 0 0 .14-.867zm16.002 0A7.341 7.341 0 0 0 48 3s-3 2.679-3 5.998a2.993 2.993 0 0 0 5.86.867 2.594 2.594 0 0 0 .14-.867z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="hot-coffee-2">
                        <title>Hot Coffee</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M49.997 21.967v22.856c0 9.468-9.581 17.144-19.049 17.144h-1.903c-9.468 0-19.048-7.676-19.048-17.144V21.967z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M2 62h57.994" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" d="M49.996 26h3.017a8.984 8.984 0 0 1 8.983 8.984 8.984 8.984 0 0 1-8.983 8.983h-3.017" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M29.997 15.999V2M17.995 15.999V8.003m24.004 7.996V8.003" strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="home-button-1">
                        <title>Home Button</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M32 4L2.445 34.57a.25.25 0 0 0 .174.43H10v27h15V45h14v17h15V35h7.382a.25.25 0 0 0 .174-.43z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="home-1">
                        <title>Home</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M2 31L32 5l30 26" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M54 19v-9h-9" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} d="M10 32.167V62h14V42h16v20h14V32.083" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="homepage-1">
                        <title>Homepage</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" d="M52 62V35h9.382a.25.25 0 0 0 .174-.43L32 4 2.445 34.57a.25.25 0 0 0 .174.43H12v27z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeLinejoin="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="password-1">
                        <title>Password</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M38.5 48l-2.2-17.1a9 9 0 1 0-8.7 0L25.5 48z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" d="M62 53.5a8.5 8.5 0 0 1-8.5 8.5h-43A8.5 8.5 0 0 1 2 53.5v-43A8.5 8.5 0 0 1 10.5 2h43a8.5 8.5 0 0 1 8.5 8.5z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 428.218 428.218" id="sleepers-1">
                        <title>sleepers</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M425.548 250.627c-12.814-21.002-46.897-33.038-80.654-44.214-15.859-5.251-30.84-10.211-41.72-15.756-33.374-17.013-67.716-33.249-68.059-33.412a5 5 0 0 0-6.657 2.385c-.024.052-.034.106-.056.158l-.013-.005-17.252 39.932c-111.84-13.387-170.712-32.936-181.161-36.637l-10.283-19a5 5 0 1 0-8.795 4.759l10.265 18.966c-1.702 6.824-7.905 31.293-14.638 52.987-4.843 15.601-5.19 32.376-5.208 35.907-.636 2.713-2.647 12.738.05 21.274a4.999 4.999 0 0 0 4.643 3.492l161.604 4.004c3.528.113 41.257 1.289 87.498 1.289 61.39 0 137.776-2.072 168.976-11.451a4.997 4.997 0 0 0 3.484-3.92c.083-.454 2.311-13.653-2.024-20.758zm-190.034-82.119c10.503 5.011 37.108 17.799 63.119 31.059 11.556 5.891 26.887 10.966 43.118 16.34 27.118 8.978 57.459 19.024 70.909 33.887-78.146 12.849-215.478 7.441-215.478 7.441l38.332-88.727zM16.077 223.757c5.933-19.118 11.458-40.36 13.919-50.07 16.857 5.727 73.717 23.05 177.006 35.604l-20.592 47.666-174.963-4.521c.301-6.349 1.304-17.964 4.63-28.679zm401.965 42.857c-57.401 14.859-248.147 8.924-250.141 8.859l-157.716-3.908c-.408-3.28-.127-6.661.235-9.154l187.222 4.84c98.539 1.81 156.792 1.946 220.044-8.215.483 2.783.48 5.562.356 7.578z" data-name="layer1" fill="#000" style={{ fill: 'var(--layer1, #000)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="wireframe-1">
                        <title>Wireframe</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M2 2h24v24H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} d="M38 2h24v24H38zM2 38h24v24H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M38 38h24v24H38z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer2, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="portfolio-grid-1">
                        <title>Portfolio Grid</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} d="M2 2h12v12H2zm24 0h12v12H26zm24 0h12v12H50zM2 50h12v12H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M26 50h12v12H26zm24 0h12v12H50z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} d="M2 25.988h12v12H2z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                        <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} d="M26 25.988h12v12H26zm24 0h12v12H50z" strokeLinejoin="round" strokeLinecap="round" style={{ stroke: 'var(--layer1, #202020)' }} />
                    </symbol>
                    <symbol viewBox="0 0 64 64" id="table-content-1">
                        <title>Table Content</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M2 6h60v12H2zm0 12v40h60V18" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" d="M14 26h36v24H14zm0 12h36M26 26v24m12-24v24" style={{ stroke: 'var(--layer2, #202020)' }} />
                        <circle data-name="layer1" cx={8} cy={12} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }}>
                        </circle>
                        <circle data-name="layer1" cx={15} cy={12} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }}>
                        </circle>
                        <circle data-name="layer1" cx={22} cy={12} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--layer2, #202020)' }}>
                        </circle>
                    </symbol>
                </svg></div>
            </div>
        </div>

    )
}