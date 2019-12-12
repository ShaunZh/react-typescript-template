import defaultHeadImg from '@/assets/images/ic-default-head.png'
import styled from 'styled-components'
import px2rem from '@/utils/px2rem'
interface Props {
  src: string
}
// img中的src是属于标签属性，需要使用如下写法
const Img = styled.img.attrs((props: Props) => ({
  src: props.src && props.src.length ? props.src : defaultHeadImg
}))`
  width: ${px2rem('130px')};
  height: ${px2rem('130px')};
  border-radius: 50%;
  border: ${px2rem('6px')} solid rgba(254, 127, 111, 1);
`
export default Img
