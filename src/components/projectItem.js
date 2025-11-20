import Link from "next/link";

export default function projectItem({ title, description, year, link }) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="hover:bg-base-300 rounded-lg px-4 py-2 transition-all cursor-pointer">
            <div className="flex justify-between gap-2">
              <strong>
                {title}
              </strong>
              <span className="text-muted">
                {description}
              </span>
              <div className="bg-muted h-[1px] flex-1 mx-auto my-auto"></div>
              <div className="text-muted">{year}</div>
            </div>
          </div>
        </Link>
    )
}
