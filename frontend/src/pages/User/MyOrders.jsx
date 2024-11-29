import './MyOrders.css'
import * as PropTypes from 'prop-types';
import { UserMenu } from '../../components/User/UserMenu';
import { getUser } from '../../lib/common';
import { useEffect, useState } from 'react';

const MyOrders = ({user = null, setUser}) => {
  let [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    async function getUserDetails() {
      const userData = await getUser(user.userId)
      setUserInfo(userData)
    }
    getUserDetails();
  }, [user.userId]);
  return (
    <main className='account'>
      <UserMenu userInfo={userInfo} setUser={setUser} setUserInfo={setUserInfo}/>
      <section>
        <h1>Mes Achats</h1>
  
      </section>
      
    </main>
  )
}

MyOrders.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired
};

export default MyOrders