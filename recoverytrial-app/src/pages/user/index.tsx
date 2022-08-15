import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function User(){
    return(
        <div>
            <div className="h-20">
                local da navbar
            </div>
            <main>
                <div className="bg-black h-screen flex flex-row">

                    <div className="bg-gray-400 w-screen flex flex-col items-center ">

                        <p className="mt-10 mr- font-bold text-blue-200 text-lg">Informações pessoais</p>
                        <div className=" w-3/4 h-80 flex flex-row gap-32 border-t-2 border-pink-100 justify-center items-centerfirst-letter
                        mb-16">
                            
                            <div className=" flex flex-col gap-1 mt-3">
                                <label htmlFor="fieldName"> Nome </label>
                                <input type="text" className="w-80" id='fieldName' />

                                <label htmlFor="fieldLastName"> Sobrenome </label>
                                <input type="text" id='fieldLastName' />

                                <label htmlFor="fieldNewPassword"> Nova senha </label>
                                <input type="password" id='fieldNewPassword' />

                                <label htmlFor="fildNewPasswordC"> Confirmação de senha </label>
                                <input type="password" id='fieldNewPasswordC' />
                            </div>
                            
                            <div className="flex flex-col gap-1 mt-3">
                                <label htmlFor="fildMail"> Email </label>
                                <input type="mail" className="w-80" id='fieldMail' />

                                <label htmlFor="fildNumber"> Número </label>
                                <input type="text" id='fieldNumber' />

                            </div>

                        </div>
                        
                        <p className="-mr- font-bold text-blue-200 text-lg">Seus treinamentos</p>
                        <div className="w-3/4 h-1/4 flex flex-row  border-t-2  border-pink-100">
                        </div>

                    </div>

                </div>

            </main>
            <Footer/>
            
        </div>
    )
}