import {LockOutlined, SendOutlined, UserOutlined} from "@ant-design/icons";
import {Alert, Button} from "antd";
import {useRouter} from "next/router";
import {useLogin} from "../../hooks/auth/useLogin";
import {InputForm, Title, TransparentCard} from "../../../styles/global.style";
import {RedirectSpan} from "../../../styles/pages/login/login.style";
import {useState} from "react";

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { login } = useLogin();
    const { push } = useRouter();

    const onChangeEmail = (event) => {
        const {value} = event.target as HTMLInputElement
        setEmail(value);
    }

    const onChangePassword = (event) => {
        const {value} = event.target as HTMLInputElement
        setPassword(value);
    }

    const sendLogin = async () => {
        try {
            await login(email, password)
            await push("/")
        }
        catch (error) {
            const {message} = error.response.data
            setErrors(Array.isArray(message) ? message : [message])
        }
    }

    return (
        <TransparentCard>
            <Title>Login</Title>

            <InputForm
                onChange={onChangeEmail}
                defaultValue={email}
                size="large"
                placeholder="Email"
                prefix={<UserOutlined />}
            />
            <InputForm
                onChange={onChangePassword}
                defaultValue={password}
                type="password"
                size="large"
                placeholder="Password"
                prefix={<LockOutlined />}
            />

            <RedirectSpan onClick={() => push('/register')}>
                Create an account
            </RedirectSpan>

            <Button onClick={sendLogin} ghost>Login <SendOutlined /></Button>

            {errors.map((error, index) => <Alert key={`error-${index}`} message={error} type="error" showIcon />)}
        </TransparentCard>
    )
}