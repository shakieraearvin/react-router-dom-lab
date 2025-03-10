import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
       mailbox._id === Number(mailboxId)
    ));

    return (
        <>
            <h2>{selectedBox._id}</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
                <dt>Box Owner:</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dd></dd>
            </dl>
        </>
    );
};


export default MailboxDetails;