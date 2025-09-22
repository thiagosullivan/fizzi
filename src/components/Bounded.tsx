import clsx from "clsx";
import React from "react";

type BoundedProps<T extends React.ElementType> = {
  as?: T; // Agora 'as' é um componente genérico
  className?: string;
  children: React.ReactNode; // Aceita qualquer tipo de conteúdo dentro do Bounded
} & React.ComponentPropsWithRef<T>; // Herda todas as props do componente passado no 'as'

export const Bounded = <T extends React.ElementType = "section">({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};
