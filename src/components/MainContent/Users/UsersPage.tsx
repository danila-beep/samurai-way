import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { UserPageType, UserType, followUserAC, unfollowUserAC } from '../../../store/reducers/usersReducer'
import { Button } from '../../../shared/Button'

const UsersPage = () => {
  const usersPageData = useSelector<RootState, UserPageType>(state => state.usersPage)
  const dispatch = useDispatch()


  return (
    <div>{usersPageData.users.map(user => {
      console.log(usersPageData);
      console.log(user.isFollowed);
      return (
        <div key={user.id} style={{display: "inline-block", padding: "10px", margin: "10px", border: "1px solid black"}}>
          <div>
            <img src={user.userPhoto} alt="" />
          </div>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
          <div>
          <Button onClick={() => dispatch(followUserAC(user.id))}>Follow</Button>
          <Button onClick={() => dispatch(unfollowUserAC(user.id))}>Unfollow</Button>
          </div>
          <div>
            {user.isFollowed.toString()}
          </div>
        </div>
      )
    })}</div>
  )
}

export default UsersPage