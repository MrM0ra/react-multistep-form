import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"

type FormData = {
	firstName: string,
	lastName: string,
	age: string,
	street: string,
	city: string,
	state: string,
	zip: string,
	email: string,
	password: string
}

function App() {
	
	const INITIAL_DATA : FormData = {
		firstName:"",
		lastName:"",
		age:"",
		street:"",
		city:"",
		state:"",
		zip:"",
		email:"",
		password:"",
	}

	const [data, setData] = useState(INITIAL_DATA)

	function updateFields(fields: Partial<FormData>){
		setData(prev => {
			return {...prev, ...fields}
		})
	}

	const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next} = useMultistepForm([
		<UserForm {...data} updateFields={updateFields}/>,
		<AddressForm {...data} updateFields={updateFields}/>,
		<AccountForm {...data} updateFields={updateFields}/>
	])

	function onSubmit(e: FormEvent) {
		e.preventDefault()
		if(!isLastStep) return next()
		alert("Successful Account Creation")
	}

	return (

		<div 
			style={{
				position: "relative",
				background: "White",
				border: "1px solid black",
				padding: "2rem",
				margin: "1rem",
				borderRadius: ".5rem",
				fontFamily: "arial",
				maxWidth: "max-content"
		  	}}
		>
			<form onSubmit={onSubmit}>
				<div 
					style={{
						position: "absolute", 
						top:".5rem", 
						right:".5rem"
					}}>
					{currentStepIndex+1} / {steps.length}
				</div>
				{step}
				<div 
					style={{
						marginTop: "1rem", 
						display:"flex", 
						gap:".5rem", 
						justifyContent:"flex-end"
					}}>
					{!isFirstStep && <button type="button" onClick={back}>Back</button>}
					<button>{isLastStep ? "Finish" : "Next"}</button>
				</div>
			</form>
		  </div>

	)
}

export default App
