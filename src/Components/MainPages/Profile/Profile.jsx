import HeadData from './HeadData/HeadData'
import style from './Profile.module.css'
import InputFormConteiner from "./InputForm/InputFormConteiner";


const Profile = (props) => {
    return (
        <div>
            <HeadData/>

            <InputFormConteiner/>

            {Posts(props.postsObj)}
        </div>
    )
}


const Post = (props) => {
    return (<div>{props.message}</div>
    )
}

function Posts(Arrey) {

    return Arrey.map(p => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id}/>
    })
}

export default Profile
