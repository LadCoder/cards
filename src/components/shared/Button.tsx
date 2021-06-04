import * as React from "react";
import { combineClassNames } from "../../services/utilities";
import styles from './Button.module.css'

interface Props {
    className?: string,
    // icon?: Icon,
    type?: ButtonType,
    disabled?: boolean,
    text: string,
    after?: JSX.Element,
    onClick: () => void
}

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Valid = 'valid',
    Danger = 'danger',
    Warning = 'warning'
}

export function Button ({ 
    className,
    type = ButtonType.Secondary,
    disabled = false, 
    text, 
    after, 
    onClick  
}: Props) {
    return(
        <button
            className={combineClassNames(styles.button, className, disabled ? styles.disabled : styles[type])}
            disabled={disabled}
            onClick={onClick}
        >
            {/* {icon} */}
            {text}
            {after}
        </button>
    )
}

interface ButtonBarProps {
    className?: string,
    children?: React.ReactNode
}

export function ButtonBar ({
    className,
    children
} : ButtonBarProps) {
    return (
        <div className={className}>
            <div className={combineClassNames(styles.buttonBar)}>
                {children}
            </div>
        </div>
    )
}