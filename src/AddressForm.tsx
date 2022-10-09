import { FormWrapper } from "./FormWrapper";

type AddressData = {
	street: string,
	city: string,
	state: string,
	zip: string,
}

type AddresFormProps = AddressData & {
	updateFields: (fields: Partial<AddressData>) => void 
}

export function AddressForm({street, city, state, zip, updateFields}: AddresFormProps) {
	return (
		<FormWrapper title="Addres Details">
			<label>Street</label>
			<input autoFocus required value={street} onChange={e => updateFields({ street: e.target.value })} type="text"/>
			<label>City</label>
			<input required value={city} onChange={e => updateFields({ city: e.target.value })} type="text"/>
			<label>State</label>
			<input required value={state} onChange={e => updateFields({ state: e.target.value })} type="text"/>
			<label>ZIP</label>
			<input required value={zip} onChange={e => updateFields({ zip: e.target.value })} type="text"/>    
		</FormWrapper>
	)
}
