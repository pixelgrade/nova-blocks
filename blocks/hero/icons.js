const { SVG, Path } = wp.components;

export const hero = (
    <svg width='20' height='20' viewBox='-1 -1 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M3.96143 5V10H14.003V5H3.96143ZM13.003 6H4.96143V9H13.003V6Z'
              fill='currentColor' />
        <path d='M4.96533 11H12.9986V13H4.96533V11Z' fill='currentColor' />
        <path fillRule='evenodd' clipRule='evenodd' d='M0 2C0 0.895431 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.895431 18 0 17.1046 0 16V2ZM2 2H16V16H2V2Z'
              fill='currentColor' />
    </svg>
);

export const alignBottom = (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
    </SVG>
);

export const alignCenter = (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
        />
    </SVG>
);

export const alignTop = (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
    </SVG>
);