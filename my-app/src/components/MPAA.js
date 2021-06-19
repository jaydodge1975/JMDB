import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MpaaRating = () => {

  const { id } = useParams()
  const [ mpaaRating, setMpaaRating ] = useState()
  // const [ mpaaError, setMpaaError ] = useState()

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=6dbfefac6de6ecc76ddbd5147477c2e3`)
      .then(respone => respone.json())
      .then(mpaa => {
        let mpaaArrCount = mpaa.results.length
        for(let firstArr = 0; firstArr <= mpaaArrCount; firstArr++){
          let countryCodes = mpaa.results[firstArr].iso_3166_1
          if(countryCodes === 'US') {
            let secondArr = 0
            let lastArr = mpaa.results[firstArr].release_dates.[secondArr]
            let rating = lastArr.certification
            if (rating !== '') {
            } else {
              rating = 'NR'
            }
            setMpaaRating(rating)
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("The above error (TypeError: Cannot read property 'iso_3166_1' of undefined) is because no 'US' array was found when looking for the MPAA (Motion Picture Association of America) certification.")
      });
  }, [id])

    return (
      <>
        <div className={mpaaRating}>{mpaaRating}</div>
      </>
    )

};

export default MpaaRating;
