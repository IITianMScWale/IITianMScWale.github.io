import React from 'react'
import qrCode from './Images/qr_payment.jpg';
import { Link } from "react-router-dom";


export default function Payment() {
    return (
        <div className='container py-4 px-2'>
            <h1 className='text-info text-center fs-1'>Join Full Time Mentorship</h1>
            <p className="text-center text-secondary fs-4 fw-bold mb-5">(One Time Payment)</p>
            <p style={{ color: 'mediumorchid', fontFamily: 'monospace' }} className='text-left'>Have a look at our <Link to='/#features' className='text-decoration-underline'>features</Link> before joining or watch this video:</p >
            <p style={{ fontFamily: 'monospace' }} className='text-success text-left'><b>Present Fee:</b> &#8377; 1999/-</p>
            <p style={{ fontFamily: 'monospace' }} className='text-success text-left mb-4'><b>Validity</b>: Upto JAM'24 Counselling</p>
            <h2 className='mb-4 text-primary fs-2'>Payment Details</h2>
            <div className='container'>
                <div className='row text-left'>
                    <div className='col-md-6 text-center my-2'><img src={qrCode} alt='qr code for payment' width={300} /></div>
                    <div className='col-md-6 my-2'>
                        <div style={{ fontFamily: 'monospace' }} className='text-danger'>
                            <b>UPI ID</b>: rsrajput735416@ybl<br />
                            <b>Account No</b>: 332501000631<br />
                            <b>IFSC Code</b>: ICIC0003325<br />
                            <b>Account Holder</b>: Ramswaroop Rajput
                        </div>
                        <div className='text-secondary mt-4 lead fs-6'>
                            You can pay &#8377; 1999/- by scanning QR code or directly send the amount to bank account. After paying the amount send <b>screenshot/proof of payment</b> along with <b>your name, college name, mobile no.</b> and <b>email</b> on <a href='' className='text-decoration-underline'>Telegram</a>, <a href='' className='text-decoration-underline'>LinkedIn</a> or <a href='' className='text-decoration-underline'>Instagram</a>. After a quick verification by our team, you will automatically join counselling batch by our team. If you find any difficulty or question regarding anything, feel free to contact us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}