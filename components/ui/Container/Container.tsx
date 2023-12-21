import { ReactNode, FC , ComponentType, HTMLAttributes, HtmlHTMLAttributes} from "react";


interface Props {
  children: ReactNode | ReactNode[]
  el?: React.ComponentType<HtmlHTMLAttributes<HTMLElement>>
}  


const Container: FC<Props> = ({children, el: Component ="div"}) => {

  return (
    <Component
      className="px-5 mx-auto max-w-8xl"
    >
      {children}
    </Component>
  )
}

export default Container;