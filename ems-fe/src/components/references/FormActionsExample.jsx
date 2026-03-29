import { useActionState } from "react";

export const FormActionsExample = () => {

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    function submitAction(prevFormState, formData) {
        const errors = [];

        const name = formData.get("name");
        const email = formData.get("email");

        if (!name) {
            errors.push("Name is required");
        }

        if (!isValidEmail(email)) {
            errors.push("Invalid email address");
        }

        if (errors.length > 0) {
            return { errors };
        }

        console.log("Name:", name);
        console.log("Email:", email);

        return { errors: null };
    }

    const [formState, formAction, pending] = useActionState(
        submitAction,
        { errors: null }
    );

    return (
        <>
            {/* adding noValidate to disable browser email validation */}
            <form action={formAction} noValidate >
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="email" placeholder="Email" />

                <button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Submit"}
                </button>
            </form>

            {formState.errors && (
                <ul className="errors">
                    vv
                    {formState.errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}

            <p>
                This example uses a form action with FormData. On submit, the action
                receives form values, validates them, and returns errors if any exist.
            </p>
        </>
    );
};