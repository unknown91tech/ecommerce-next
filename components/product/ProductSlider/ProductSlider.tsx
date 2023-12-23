import React,{ Children, FC, isValidElement } from "react";
import s from "./ProductSlider.module.css"

const ProductSlider: FC =({children}:any) => {
    return(
        <div className={s.root}>
            <div className="keen-slider zoom-out h-full transition-opacity">
                {Children.map(children, child =>
                    {
                        if(isValidElement(child)){

                            // return {
                            //     ...child,
                            //     props: {
                            //         ...child.props,
                            //         className: "keen-slider__slide zoom-out__slide"
                            //     }
                            // }
                            return React.cloneElement(child,{className: "keen-slider__slide zoom-out__slide"})
                        }

                        return child
                    }
                )}
            </div>
        </div>
    )
}
export default ProductSlider