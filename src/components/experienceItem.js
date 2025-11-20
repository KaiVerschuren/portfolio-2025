import Link from "next/link";

export default function experienceItem({time, title, description, link}) {
    return (
        <div>
            <span className='text-muted font-bold'>{time}</span>
            <Link href={link} target="_blank" rel="noopener noreferrer">
            <h4>{title}</h4>
            </Link>
            <span className='text-muted'>{description}</span>
          </div>
    )
}
