import { FormWrapper } from "./FormWrapper";

type AccountData = {
	email: string,
	password: string,
}

type AccountFormProps = AccountData & {
	updateFields: (fields: Partial<AccountData>) => void 
}

export function AccountForm({email, password, updateFields}: AccountFormProps) {
	return (
		<FormWrapper title="Account Details">
			<label>Email</label>
			<input autoFocus required value={email} onChange={e => updateFields({ email: e.target.value })} type="text"/>
			<label>Password</label>
			<input required value={password} onChange={e => updateFields({ password: e.target.value })} type="password"/>
		</FormWrapper>
	)
}
