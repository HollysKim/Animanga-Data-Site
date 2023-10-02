const Staff = ({ staffList, filterCategory }) => {
  console.log(staffList);
  let k = 1;
  return (
    <div className='staff-container'>
      {filterCategory == "anime"
        ? staffList.data.map((data) => (
            <div className='staff-subcontainer' key={data.person.mal_id}>
              <img
                className='staff-img'
                src={data.person.images.jpg.image_url}
              ></img>
              <div className='staff-role-subcontainer'>
                <p className='staff-name' key={data.person.name}>
                  {data.person.name}
                </p>
                <div className='role-subcontainer'>
                  {data.positions.map((position) => (
                    <p key={position + data.person.name}>{position}</p>
                  ))}
                </div>
              </div>
            </div>
          ))
        : staffList.map((data) => (
            <div className='staff-subcontainer' key={data.mal_id}>
              <div className='staff-role-subcontainer'>
                <p className='staff-name' key={data.name}>
                  {data.name}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Staff;
