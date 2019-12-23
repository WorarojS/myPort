import React from "react"

import { DivWrapper, Link, FontAwesomeIconStyled } from "./styled"
import { socialBar } from "../../util"

const SocialBar = () => {
  return (
    <React.Fragment>
      <DivWrapper className='flex'>
        <DivWrapper className='line' />
        {socialBar.map((data, index) => (
          <DivWrapper key={index}>
            <Link href={data.href} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIconStyled
                className='social'
                icon={data.icon}
                size='lg'
              />
            </Link>
          </DivWrapper>
        ))}
      </DivWrapper>
    </React.Fragment>
  )
}

export default SocialBar
