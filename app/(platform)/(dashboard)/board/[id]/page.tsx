import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ListContainer } from "./_components/list-container";

interface BoardIdPageProps {
    params: {
        id: string,
    };
};

const BoardIdPage = async ({
    params
}: BoardIdPageProps) => {
    const { orgId } = auth();

    if (!orgId) {
        redirect('/select-org');
    }

    const lists = await db.list.findMany({
        where: {
            boardId: params.id,
            board: {
                orgId
            },
        },
        include: {
            cards: {
                orderBy: {
                    order: "asc"
                },
            },
        },
        orderBy: {
            order: "asc"
        },
    });
    
    return (
        <div className="p-4 h-full overflow-x-auto bg boardPage">
            <ListContainer 
                boardId={params.id}
                data={lists}
            />
        </div>
    );
};

export default BoardIdPage;