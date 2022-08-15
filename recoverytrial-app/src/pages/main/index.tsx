import { useState } from "react";
import {GetServerSideProps} from 'next';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
type Props = {};


export default function Main(){
    
    return (
        <div>
            <Navbar />
            <div className="flex  h-screen bg-black justify-center items-center">
                <div className="bg-gray-600 mt-24 w-4/5 h-3/4 rounded-md">
                    {
                        
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}