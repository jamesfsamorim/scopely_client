import {LockOutlined, MailOutlined, SendOutlined, UserOutlined} from "@ant-design/icons";
import {Alert, Button, notification} from "antd";
import {useState} from "react";
import {RedirectSpan} from "../../../styles/pages/login/login.style";
import {useRouter} from "next/router";
import {InputForm, Title, TransparentCard} from "../../../styles/global.style";
import {publicApi} from "../../../config/api.config";

export const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { push } = useRouter();

    const onChangeName = (event) => {
        const {value} = event.target as HTMLInputElement
        setName(value);
    }

    const onChangeEmail = (event) => {
        const {value} = event.target as HTMLInputElement
        setEmail(value);
    }

    const onChangePassword = (event) => {
        const {value} = event.target as HTMLInputElement
        setPassword(value);
    }

    const createPlayer = async () => {
        const newPlayer = {name, email, password}
        try {
            await publicApi.post('/players', newPlayer)
            notification.success({message: 'Player Created', description: 'You will be redirected in a moment'})
            await push('/')
        } catch (err) {
            const {message} = err.response.data
            setErrors(Array.isArray(message) ? message : [message])
        }
    }

    return (
        <TransparentCard>
            <Title>Register</Title>

            <InputForm
                onChange={onChangeName}
                defaultValue={name}
                size="large"
                placeholder="Name"
                prefix={<UserOutlined/>}
            />
            <InputForm
                onChange={onChangeEmail}
                defaultValue={email}
                size="large"
                placeholder="Email"
                prefix={<MailOutlined/>}
            />
            <InputForm
                onChange={onChangePassword}
                defaultValue={password}
                size="large"
                type="password"
                placeholder="Password"
                prefix={<LockOutlined/>}
            />

            <RedirectSpan onClick={() => push('/login')}>
                Already have an account ? Go to login
            </RedirectSpan>

            <Button onClick={createPlayer} ghost>Create <SendOutlined/></Button>

            {errors.map((error, index) => <Alert key={`error-${index}`} message={error} type="error" showIcon />)}
        </TransparentCard>
    )
}