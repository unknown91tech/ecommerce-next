
import { FC } from "react";
import s from "./Hero.module.css"
import Link from "next/link";
import Container from "../Container";

interface Props {
    headline: string,
    description:string
}

const Hero: FC<Props> = ({headline, description}) => {
    return(
        <div className="bg-black">
            <Container >
            <div className={s.root}>
                <h2 className={s.headline}>
                    {headline}
                </h2>
                <div>
                    <p className={s.description}>
                        {description}
                    </p>
                    <Link href="/" >
                        <div className={s.link}>
                        Read it here
                        </div>
                           
                        
                    </Link>
                </div>
            </div>
            </Container>

        </div>
    )
}
export default Hero;