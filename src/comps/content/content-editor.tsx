"use client";

import { Dialog, Button, Inset, Table, TableBody, Flex, DialogClose } from "@radix-ui/themes"
import { atom, useAtom } from "jotai";

const editorOnAtom = atom(false)

export const ContentEditor = () => {
    const [editorOn, setEditorOn] = useAtom(editorOnAtom)
    return <Dialog.Root open={true} defaultOpen={false} >
        <Dialog.Trigger>
            <Button>View users</Button>
        </Dialog.Trigger>
        <Dialog.Content>
            <Dialog.Title>Users</Dialog.Title>
            <Dialog.Description>
                The following users have access to this project.
            </Dialog.Description>

            <Inset side="x" my="5">
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <TableBody>
                        <Table.Row>
                            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                            <Table.Cell>danilo@example.com</Table.Cell>
                            <Table.Cell>Developer</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                            <Table.Cell>zahra@example.com</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                        </Table.Row>
                    </TableBody>
                </Table.Root>
            </Inset>

            <Flex gap="3" justify="end">
                <DialogClose>
                    <Button variant="soft" color="gray">
                        Close
                    </Button>
                </DialogClose>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
}