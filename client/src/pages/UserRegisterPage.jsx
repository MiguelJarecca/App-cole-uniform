import { useState } from "react";
import { Header } from "../components/Header";
import { UserForm } from "../components/UserForm";
import { Footer } from "../components/Footer";

const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
}

export const UserRegisterPage = () => {

    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    return (
        <>
            <Header />

            <div className="container-register-user">
                <div className="container-form">
                    <h3>Registrar Usuario</h3>

                    <UserForm userSelect={userSelect}></UserForm>
                </div>
            </div>

            <Footer />
        </>
    )
    
}