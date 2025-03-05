import React from 'react'
import "./footer.css";
import Stack from '@mui/material/Stack';
import img1 from '../../assets/icons/fb.png';
import img2 from '../../assets/icons/whats.png';
import img3 from '../../assets/icons/ins.png';
import img4 from '../../assets/icons/twi.png';
import TextField from '@mui/material/TextField';

function Footer() {
    return (
        <div className='footContainer'>
            <div className='foTop'>
                <div className='box-left'>
                    <div style={{ width: '68%' }}>
                        <p style={{ fontSize: '23px', fontWeight: 'bold', marginTop: '50px' }}>Explorer Ceylon</p>
                        <p>Explorer Ceylon is your go-to platform for discovering the beauty of Sri Lanka. We offer tools
                            to make your travel easy and enjoyable. From stunning beaches and lush mountains to rich cultural
                            heritage and thrilling adventures, we help you plan the perfect trip. Start your adventure with Explorer
                            Ceylon like never before.</p>
                    </div>
                </div>
                <div className='box-mid'>
                    <div style={{marginLeft:'50px'}}>
                        <p style={{ fontSize: '23px', fontWeight: 'bold', marginTop: '50px' }}>Quick Access</p>
                        <p>Home</p>
                        <p>View Map</p>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <div className='box-right'>
                    <div style={{ width: '80%' }}>
                        <p style={{ fontSize: '23px', fontWeight: 'bold', marginTop: '50px' }}>Stay Connected</p>
                        <p>Want to know what we are up to. Sign up on you Email address to get updates.</p>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                            <TextField
                                style={{ width: '73%', backgroundColor: '#D9D9D9' }}
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                            />
                            <button className="buttons"
                                style={{ width: '27%', color: 'white', fontSize: '16px', border: 'none', cursor: 'pointer' }}
                                variant="contained"
                                label="Submit"

                            > Submit</button>
                        </div>
                        <Stack className='icons' direction="row" spacing={3}>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                        </Stack>
                    </div>
                </div>
            </div>
            <div className='fooBotom'>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>Email : explorer.ceylon@gmail.com |</span>
                    <span>Contact :  +94 76 29 888 33 |</span>
                    <span>Address: No 30, Galle road Colombo 6.</span>
                </div>
                <div>
                    <p>© 2025 Explorer Ceylon. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
