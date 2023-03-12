import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './information.scss'
const Information = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.test);
    return (
      <div className="info_block">
        <div className="info_block_inner">
          <Link className='link' to={"/"}>
            <Button variant="contained">назад</Button>
          </Link>
          <div className="information_inner">
            <div className="person_info">
              <h3>Логин</h3>
              <h3>{data.Login}</h3>
            </div>
            <div className="person_info">
              <h3>Имя</h3>
              <h3>{data.Name}</h3>
            </div>
            <div className="person_info">
              <h3>Номер телефона</h3>
              <h3>+{data.Mobile}</h3>
            </div>
            <div className="person_info">
              <h3>Год рождения</h3>
              <h3>{data.date}</h3>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Information;