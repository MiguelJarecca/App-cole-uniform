
export const UserRow = ({ id, name, lastname, email }) => {

    const onSelectedUser = (id, name, lastname, email) => {
        
    }

    return (
        <>
            <tr>
                <th>{id}</th>
                <th>{name}</th>
                <th>{lastname}</th>
                <th>{email}</th>
                <th>{"rol"}</th>
                <th>
                    <button
                        type="submit"
                        onClick={() => onSelectedUser({name, lastname, email}) }
                        >
                        Actualizar
                    </button>
                </th>
                <th>{"das"}</th>
            </tr>
        </>
    )
}