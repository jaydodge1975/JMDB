        console.log('Cast & Crew')
        console.log(castCrew)
        console.log('Cast')
        const cast = castCrew.cast
        console.log(cast.length)
        console.log('Cast Arrays')
        let castArrCount = cast.length
        for(let listCast = 0; listCast < castArrCount; listCast++){
          console.log('Cast array ' + listCast + ' plus data pulled')
          let charInfo = cast.[listCast]
          console.log(charInfo)
          let charName = charInfo.character
          console.log(charName)
          let charRealName = charInfo.name
          console.log(charRealName)
          let charId = charInfo.id
          console.log(charId)
          let charGen = charInfo.gender
          console.log(charGen)
          let charPicUrl = charInfo.profile_path
          console.log(charPicUrl)

          setCharName(charName)
          setCharRealName(charRealName)
          setCharId(charId)
          setCharGen(charGen)
          setCharPicUrl(charPicUrl)


          <div className={'charWrapper' + cast.gender}>
          <div className='charPic'>
            <img
            src={'https://image.tmdb.org/t/p/original' + cast.profile_path}
            key={cast.id}
            alt=''
            />
          </div>
          <div className='charName'>{cast.character}</div>
          <div className='charRealName'>{cast.name}</div>