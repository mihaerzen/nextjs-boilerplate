import { NextPage } from 'next'
import Image from 'next/image'

import coverImage from './pexels-niki-nagy-1128408.jpg'

const IndexPage: NextPage = () => (
  <div className="max-w-md m-auto">
    <h1>Hello 👋</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam sem,
      mattis quis dapibus in, maximus at augue. Phasellus at risus faucibus
      lorem porttitor placerat. Proin et elementum arcu. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Nunc ullamcorper enim eget ligula scelerisque mattis. Integer convallis
      maximus porta. Fusce varius ac nisi vitae euismod. Mauris rutrum in tellus
      id placerat.
    </p>

    <Image src={coverImage} width={448} sizes="448px" alt="cover image" />

    <p>
      Suspendisse risus dui, dictum vel libero vitae, porttitor pretium magna.
      Duis nec quam vel arcu ornare condimentum in nec ante. Nullam ut libero at
      sem tempus blandit vel id arcu. Vivamus at lobortis justo. Praesent metus
      mi, cursus convallis sollicitudin eu, pharetra ac dui. Phasellus vel eros
      auctor, dignissim libero eget, egestas lacus. Nulla magna leo, vehicula
      non neque nec, molestie bibendum risus. Nam ut rhoncus orci. Nullam lectus
      libero, vestibulum et venenatis vitae, lacinia eget tortor. Curabitur
      consectetur neque quis velit ornare blandit ut eu urna. Praesent
      condimentum viverra elit. Aenean justo ligula, posuere eu tortor vel,
      maximus posuere purus. Praesent augue justo, pulvinar sed lectus quis,
      hendrerit eleifend tellus.
    </p>
  </div>
)

IndexPage.displayName = 'IndexPage'

export default IndexPage
