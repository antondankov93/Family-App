import React from 'react'
import s from './UsersList.module.css'
import * as axios from 'axios'
import usersPhoto from '../../../../assets/Image/UsersIcon.png'


const UsersList = (props) => {

  let getUsers = () => {
      if (props.users.length === 0) {
          // props.setUsers([
          //     {
          //         id: 1,
          //         logoUrl: "https://img.icons8.com/dusk/128/000000/walter-white.png",
          //         followed: false,
          //         fullName: "Anton",
          //         status: "Hey i'm using this shit",
          //         location: {country: "USA", city: "Charlotte"}
          //     },
          //     {
          //         id: 2,
          //         logoUrl: "https://img.icons8.com/dusk/128/000000/darth-vader.png",
          //         followed: true,
          //         fullName: "Dmitriy",
          //         status: "Say Hello",
          //         location: {country: "Russia", city: "Urypinsk"}
          //     },
          //     {
          //         id: 3,
          //         logoUrl: "https://img.icons8.com/dusk/128/000000/futurama-zoidberg.png",
          //         followed: false,
          //         fullName: "Fedor",
          //         status: "CAVABANGA!!!",
          //         location: {country: "Russia", city: "Moskow"}
          //     },
          // ])
          axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
              props.setUsers(response.data.items);
          });
      }
  }

    <div className={s.paginator}>
        <span>1</span>
        <span className={s.selected}>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
{
            props.users.map(u => <div key={u.id}>
            <section className={s.wrapper}>

                <div className={s.logoAndStatus}>
                    <img src={u.photos.small !== null ? u.photos.small : usersPhoto}/>
                    {u.followed
                        ?
                        <button className={s.followedBtn} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        :
                        <button className={s.followedBtn} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }

                </div>


                <div className={s.UserAllContent}>
                    <div className={s.NameStatus}>
                        <p className={s.Name}>{u.name}</p>
                        <p className={s.Status}>{u.status}</p>
                    </div>

                    <div className={s.CountryCity}>
                        <p className={s.Country}>{'u.location.country'}</p>
                        <p className={s.City}>{'u.location.city'}</p>
                    </div>
                </div>

            </section>

        </div>)}
        </div>)
}


