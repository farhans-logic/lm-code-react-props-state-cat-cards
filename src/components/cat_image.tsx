// cat_image.tsx
interface CatImageProps {
	image: string;
	altText: string;
    licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

const CatImage: React.FC<CatImageProps> = ( catImageProps: CatImageProps) => (
	<>
		<img className='card__image' src={catImageProps.image} alt={catImageProps.altText} />
        <p className='card__text__small'>
			Image licenced under <a href={catImageProps.licenceUrl}>{catImageProps.licenceType}</a>
			{catImageProps.attributionName && (
				<>
					&nbsp;by <a href={catImageProps.attributionUrl}>{catImageProps.attributionName}</a>
				</>
			)}
		</p>
	</>
);

export default CatImage;