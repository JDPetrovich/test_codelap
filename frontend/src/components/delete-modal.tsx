import Modal from "./modal"

type Props = {
    onConfirm: () => Promise<void>
    onCancel: () => void
}

export default function DeleteModal({ onConfirm, onCancel }: Props) {
    return (
        <Modal onClose={onCancel}>
            <div className="space-y-4">

                <h2 className="text-xl font-bold">
                    Are you sure you want to delete this item?
                </h2>

                <div className="flex justify-end gap-2">

                    <button
                        onClick={onCancel}
                        className="border px-4 py-1 rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </Modal>
    )
}