const e=`[\r
"_*.json). The files appear after the first use of the IRIS Manager program. The Manager is linked to the company in Connecting → Manager (pairing code or database file).",\r
"- {0} no. {1} {2} EUR",\r
"- COALESCE(z.VisakPorez,0)",\r
"-Command",\r
"-ExecutionPolicy",\r
"-File",\r
"-NonInteractive",\r
"-NoProfile",\r
"– {0} {1}: 0 items",\r
"– {0} {1}: statement of company {2} (PIB {3}) — another company, skipped",\r
"– {0} {1}: another company's account, skipped",\r
"– {0} {1}: account not recognized, waiting for manual import",\r
"– {0}: no items",\r
"– {0}: not a PDF, skipped",\r
"– {0}: another company's account, skipped",\r
"— (period expense)",\r
"— {0}; hours and minimum wage are proportional",\r
"— automatic",\r
"— no document (recorded in Payroll → Employees)",\r
"— no parent group —",\r
"— CENTRE FOR SOCIAL WELFARE",\r
"— whole year —",\r
"— other (type in) —",\r
"— public holiday",\r
"— {0} employees short",\r
"— company PIB {0}",\r
"— HEALTH INSURANCE FUND",\r
"— and they will get new numbers.",\r
"— the same reference number.",\r
"— select —",\r
"— select customer —",\r
"— select store —",\r
"— select basis —",\r
"— select a receipt —",\r
"— select a payment —",\r
"— select —",\r
"— select the company mailbox —",\r
"— select customer —",\r
"— select —",\r
"— select outlet —",\r
"— select type —",\r
"— costing sheets, takings, ledgers, payroll, finance",\r
"— click opens the transactions",\r
"— used by: {0}",\r
"— store in the negative (no opening balance or an earlier month not posted)",\r
"— parent store —",\r
"— the month in which both the goods and the invoice were received (VAT Act Art. 37 para. 7; Rulebook on the VAT Act Art. 94 para. 3).",\r
"— place is skipped —",\r
"— subsequent entry (period {0} locked)",\r
"— subsequent entry of a transfer from {0}",\r
"— not imported —",\r
"— Sunday",\r
"— no open calculation —",\r
"— no such account —",\r
"— we do not have this invoice",\r
"— not the whole day: turnover after that is not included (the daily Z report replaces it later)",\r
"— not assigned —",\r
"— not selected —",\r
"— not recognised —",\r
"— not posted",\r
"— new store \\"",\r
"— new contractor —",\r
"— zero rate",\r
"— the calculation needs to be confirmed with the accountant.",\r
"— the calculation reduces the basic salary so that basic + seniority bonus = the entered amount, so the employee receives",\r
"— the employee's surtax and the reference number for tax payment depend on the municipality.",\r
"— to be decided after the response —",\r
"— limited to the available {0}",\r
"— VAT reduced in",\r
"— pays by bank transfer",\r
"— by account number —",\r
"— credit reference number for public revenues:",\r
"— makes costing sheets and assigns numbers",\r
"— skip —",\r
"— search by name or code",\r
"— program chooses —",\r
"— average number of employees: {0}",\r
"— room account",\r
"— working day",\r
"— working day (not counted as a holiday)",\r
"— exchange data",\r
"— rotates —",\r
"— with VAT {0} without the right to deduction",\r
"— only scans invoices",\r
"— week confirmed",\r
"— freely entered recipient —",\r
"— saves to a file, does not print",\r
"— saved with a warning (arithmetic not confirmed)",\r
"— pro rata {0} h per week",\r
"— VAT rate —",\r
"— all mailboxes —",\r
"— all groups —",\r
"— its own summary, payslips and payout. Taxed as earnings: the tax is the difference between the tax on the sum of salary and IQOS and the tax on the salary alone (progressive rates apply to total income in the month), surtax charged to the employer. In",\r
"— in Excel each on its own sheet, in the PDF on its own page.",\r
"— in the selection",\r
"— total revenue: {0} EUR",\r
"— total assets: {0} EUR",\r
"— input VAT is deducted, PR-PDV is kept; turn off for a company outside the VAT system.",\r
"— leave increase for",\r
"— for them the absence \\"Religious holiday\\" is entered above (compensation as for a holiday); if they nevertheless work that day, the work is paid as work on a holiday. The program does not store religion, only the request. A day when the company does not work at all is marked with ↺ (non-working for everyone).",\r
"— substitute or an employee of another store —",\r
", {0} of another company",\r
", {0} errors",\r
", {0} replaced an item from a statement of a different format",\r
", and as VAT without the right of deduction and in field 26 (does not reduce the liability)",\r
", and allocated to lines is",\r
", and no later than {0}",\r
", and the items do not show it.",\r
", Aktivna=1, Uklonjena=NULL",\r
", without item {0}",\r
", without item: {0}",\r
", without store {0}",\r
", without basis",\r
", without a known register/store {0}",\r
", without a path (e.g. https://192.168.1.10:8443).",\r
", without a link to an item {0}",\r
", part of the file has already been imported",\r
", part of the shift for day {0}",\r
", duplicates (same turnover from another statement): {0}",\r
", or later",\r
", disability →",\r
", {0} sent from the send queue",\r
", IzmjenaUTC=?",\r
", cashier {0}",\r
", posted {0}",\r
", posted {0} ({1} EUR)",\r
", posted {0} payments ({1} EUR)",\r
", control check does not match on {0}",\r
", the check does not match on {0} (not entered)",\r
", control check does not match on {0} (manual import required)",\r
", control check matches on all",\r
", check: {0} orders, totals and balance match",\r
", person with disability",\r
", the store has a newer price {0}",\r
", store has a newer price: {0}",\r
", MarketID=?",\r
", margin",\r
", margin {0} %",\r
", under 18",\r
", highest (store price) {0} €",\r
", at most",\r
", not the whole database: each invoice is recognized by its IIC code and each daily takings entry by its permanent label, so the same document is never written twice.",\r
", unchanged: {0}",\r
", new items {0}",\r
", new cash registers: {0}",\r
", new stores: {0}",\r
", e.g. 16:00–18:00). Without a store it applies on all registers; with selected stores only on their registers. Types:",\r
", units: {0}",\r
", deleted receipts/lines {0}",\r
", of whom {0} hold a position from this Rulebook; the others are assigned by a contract annex within the period referred to in Article 15.",\r
", rejected {0}",\r
", write-offs {0}",\r
", deleted here (not restored) {0}",\r
", so they need to be printed again afterwards (Costing sheets and invoices → \\"Print all costing sheets\\"). Old numbers remain permanently recorded.",\r
", so it does not protect against disk failure. Here you switch on a daily copy to the backup folder (Google Drive, Connection → \\"Backup\\"), so the data is also outside the computer. That folder is used only for backups; data exchange goes through the IRIS CORVINA server.",\r
", so the same payee is recognised automatically on the next statements.",\r
", so the sum by stores is shown here. The export creates the book for",\r
", PIB {0}",\r
", repeated (same document from another message): {0}",\r
", tax",\r
", rulebook) and by decision; valid only for",\r
", skipped {0}",\r
", places skipped: {0}",\r
", outlets skipped: {0}",\r
", skipped: {0}",\r
", test entries skipped {0}",\r
", cash register program",\r
", invoice {0}",\r
", account is waiting for a decision: {0}",\r
", account not confirmed: {0}",\r
", with an error {0}",\r
", on the FZO List:",\r
", with VAT without the right to deduction",\r
", almost instantly: a change is sent a few seconds after it is entered, and changes from other devices arrive and are written automatically. The data also remains on this device. Google Drive is not used for the exchange, only for the",\r
", shift #…\\" arrive automatically from the IRIS CORVINA cash register (Connection → Cash register program) and are not entered manually.",\r
", incentive for work contribution up to",\r
", conflicts {0}",\r
", all assigned to positions from this Rulebook.",\r
", entered",\r
", new records written {0}",\r
", the data from the filed statement for are entered",\r
", already recorded from a statement of another form — daily / monthly / overview (same account, amount and date): {0}",\r
", already the same {0}",\r
", already the same: {0}",\r
", already existed {0}",\r
", already posted earlier: {0}",\r
", barcode links",\r
", the previous proposal was replaced ({0})",\r
", earlier imports replaced {0}",\r
"; {0} new items replaced those previously recorded from a statement without a payee (those are now duplicates)",\r
"; {0} statement transactions awaiting a type",\r
"; {0} with no breakdown at all",\r
"; 6-day",\r
"; the application checks them every time it is opened",\r
"; it is delivered to the FZO electronically and in paper form by the 10th of the month (deadline:",\r
"; another company on the same computer has its own connection (or shares this one, if it is from the same company group).",\r
"; above that — VAT is calculated. The percentage is by",\r
"; cash register without a store: {0}",\r
"; under 18 →",\r
"; users and PINs of the others are entered on it.",\r
"; optional: Date (without it — one period for the whole file), Outlet (without it — the selection below), Unit, Amount with VAT, Price, VAT %. A decimal comma is allowed. The same file imported twice does not create duplicate sales; a new file for the same outlet and period replaces the previously imported days after confirmation.",\r
"; optional: UoM, Purchase (excl. VAT), Retail (incl. VAT), VAT %. A decimal comma is allowed. Without prices in the file, the suggestion is the outlet prices, the cash register price list or the last costing sheet. The same file imported twice does not create duplicate rows.",\r
"; deduction (FZO software) {0} €; invoice amount {1} €.",\r
"; the others (Kasa, ZBroj, BrojRacuna, base and VAT per rate 21/15/7, Oslobodjeno0, Gotovina, Kartica) are optional. A decimal comma is allowed; when only the amount with VAT per rate is given (Bruto21…), the base and VAT are calculated. The same file imported twice does not create duplicate takings.",\r
"; plan by",\r
"; stocktake difference = counted − book stock on that day.",\r
"; cash register discounts {0} EUR",\r
"; debit reference number",\r
"; rulebook: up to",\r
"; the rule would give {0}",\r
"; skipped {0}: {1}",\r
"; skipped: {0}",\r
"; they are applied automatically). Increases by length of service and other grounds are regulated by the company in its rulebook (",\r
"; first part ≥",\r
"; difference to purchase cost",\r
"; decision",\r
"; copy the text with the text icon (⌷) at the bottom right, or by holding a finger on the text →",\r
"; {0} vouchers without a document removed",\r
"; removed without amount: {0}",\r
"; the payment is also larger than that sum",\r
": CoreIT \\"CoreSign EFI\\" or a suitable Pošta CG certificate. The certificate and password remain",\r
": uninstalling deletes the database on the phone, unsent scans and settings. Before an unavoidable uninstall, scans need to be sent (Connection → \\"Sync now\\") and a database copy made (Settings → Backup → \\"Export database copy\\").",\r
": up to the employee's fund as \\"Regular work\\", above the fund as \\"Overtime work\\" (+40 %). Night (22–06), Sunday and holiday are",\r
": an ENU shared with the cash register produces duplicate receipt sequence numbers.",\r
": invoiced",\r
": when paying the rent, the company calculates and pays the tax on income from property — the base is the rent reduced by standard costs (",\r
": costing sheets are created and document numbers are assigned here",\r
": under the Law on Observing Religious Holidays (Art. 2), an employee who observes it receives",\r
": messages are not flagged, moved or deleted.",\r
": rules for scale barcodes in the form \\"prefixes:type:item digits:value digits:decimals\\", separated by semicolons; type: tezina (weight) | iznos (amount) | komad (piece). Example: \\"27,28:iznos:5:5:2; 2:tezina:5:5:3\\". Empty = default rule (prefixes 20–29, weight).",\r
": the attachment is opened, reviewed and confirmed. The same statement sent to several addresses is shown once.",\r
": the program still writes and reads the Google Drive exchange folder, as before the server. The mode is needed only while some device of the company (an older phone, a computer on an old version) is not paired with the server; when all are paired, the mode is switched off, because Drive would otherwise keep transferring all exchange files.",\r
": the computer in the office. Phones in the shops scan and send invoices.",\r
": every change here publishes a new price list in the next exchange round. The register applies the promotion by itself: by period (from–to), by days of the week and by hours (",\r
": every costing sheet made by scanning (on this computer or by processing scans from the phone) immediately goes to the printer.",\r
": each statement is entered in the register, and each transaction gets a fingerprint and",\r
": payment requested for items that are not in the records. Payment only after a physical check.",\r
"! not on their side",\r
". — daily takings incl. VAT",\r
". (fund",\r
". (not in \\"all stores\\"):",\r
". (\\"Opening balance\\" field or Stock → Stocktake); without it the balance does not represent the stock of goods.",\r
". (stocktake) are not entered. Without them the estimate is not possible, because the whole purchase would be an expense. Enter the stock or enter a stocktake.",\r
". (expense in PD)",\r
". If the posting is wrong: \\"↩ undo\\", then post to the correct supplier.",\r
". Items linked to the code list from invoices:",\r
". Without these data the books, forms and payroll do not have a complete header.",\r
". The price and other data are entered in the Cash register price list.",\r
". Each employee's agreed net stays the same, while the gross, tax and contributions are adjusted.",\r
". year",\r
". year — data as of 31.12.",\r
". year (",\r
".",\r
". year. Without a decision number, the director's decision is contained in the decision itself.",\r
". and the opening balance",\r
". or the manual opening balance take precedence.",\r
". Payroll and shift changes from that device are waiting for an update.",\r
". is possible when all 12 months are closed (open:",\r
". is provisional (",\r
". is closed and prepared for certification (Rulebook Art. 13 and 15). The saved state is shown.",\r
". The books are kept by the date of receipt (VAT Act Art. 37 para. 7), so the receipts enter the current month's book. The list is for review.",\r
". Posting: Finance → Post month.",\r
". The code is entered on the cash register: Settings → IRIS CORVINA Server (data exchange).",\r
". The code is entered in Manager: first launch → Connect to Accounting.",\r
". which is not yet closed. When the book",\r
". The month approved by the accountant is locked with the \\"Lock month\\" button; after that, changes to that period are not possible.",\r
". of the following month (outlet settings).",\r
". would not be accurate.",\r
". does not have a cash + card split equal to the total takings (bank transfer from the register or takings without a split). The credit includes the whole takings (row \\"Takings-transfer and other\\"), but",\r
". Their invoices, costing sheets and all tax documents stay in the books as before. The only difference is in the debt overview: in the \\"our debt\\" view their invoices are not counted, and the \\"partner\\" view shows how much they owe suppliers.",\r
". Night, Sunday and holiday are added",\r
". A new device receives users from the Manager administrator's device; sign-in is with the name and PIN entered by the administrator.",\r
". New data is not transferred automatically; for a permanent connection, Manager is connected with a code (section 1). The file contains company data and is handed only to the person who uses Manager.",\r
". Obligation for",\r
". Required columns are",\r
". The calculation and the PD file exist in only one place.",\r
". Data is not written to the database.",\r
". Breakdown into full, reduced and exempt amounts by guest: Accommodation → Reports → Tourist tax.",\r
". The Tax Administration returns the ENU code, which is entered above immediately. The business premises code and the",\r
". after tax · sold",\r
". After the change, costing sheets are generated as PDF and Excel or sent to the printer.",\r
". Employer additionally: contributions",\r
". The allocation must be undone and repeated.",\r
". The year needs to be reopened.",\r
". That year must first be closed and the next one opened; until then",\r
". They need to be classified (Bank → Transactions, column \\"Type\\") and that month posted again (Finance → Post month).",\r
". The stocktake from 31.12. needs to be entered.",\r
". Attachments await review and are not posted automatically.",\r
". Applied automatically: when importing an invoice, processing scans from a phone and on the costing sheet (the global margin does not change it). A manual margin change for a cigarette on the costing sheet becomes a new rule. If a price is entered, the margin is calculated from the purchase price on the invoice.",\r
". Access is possible only with the consent of this device's user.",\r
". To change: Connection → \\"Role of this computer\\".",\r
". Check the rate and basis.",\r
". Loss up to this percentage",\r
". The schedule is locked;",\r
". The difference is caused by {0} costing sheets/receipts (list below).",\r
". Audit:",\r
". Those marked \\"?\\" have ambiguous names (e.g. \\"Classic\\", \\"Kent\\" also exist for chocolate, coffee, candy); mark them only if they are tobacco.",\r
". Next code after:",\r
". Saving is possible, but the data must be completed before the calculation.",\r
". were changed after the opening):",\r
". The import can be reverted with the \\"Undo last import\\" button.",\r
". keeps the general ledger, so it is not",\r
". For an outlet without a cash register and without imported sales, the RUC by item cannot be calculated (sales estimate: Stock and stocktake → Sales calculation by stocktake).",\r
". is closed, the final balance is shown here (Rulebook Art. 15). The stocktake of 31.12.",\r
". A lease from a legal entity or entrepreneur (by invoice) is not entered here.",\r
". A closed outlet of this company is selected individually (group \\"Closed stores\\" in the store selection); a store of another company does not belong here.",\r
"… and another",\r
"… and {0} more",\r
"… and {0} more places with a difference.",\r
"… and",\r
"…or a table copied from a PDF / e-mail",\r
".) is not entered. Without it the estimate is not possible, because the whole purchase would be an expense. The stock is taken with the \\"« From stocktake\\" button or entered manually.",\r
"· {0} {1} UTC",\r
"· {0} items · {1} tables · register {2} · ordering {3}",\r
"· {0} days without an invoice",\r
"· {0} errors",\r
"· {0} repeated",\r
"· {0} rows not recognised",\r
"· {0} warnings: {1}",\r
"· 134002 incl. VAT in costing",\r
"· assets",\r
"· automatic check enabled",\r
"· barcode {0}",\r
"· database {0}",\r
"· NO SALES BY ITEM (no register) — receipts only",\r
"· waiting to be sent: {0}",\r
"· register price {0} €",\r
"· prices set up to",\r
"· arrival {0}",\r
"· duplicate numbers:",\r
"· ambiguous name, needs checking",\r
"· Suppl. invoice:",\r
"· fiscalized",\r
"· monthly hours fund",\r
"· group {0}",\r
"· group: {0}",\r
"· installation {0}",\r
"· payout to the contractor",\r
"· payout to the lessor",\r
"· changes go to devices as manual changes",\r
"· amount estimated {0}",\r
"· amount:",\r
"· report by",\r
"· statement {0}",\r
"· source: {0}",\r
"· register {0}",\r
"· late from {0}",\r
"· posted on {0}",\r
"· with recipient",\r
"· quantity",\r
"· the licence from server {0} ({1}) does not restrict operation",\r
"· purchase price incl. VAT {0}",\r
"· highest sequence number:",\r
"· Sunday",\r
"· not on the register menu",\r
"· not in the company register",\r
"· register outlet {0} \\"{1}\\"",\r
"· outlets: {0}",\r
"· from the opening balance {0}",\r
"· from the stocktake {0}",\r
"· of which kiosk {0} EUR",\r
"· departure {0}",\r
"· departure was {0}",\r
"· approved",\r
"· base",\r
"· VAT-registered:",\r
"· period {0} – {1}",\r
"· PIB {0}",\r
"· PIB on the statement",\r
"· advance paid",\r
"· per receipt",\r
"· tax",\r
"· after this part, the remainder is",\r
"· CONFIRMED",\r
"· withdrawn batches:",\r
"· The filing version has not been saved.",\r
"· The filing version was saved {0}.",\r
"· PROPOSAL",\r
"· too long without contacting the server",\r
"· overview as of",\r
"· overtime",\r
"· recognised",\r
"· search: {0}",\r
"· revenue",\r
"· goods received",\r
"· received in the inbox folder:",\r
"· surtax",\r
"· surtax (borne by the contractor): {0}",\r
"· surtax: {0}",\r
"· selling",\r
"· selling value excl. VAT stays",\r
"· sold",\r
"· debit turnover",\r
"· average margin",\r
"· checked {0}",\r
"· account {0}",\r
"· previously used",\r
"· gap",\r
"· prescriptions from registers:",\r
"· order {0}",\r
"· item rows in the file:",\r
"· regular work",\r
"· deadline expired",\r
"· from item {0}",\r
"· with a rule:",\r
"· code {0}",\r
"· the next reading starts from",\r
"· next reading at",\r
"· shift {0}",\r
"· balance",\r
"· cash register state as of",\r
"· arrived {0}×",\r
"· all changes",\r
"· duration of the write",\r
"· in drawers",\r
"· included VAT",\r
"· total cost",\r
"· total company cost",\r
"· total payment received {0}",\r
"· total payment {0}",\r
"· total incl. VAT",\r
"· write in batches (devices receive the changes with the price list)",\r
"· Warnings: {0}",\r
"· import",\r
"· out of format (\\"~\\"):",\r
"· version {0}",\r
"· excess {0} → other income",\r
"· payable",\r
"· last statement import",\r
"· locked",\r
"· legal maximum",\r
"· goods stock ({0}): {1}{2}",\r
"· employed since",\r
"· bank account from company data",\r
"\\" — Tax books → Period by date)",\r
"\\" (it worked that way before the update too), but the server has not yet sent any file for it. A company that is not from the same group needs to be separated and paired with its own code.",\r
"\\" below the book. The deadline has passed for",\r
"\\": mode of operation",\r
"\\"{0}\\" and \\"{1}\\" are the same position and both have employees; the employees need to be corrected (Payroll → Employees) and one of them deactivated",\r
"\\"{0}\\" has been added to the group.",\r
"\\"{0}\\" is a backup copy of the company \\"{1}\\". Restore it as the company \\"{2}\\"?\\n\\nOK: restore as the company \\"{3}\\"{4}.\\nCancel: open as a separate database \\"{5}\\" (exchange with other computers does not work for it).",\r
"\\"{0}\\" does not print but saves to a file. To save, use \\"Save PDF\\", and select a real printer here.",\r
"\\"{0}\\" is not a barcode that can be remembered (8–14 digits or a code of 4 to 32 characters).",\r
"\\"{0}\\" is not an accounting database — select a file with the .knj.db extension.",\r
"\\"{0}\\" is not an accounting database. A file with the .knj.db extension must be selected.",\r
"\\"{0}\\" is not a valid barcode (up to 32 characters: digits, letters, dot and hyphen).",\r
"\\"{0}\\" is reported in IOPPD under basis {1}.",\r
"\\"{0}\\" saves to a file instead of printing. To save to a file, use the \\"Save PDF\\" button in the costing sheet overview.",\r
"\\"{0}\\": \\"{1}\\" is not a number.",\r
"\\"{0}\\": an employee is missing on {1} {2} ({3}): {4}.",\r
"\\"{0}\\": enter DA or NE.",\r
"\\"No check\\" = the cash register does not check the time that day. End before start = work past midnight.",\r
"\\"Calculate all\\"",\r
"\\"Post to end of month\\" (for receipts received in that month but registered later) and the safety net for late invoices work on the basis of",\r
"\\"Total excl. VAT\\" + \\"Total VAT\\" ({0}) is not \\"Total incl. VAT\\" ({1})",\r
"\\"Total VAT\\" ({0}) is greater than 21 % of the base {1} (the base and the tax have probably been swapped)",\r
"\\"Total VAT\\" ({0}) is not the sum of VAT by rates ({1})",\r
"\\"Valid until\\" is before \\"valid from\\".",\r
"\\"Valid until\\" cannot be in the past.",\r
"\\"Valid from\\" cannot be in the past.",\r
"« From stocktake",\r
"({0} % on purchase)",\r
"({0} − absences {1})",\r
"({0} EUR, not items)",\r
"({0} stores)",\r
"({0} have no costing sheet).",\r
"({0} OR {1}.IzvorUID LIKE '{2}%')",\r
"({0} OR s.IzvorUID NOT LIKE '{1}%')",\r
"({0} items without a selling price — posted at purchase price)",\r
"({0} contracts with natural persons)",\r
"({0} already exists)",\r
"({0}; only the batch matches)",\r
"({0}; Rulebook on Annual Leave) and is valid only for {2}; reward days are taken like other leave days and cannot be replaced by money, except upon termination of the employment relationship (Art. 79 para. 7 {3}).",\r
"(*) Expected payment — no statement or manual entry; the date is the next working day after the takings (excluding Saturday, Sunday and non-working holidays).",\r
"(*) Expected deposit: no deposit (bank statement or manual entry) is recorded for these takings; the date is the next working day after the takings (Saturdays, Sundays and non-working holidays are skipped), and the amount is the cash from the takings.",\r
"(+40 / +80 / +150 %) and are added up — they do not reduce regular work. Working days are entered above (days × 8 h), while night, Sunday and holiday hours as items; another option is entering days by shifts or taking hours from the shift schedule. Paid absences (leave, sick leave…) reduce the employee's fund.",\r
"(13), exempt",\r
"(14), outside the VAT system",\r
"(a.Naziv LIKE ? OR a.Sifra LIKE ?)",\r
"(a.Naziv LIKE ? OR s.NazivArtikla LIKE ?)",\r
"(automatic)",\r
"(Christmas Eve and Christmas 6–8 January, Easter, Eid, family patron saint day…) are",\r
"(no supplier)",\r
"(no store — company)",\r
"(no subject)",\r
"(no outlet)",\r
"(without a break).",\r
"(without a server, data up to the moment of export).",\r
"(prices set up to {0})",\r
"(whole month)",\r
"(per diems, field allowance, severance pay…) are excluded from the base for tax and contributions only up to the entered limit; the amount above the limit is taxed automatically. Check the limits with the accountant (they change by regulation); 0 means no limit.",\r
"(supplement on top of regular)",\r
"(different from the global costing sheet margin — this is how cigarettes are entered) stay as they are",\r
"(invoice by estimate)",\r
"({0} short)",\r
"(forced, with a database copy)",\r
"(group / prefix)",\r
"(gzip)",\r
"(and {0} more)",\r
"(or FolderSync): local folder",\r
"(or Code / Barcode) and",\r
"(below cost)",\r
"(the same company group).",\r
"(the same turnover from a daily and a monthly statement, or the same statement sent to two addresses, is recognised as a duplicate and skipped). Supplier payments recognised by PIB or a remembered account are posted immediately; the rest stays in \\"Transactions\\" marked",\r
"(the same owner, e.g. Atlantic and Magud), connects through that connection, without a new code:",\r
"(from days)",\r
"(from period)",\r
"(from shifts)",\r
"(derived from the days by shifts below)",\r
"(statement {0})",\r
"(contractor insured on another basis),",\r
"(single account for income tax and contributions) —",\r
"(clicking the square next to the name changes it).",\r
"(click for details)",\r
"(the company key is on the server)",\r
"(the books are now kept on the basis of \\"",\r
"(books)",\r
"(accountant, 08.10.2026) — the orders are in the \\"Payment orders\\" of that month's payroll calculation; notify the accountant of the payment no later than the payment date.",\r
"(postings",\r
"(at the accountant's). The main computer processes scans, and each of its changes appears on all secondary computers within 2 minutes. Secondary computers enter documents: the entries go to the main one, and the complete, tidied database comes back.",\r
"(on our side {0} EUR — difference {1})",\r
"(account 494).",\r
"(to the local government, outside gross) → total cost",\r
"(store {0})",\r
"(stores)",\r
"(margin up to 18 %, VAT",\r
"(the month has not been posted yet)",\r
"(model 18).",\r
"(n.Broj LIKE ? OR n.Opis LIKE ?)",\r
"(as of",\r
"(purchase value).",\r
"(lowest",\r
"(subsequent entry).",\r
"(button names), so it can be fixed before users report it. Personal data (JMBG, bank accounts, phone numbers, amounts, names of employees and customers) is erased before sending; the contents of documents are not sent. It goes through the server, only from the paired device (Connection → Server).",\r
"(they are not touched).",\r
"(not deductible)",\r
"(inactive)",\r
"(negative quantities) gets the new margin",\r
"(unfilled {0})",\r
"(unknown)",\r
"(unknown)",\r
"(unknown when)",\r
"(net {0} + tax-free {1})",\r
"(not today)",\r
"(not allowed)",\r
"(not insured) or",\r
"(not read)",\r
"(not in the Cash register price list)",\r
"(not in the register)",\r
"(not in the cash register catalogue)",\r
"(not in the code list)",\r
"(New Year, Labour Day, Independence Day, Statehood Day, Njegoš Day) are non-working days for everyone: work on that day is paid +150 %, and those who do not work receive compensation. They are entered automatically, two days each; when a holiday falls on a Sunday, the following day is also non-working (Law on State and Other Holidays, Art. 3).",\r
"(new items: {0})",\r
"(new items {0})",\r
"(e.g. {0})",\r
"(Obligations → Mail)",\r
"(published {0})",\r
"(calculation not yet closed)",\r
"(of which {0} with support level IV — counted as two)",\r
"(basis 065): base",\r
"(base as in KPR). The sum of \\"With VAT\\" = KPR control.",\r
"(this employee {0} h — part-time)",\r
"(certification is required only for termination by mutual agreement). If the employee keeps working after expiry, they are deemed employed for an indefinite period.",\r
"(p.IzMarketID=? OR p.UMarketID=?)",\r
"(Daily takings, label \\"Cash register <ENU>, shift #…\\"), turnover by item is kept for reviews, a write-off from the cash register creates our write-off document (for items the code list recognizes; others in the note), and deleted receipts go to \\"Suspicious activity\\". The cash register must be entered with a store (Cash register price list → Cash registers and stores). Shifts from",\r
"(PIB {0} {1})",\r
"(PIB {0})",\r
"(paid by the company",\r
"(by job position)",\r
"(opening balance from the closing)",\r
"(data is updated automatically) or",\r
"(Settings → Company details).",\r
"(Settings → Protection)",\r
"(fields 13 and 14)",\r
"(sent by a newer version of the program; they are written automatically after the update) or",\r
"(confirmed {0}/{1} weeks)",\r
"(positive = debit)",\r
"(reference without a period)",\r
"(Rulebook 11/20, Art. 57–60)",\r
"(over a Wi-Fi connection)",\r
"(remaining",\r
"(interim report until {0})",\r
"(It will be restored automatically on the next start.)",\r
"(test mode)",\r
"(selling prices and the form stay the same); only the actual margin is shown.",\r
"(program {0})",\r
"(turnover by payment method and VAT by rate) and enters it as daily takings. The same Z report cannot be imported twice.",\r
"(space",\r
"(first match from the statement).",\r
"(account {0})",\r
"(the municipality's account has not been entered)",\r
"(receipts are not fiscal) are skipped, except for testing.",\r
"(performed by {0} {1})",\r
"(now",\r
"(balance). The accounts are the accountant's example; for other accounts within group 134 the amounts are the same.",\r
"(only for retrospective correction or reclassification)",\r
"(health only); not counted among employees. For permanent tasks of a job position (cashier, salesperson) a work contract is not allowed — that is an employment relationship or temporary and occasional work.",\r
"(old way). Connecting to the IRIS CORVINA server is recommended: the exchange is then almost instant, and Drive is used only for backup.",\r
"(items without an item code {0})",\r
"(voided)",\r
"(needs",\r
"(the current database \\"{0}\\" is saved first to Knjig_backup\\\\Arhiva)",\r
"(in purchase cost, outside field 19).",\r
"(in that month they receive proportional hours).",\r
"(goes into PR-PDV, field 19, not into purchase cost) · incl. VAT",\r
"(in advance): on the contract the monthly rent is 0, and the amount paid is entered in the month of payment — by clicking the lessor in that month's calculation.",\r
"(saved on this computer)",\r
"(a USB/Bluetooth reader enters the code into the field), and then the quantity is entered. Several phones can count the same stocktake at the same time. An unknown barcode is linked to an item once and is recognised automatically afterwards.",\r
"(the other computer's state applies) or",\r
"(this computer's state applies and is sent to the others). The decision applies to all computers.",\r
"(value",\r
"(Z no. {0})",\r
"(goods found at the start of the day); movements are from that day.",\r
"(closed)",\r
"(summary, {0})",\r
") — the seniority bonus is calculated on the total seniority. The employee is carried over into each new calculation month automatically — removed by entering",\r
") — it does not enter the stock list until it is linked",\r
") — are not in the general ledger",\r
") — untick the one that is NOT a cigarette so that it also gets the new margin",\r
") — via the IRIS CORVINA server (without a server: via the exchange folder). Each register takes the new price list and the changes that concern it by itself, and the changes the supervisor made at the register (and new items from the register) this computer picks up in the next exchange round. Each price carries the time of its change — the latest change applies. The Manager works the same way. A register without a connection receives the price list as a file (buttons below).",\r
") — narrow the period or search ·",\r
") — they are imported even without a link; the link can be added now or later",\r
") · without a rule:",\r
") · IOS",\r
") · total company cost",\r
") = base",\r
") − tax",\r
") and credit notes (VAT",\r
") and a notice period of",\r
") goes into the credit reference number when paying tax and contributions (model 18, PIB code).",\r
") has expired. With the recipient:",\r
") whenever it was changed, and",\r
") are not in the general ledger:",\r
") set",\r
") differs from the stocktake of 31.12.",\r
") are in the Work Discipline Rulebook (catalogue below).",\r
") is entered automatically from the \\"Municipality\\" field. Total seniority today:",\r
") are entered at the next reading of closings (Connection → Cash register program → \\"Fetch closings now\\").",\r
"), the rest are entered manually. Rates: 9 % up to 100,000, 12 % up to 1,500,000, 15 % above. Filing and payment deadline: 31 March (electronically, IRMS).",\r
"), here; the starting values are those from the General Collective Agreement that was in force until 30.04.2026. Documents and the entitlement calculation read these values.",\r
"), increases by length of service",\r
"), then the decision (",\r
"); for more serious violations (unjustified absence, violence, criminal offence…) without a notice period. For a more serious violation of work duty, the procedure is first conducted on the \\"Work discipline\\" tab, and the dismissal is created from there. A written warning is created on the \\"All documents\\" tab.",\r
"): base",\r
"): closed shifts of the last ~90 days, turnover by item, write-offs and deleted receipts. The main computer reads them in every synchronization round:",\r
"). Only an exact amount is linked automatically; the takings for other payments are chosen here.",\r
"). The company can be downloaded from the server, or the device can be paired with a new code.",\r
"). Amount for FZO = FZO share (already reduced by the collected participation and co-payment) + fee per FZO prescription; the deduction for FZO software is entered manually. Prescriptions arrive from the registers with the price exchange (the register sends the last 62 days); cancelled and private prescriptions are not on the invoice.",\r
"). Minor and serious violations and measures (",\r
"). Items with a manually entered rate and items that have a rate from an invoice are not included. The rate is changed only for selected items, with the \\"Save\\" button.",\r
"). You need to check which amount is correct.",\r
"). Linking: the \\"Sales by item (import)\\" tab.",\r
"). Receipts from the cash register's test mode are not fiscal and are not posted. For testing, turn on the import in Connection → Cash register program (\\"also import test shifts\\"), and then \\"Fetch closings now\\".",\r
"). The decision is signed by the director and handed to the employee;",\r
"). The goods have left the outlet's stock.",\r
"). The goods have been removed from stock and the trade ledger on the delivery date.",\r
"). The register code is linked to an item in the Register price list.",\r
"). The Tax Administration rejects the receipt when the PIB does not match the certificate.",\r
"[ \\\\t]*([\\\\d.,OolI \\\\t-]+)",\r
"[kasaocr] image extraction failed:",\r
"[To check before submission: {0}. The amounts below do not include them.]",\r
"[CANCELLED {0} by corrective receipt]",\r
"[CANCELLED {0}: {1}]",\r
"{0}\\n\\nSave the declaration anyway with these amounts?",\r
"{0}\\n\\nSave as a purchase anyway?",\r
"{0}\\n\\nSave the payment anyway?",\r
"{0}\\n\\nEnter the payment anyway?",\r
"{0}\\n\\nSave the takings despite the warning?",\r
"{0}\\n\\nSave the contract?",\r
"{0}\\n\\nOK: record a new, different payment.\\nCancel: no record (the same payment).",\r
"{0}\\n\\nOK: the payment is entered.\\nCancel: without entry (the amount is corrected).",\r
"{0}\\n\\nRecord it?",\r
"{0}\\nCompany in the program: {1} (PIB {2}).\\n\\nThe costing sheet from this invoice goes into this company's books, and the input VAT into PR-PDV. Create the costing sheet?",\r
"{0} - VAT {1}%",\r
"{0} – {1} · previous price = lowest in the 30 days before the reduction (Consumer Protection Act, Art. 15)",\r
"{0} — {1} · level: {2}",\r
"{0} — {1} EUR",\r
"{0} — {1} EUR {2}",\r
"{0} — {1} EUR. The item is closed without payment and is not included in the balance.",\r
"{0} — {1}: gross {2}",\r
"{0} — company \\"{1}\\"",\r
"{0} — IRIS Accounting",\r
"{0} — tab Rates → Surtax by municipality",\r
"{0} — click removes",\r
"{0} — click: next shift, Shift+click: remove",\r
"{0} — not on the supplier's card",\r
"{0} — non-working day (second day on a Sunday)",\r
"{0} — non-working day (holiday on a Sunday)",\r
"{0} — per card {1} / ours {2} / difference {3} EUR",\r
"{0} — increase in selling value",\r
"{0} — invoice {1}",\r
"{0} — room account {1}",\r
"{0} — working hours and shifts",\r
"{0} — decrease in selling value (red reversal)",\r
"{0} — lease for {1} {2}.",\r
"{0} · {1} – {2} · {3} nights",\r
"{0} · {1} · {2} · purchase {3} EUR · selling {4} EUR",\r
"{0} · {1} EUR (free {2})",\r
"{0} · {1} h this week — click adds to the shift",\r
"{0} · {1} items · margin {2}",\r
"{0} · {1} items",\r
"{0} · identical payment no. {1}",\r
"{0} · invoice date {1} · delivery deadline {2}",\r
"{0} · until {1} · balance {2} EUR",\r
"{0} · until {1}{2}{3}",\r
"{0} · control: receipts (purchase) {1} − KPR excl. VAT {2} = {3}",\r
"{0} · on the day {1}",\r
"{0} · as of {1}{2} · purchase {3} EUR · selling with VAT {4} EUR",\r
"{0} · as of {1}{2}{3}",\r
"{0} · from {1} to {2} · turnover {3}–{4}",\r
"{0} · period {1}–{2}{3}{4}",\r
"{0} · PIB {1}",\r
"{0} · PIB {1} · tax period 01.01.{2} — 31.12.{3} · in EUR",\r
"{0} · PIB {1}{2}{3} · balance {4} EUR",\r
"{0} ({1} without a document)",\r
"{0} ({1} KB)",\r
"{0} ({1} of {2})",\r
"{0} ({1} invoices)",\r
"{0} ({1}, delivery {2}, VAT liability {3})",\r
"{0} ({1}, deadline {2})",\r
"{0} (without processed products and marinade)",\r
"{0} (no room)",\r
"{0} (deletion)",\r
"{0} (sharing cancelled)",\r
"{0} (agreed {1}, hours give {2})",\r
"{0} (second day)",\r
"{0} (EV)",\r
"{0} (correction of invoice {1})",\r
"{0} (JM: cash register {1}, books kg; manual entry required)",\r
"{0} (yoghurt without additives; only white cheese)",\r
"{0} (crystal, cube, powder)",\r
"{0} (does not belong to {1} {2}; the difference is paid separately)",\r
"{0} (PIB {1})",\r
"{0} (by instruction from computer \\"{1}\\")",\r
"{0} (before scanning)",\r
"{0} (invoice of {1})",\r
"{0} (response deadline {1}; complete the procedure by {2})",\r
"{0} (automatic)",\r
"{0} (imported {1})",\r
"{0} (imported {1}{2})",\r
"{0} (already in the main snapshot)",\r
"{0} {1} — click: assign to shift {2}",\r
"{0} {1} — payroll",\r
"{0} {1} · {2} ({3}) — day off",\r
"{0} {1} (agreed {2}, payroll gives {3})",\r
"{0} {1} (from {2})",\r
"{0} {1} {2} EUR",\r
"{0} {1} {2}, JMB {3}, in the position {4}, is determined to have the right to annual leave for {5} in the duration of {6} working days: basis {8} working days ({9}){10}.",\r
"{0} {1} EUR",\r
"{0} {1} below the purchase price",\r
"{0} {1} has been created: {2}",\r
"{0} {1} established an employment relationship for a fixed term by an employment contract of {3}, until {5}, to perform the duties of the position {6}.",\r
"{0} {1} does not belong to {2} {3} (employment/termination date or not active).",\r
"{0} {1} does not belong to the payroll for {2} {3} ({4}). The employment/termination dates and the \\"Active\\" status of the employee need to be checked.",\r
"{0} {1} does not belong to this month (employment / termination date).",\r
"{0} {1} set for {2} items.",\r
"{0} {1} registration",\r
"{0} {1} scheduled: {2}, {3}, shift {4} {5}–{6}.",\r
"{0} {1}: {2} possible takings (manual linking required)",\r
"{0} {1}: {2} employees were calculated automatically (full hourly rate). Days, hours and deductions can be changed in the employee's payroll if needed.",\r
"{0} {1}: same number from another computer — received as {2}",\r
"{0} {1}: the statement has no balance for the control check; automatic posting was not performed, items are waiting for review",\r
"{0} {1}: not assigned to shifts",\r
"{0} {1}: unknown VAT rate {2}; the amount was not classified.",\r
"{0} {1}: not employed",\r
"{0} {1}: the PIB on the statement is this company's PIB — account confirmed as ours",\r
"{0} {1}: service contract. The compensation is not earnings and is not in this payroll; it is calculated on the \\"Service contract\\" tab (tax 15 % and PIO 10 % on the base reduced by 30 %, IOPPD 047/048/079)",\r
"{0} {1}: there are already {2} daily takings entries that are not from cash register {3} ({4} €). Check: \\"Possible duplicate entries\\".",\r
"{0} {1}: already scheduled",\r
"{0} {1}: the contract type is \\"{2}\\". Compensation under a service contract is not earnings and is not calculated through payroll, but on the \\"Service contract\\" tab (Employee payroll → Service contract: tax 15 % and PIO 10 % on the base reduced by 30 %, IOPPD 047/048/079). Alternatively, correct the employee's contract type.",\r
"{0} {1}. · IOPPD code 047/048/079 · tax and PIO are paid to {2}{3}",\r
"{0} {1}. · IOPPD basis code 065 · the tax is paid to {2}{3}",\r
"{0} {1} has been unlocked. Changes are possible again.",\r
"{0} {1} has been locked ({2} documents). Late invoices for that month go to the current period with a notice.",\r
"{0} {1}. {2} must be closed first and the next one opened (Statements → Year-end closing). Until then, {3} revenues and expenses have not been transferred to the result, so the closing of {4} and the opening balance of {5} would not be correct.",\r
"{0} % — selling {1}, VAT {2}, purchase {3}",\r
"{0} % × {1} mo.",\r
"{0} % for each completed year of total length of service",\r
"{0} → company \\"{1}\\"",\r
"{0} > ks.ProdajnaCijenaBezPdv + 0.0001",\r
"{0} AND m.MarketID=?",\r
"{0} AND n.Datum>=?",\r
"{0} items without a retail price on the date of the new stocktake; their value is not included in the total.",\r
"{0} items",\r
"{0} no. {1} of {2}{3}",\r
"{0} days",\r
"{0} EUR",\r
"{0} EUR {1}",\r
"{0} file",\r
"{0} files",\r
"{0} files",\r
"{0} company \\"{1}\\": {2}.{3}",\r
"{0} Fiscalization of sales invoices is not turned on.",\r
"{0} Fiscalization: {1}",\r
"{0} Fiscalized.",\r
"{0} yrs",\r
"{0} urgent ·",\r
"{0} IN ({1})",\r
"{0} price changes from {1} have a time \\"in the future\\" (the device clock is ahead). The changes were received with the time of receipt. The clock on that device needs to be checked.",\r
"{0} statement {1}",\r
"{0} statements in the file: recorded {1}, already existed {2}{3}{4} · {5} new transactions",\r
"{0} statements: entered {1}, already existed {2}{3}{4}{5} · {6} new transactions",\r
"{0} is absent on {1} ({2} – {3}).",\r
"{0} is {1} on this device. {2}",\r
"{0} is {1} on this device. The server has not yet confirmed receipt of company images (an older server version or no exchange has happened yet) — the image is sent when the server supports it.",\r
"{0} is already in another shift on {1}.",\r
"{0} is {1}.",\r
"{0} is {1}. The server does not accept images of this company — the image stays on this device.",\r
"{0} has been set and sent to the server (it is visible to Cash register, Manager and the company's other computers).",\r
"{0} has also been removed from the server (Cash register, Manager and the company's other computers).",\r
"{0} is larger than {1} × {2} pixels.",\r
"{0} is larger than {1} KB.",\r
"{0} The costing sheet was created with confirmation.",\r
"{0} The costing sheet is not created automatically.",\r
"{0} costing sheets in the selected period · click a row for details",\r
"{0} min",\r
"{0} min",\r
"{0} orders could not be read (no date or amount)",\r
"{0} collections from customers ({1} EUR)",\r
"{0} was not sent to the server: {1}",\r
"{0} is not in the format ab123ab123 (entered: {1})",\r
"{0} nights",\r
"{0} new",\r
"{0} new, {1} dupl.{2}",\r
"{0} outlets",\r
"{0} outlets: {1}…",\r
"{0} of {1}",\r
"{0} of {1} invoices have no payment deadline entered (the Tax Administration did not supply it) and are not in this overview.",\r
"{0} outflows",\r
"{0} Revocation on the server was not carried out.",\r
"{0} selected pages are not confirmed (pages {1}).\\n\\n{2}\\n\\nSave these pages after checking against the image?",\r
"{0} daily takings record(s) without a correct VAT rate breakdown (turnover {1} EUR)",\r
"{0} takings: the entered \\"Total\\" does not match the columns by rate. The ledger shows amounts calculated from the columns by rate. Fix the takings on the \\"Takings entry\\" screen. The rows are marked in red.",\r
"{0} daily takings",\r
"{0} takings {1}–{2}",\r
"{0} takings have no breakdown by VAT rates. The income also includes VAT (overstated).",\r
"{0} payments to suppliers ({1} EUR)",\r
"{0} by instruction from computer \\"{1}\\"",\r
"{0} on receipt {1}",\r
"{0} matched by the amount of an open invoice",\r
"{0} went down in price",\r
"{0} went up in price",\r
"{0} The Employer will deregister the Employee from compulsory social insurance on the date of termination of the employment relationship and hand him or her a copy of the deregistration. The agreement is drawn up in 3 identical copies (one for each party and one for certification).",\r
"{0} Check the internet connection. Changes are queued and sent when the connection is restored.",\r
"{0} legal entity",\r
"{0} times",\r
"{0} employees hold a position that is not in the job classification: {1}{2}",\r
"{0} rows",\r
"{0} rows have a difference of up to 2 EUR (total {1} EUR). The difference comes from the cash register rounding on daily takings receipts and does not need to be corrected.",\r
"{0} rows have a difference of more than 2 EUR between \\"Amount incl. VAT\\" and the sum of base and tax (total {1} EUR): {2}{3}. The daily takings for that day are not split correctly by rate. Fix: the \\"Takings entry\\" screen (takings by date and store from the row). These rows are marked in red.",\r
"{0} shift: start and end are entered in the format HH:MM (e.g. 08:00 and 16:30).",\r
"{0} shift: start and end are the same.",\r
"{0} saved: {1}",\r
"{0} item ({2} EUR)  in our records",\r
"{0} item with a higher amount than our invoice (+{2} EUR)",\r
"{0} items without a selling price posted at purchase price ({1} EUR)",\r
"{0} lines from {1} costing sheets · preview before printing",\r
"{0} It reaches the registers with the next price list.",\r
"{0} foreign suppliers have a liability from earlier vouchers on {1}; transfer by a manual voucher to {2} (suppliers abroad) or re-post the open month",\r
"{0} slots, {1} h.",\r
"{0} is taking longer than {1} s. The reading must be repeated.",\r
"{0} Total: selling value excl. VAT {1} EUR, cost of goods sold {2} EUR, RUC {3} EUR ({4} % of selling value, {5} % on cost). Sales without a purchase price: {6} EUR excl. VAT.",\r
"{0} incoming document(s) with a VAT rate other than 21 / 15 / 7 / 0 %",\r
"{0} warnings ·",\r
"{0} devices",\r
"{0} Value {1} EUR; daily takings from the trade ledger {2} EUR; difference {4} EUR (positive: shortage, negative: surplus).{5}",\r
"{0} WHERE a.KasaSifra=?",\r
"{0} WHERE d.DokID=?",\r
"{0} WHERE d.KorektivniZaDokID=?",\r
"{0} WHERE k.KalkID=?",\r
"{0} for the selected items ({1})?",\r
"{0} During annual leave {1} is entitled to salary compensation in the amount of the salary he or she would have earned had he or she worked ({3}). The dates may be changed only because of the needs of the work process, no later than {4} working days before the start and with the consent of {5} ({6}).",\r
"{0} Lock the month?",\r
"{0} The Employee confirms that he or she is aware of this and that he or she concludes the agreement of his or her own free will, without coercion or error.",\r
"{0} employees — no contribution for up to 10 employees",\r
"{0} employees (11–19), without persons with disabilities → 5 % of average earnings {1} = {2} EUR",\r
"{0} employees → required {1} {2} with disabilities, {4}, missing {5} × {6} = base {7} × 20 % = {8} EUR",\r
"{0} employees, required {1}, {2} — no contribution",\r
"{0} employees, a person with disabilities is employed — no contribution",\r
"{0} A written warning with the reasons for termination and the evidence was {1}delivered to the Employee and he or she was given a deadline of at least {2} working days to respond ({3}). The reason for termination is justified within the meaning of {4} and does not fall among the reasons referred to in {5}. Taking all circumstances into account, a decision was made as in the operative part.",\r
"{0}–{1} (one period)",\r
"{0}, {1} EUR",\r
"{0}, {1}, qty {2}{3}",\r
"{0}, tourist tax {1} set aside (liability to the municipality)",\r
"{0}, days {1}",\r
"{0}, second pass (control check does not match)",\r
"{0}, PIB {1}",\r
"{0}, batch {1}: remove from the list of withdrawn batches?",\r
"{0}: {1} — cash {2} EUR",\r
"{0}: {1} ({2} in shift).",\r
"{0}: {1} (retry in {2} min)",\r
"{0}: {1} days of leave from {2} were not used; the deadline is {3}{4} ({5}).",\r
"{0}: {1} statements. Nothing was entered.",\r
"{0}: {1} is scheduled for {2} shifts ({3} h).",\r
"{0}: {1} costing sheets",\r
"{0}: {1} costing sheets for {2}/{3}.",\r
"{0}: {1} KB",\r
"{0}: {1} scans",\r
"{0}: {1} items ({2} outflows) · supplier recognised on {3}.{4} The items need to be reviewed before entry.",\r
"{0}: {1} consecutive working days from {2}, without a day off.",\r
"{0}: {1}. The decision on the measure is made within {2} days (by {3}){4}.",\r
"{0}: {1}. Other items (takings, POS, salaries, unknown) await review in Bank → Transactions.{2}",\r
"{0}: {1}. The surtax ({2} %) is paid to the municipality of residence; the employee's data needs to be completed",\r
"{0}: {1}. Applies to all following invoices.",\r
"{0}: +{1} (total {2}).",\r
"{0}: +{1} {2} (total counted: {3}).",\r
"{0}: the address \\"{1}\\" is not valid.",\r
"{0}: sick leave covers the entire working period in the month ({1}), and the payroll also has regular earnings. IOPPD periods must not overlap; the absence dates or the payroll items need to be corrected.",\r
"{0}: the number of business trip days is required (tax-free = days × per diem; half a per diem = 0.5), as are the meals if provided.",\r
"{0}: gross {1} EUR. The employee's income items need to be checked",\r
"{0}: hour in the form 14:00",\r
"{0}: awaiting the employee's statement until {1} (silence = consent to the allegations).",\r
"{0}: a date or null.",\r
"{0}: the file belongs to another company (PIB {1}).",\r
"{0}: Manager file with a different company key ({1}) was skipped.",\r
"{0}: select a date.",\r
"{0}: between 0 and 100 %",\r
"{0}: the amount is not valid.",\r
"{0}: the amounts were read from below the labels (column by column). Check that each amount is in its proper place.",\r
"{0}: termination of employment imposed. A decision on termination of the employment contract must be created ({1}).",\r
"{0}: month {1}/{2} is locked. Changes are not possible.",\r
"{0}: the cost value of stock is negative {1}",\r
"{0}: fee {1} gross → payout {2} EUR (tax {3}, PIO {4}).{5}",\r
"{0}: the order has been entered. Nothing has been written to the code list of this computer; the import is executed by the main computer.{1}",\r
"{0}: the order has been entered.{1}",\r
"{0}: Sunday {1} removed.",\r
"{0}: invalid number",\r
"{0}: the tax-free amount for this case is required (the \\"tax-free up to\\" field in the item; for severance due to redundancy, the minimum amount under the Labour Law).",\r
"{0}: net {1} EUR is below the minimum ({2}{3})",\r
"{0}: the fine ({1} % × {2} months) has not been deducted from salary. Enforcement must begin by {3} ({4} days from finality, {5}).",\r
"{0}: deductions of {1} EUR exceed {2}% of net pay ({3}); up to 1/3 of earnings is allowed, up to 1/2 for maintenance (Labour Law, Art. 106)",\r
"{0}: decision on the measure made on {1}. The decision must be delivered to the employee and the delivery date entered (delivery within {2} days, by {3}).",\r
"{0}: leave from {1} to {2} is planned, but no decision has been made. The law requires the decision to be delivered {3} days before the start ({4}).",\r
"{0}: marked as \\"not working\\".",\r
"{0}: sick leave periods under different IOPPD bases ({1} and {2}) overlap, which is not allowed in the return. The absence dates need to be corrected, or one type of sick leave left for the same period.",\r
"{0}: start and end are the same. Whole day: 00:00–24:00.",\r
"{0}: the opening balance for {1}. is provisional ({2} EUR, balance of the unclosed ledger {3}.). The carry-over becomes final when ledger {4} is closed.",\r
"{0}: discount {1} %.",\r
"{0}: the proceedings had to be concluded by {1} ({2} months from initiation, {3}). A decision is no longer possible; the proceedings must be discontinued.",\r
"{0}: violation of {1}: a written warning must be delivered (deadline {2} days from learning of it: {3}); limitation for initiation {4}.",\r
"{0}: violation of {1}: the deadline to initiate proceedings expired on {2} (limitation {3} months, {4}). The proceedings must be discontinued.",\r
"{0}: surtax {1} %, but for the municipality {2} it is {3} %. The rate needs to be checked ({4})",\r
"{0}: surtax {1} %.",\r
"{0}: probation expires on {1} (in {2} days). If the employee has not been satisfactory, an act on that is adopted before expiry; otherwise the employee is deemed satisfactory ({3}).",\r
"{0}: sold {1} excl. VAT, available RUC {2}{3}",\r
"{0}: fixed-term work since {1}; the legal limit of {2} months falls on {3} ({4}); after that the contract must be for an indefinite period.",\r
"{0}: scheduled on {1}, but absent ({2} – {3}).",\r
"{0}: scheduled on {1}, although they requested a day off for their religious holiday; work on that day is paid as holiday work.",\r
"{0}: goods at selling price ({1}) are in the negative {2} — no opening balance or stocktake",\r
"{0}: RUC ({1}) has a debit balance of {2} — more realised than calculated",\r
"{0}: the balance on 31.12.{1}. is negative ({2} EUR). Goods cannot be in the negative; check the stocktake, transfers and price revaluations.",\r
"{0}: the week from {1} has {2} h (maximum {3} h).",\r
"{0}: rate {1} → {2} (from invoice).",\r
"{0}: the surtax rate of the municipality {1} ({2} %) is not confirmed by a municipal decision. The decision needs to be checked and the rate entered (Rates → Surtax by municipality)",\r
"{0}: phone {1}.",\r
"{0}: not reported in {1} (amount 0).",\r
"{0}: the payroll contains sick leave compensation (IOPPD basis {1}), but no sick leave period (from–to) has been entered. The absence \\"Sick leave\\" or \\"Pregnancy sick leave\\" needs to be entered with dates (Employee shifts → Absences and holidays) and the export repeated.",\r
"{0}: in the preview on computer \\"{1}\\" {2}, on the main computer {3}.",\r
"{0}: in the code list {1}, in the file {2}",\r
"{0}: the fixed-term contract expires on {1} (in {2} days). A new contract, annex or decision on termination must be prepared.",\r
"{0}: the fixed-term contract expired on {1} ({2} days ago). An urgent decision is needed: new contract, annex or decision on termination. An employee who continues working after expiry is by law in permanent employment ({3}).",\r
"{0}: remove pharmaceutical data? The item stays on the registers as ordinary goods.",\r
"{0}: termination {1} is entered, but there is no termination document (agreement / decision). A document must be created and the employee deregistered from insurance.",\r
"{0}: work on Sunday {1} entered.",\r
"{0}: entered {1}{2}{3}{4}",\r
"{0}: enter a whole number.",\r
"{0}: the starting rate of {1} % applies.",\r
"{0}: the amount from the contract has been restored.",\r
"{0}: returned to shared shifts.",\r
"{0}: time is entered as HH:MM (from 00:00 to 23:59, end up to 24:00).",\r
"{0}: imported sales already exist for the period {1}–{2} ({3}).",\r
"{0}: the rent for {1} has been set to {2} EUR (gross).",\r
"{0}: employees {1} {2} {3}, revenue {4} {5} {6}, assets {7} {8} {9} → {10} of 3 exceeded",\r
"{0}:\\\\Moj disk",\r
"{0}:\\\\My Drive",\r
"{0}. {1} {2}: position already filled here",\r
"{0}. {1} {2}: not assigned to shifts",\r
"{0}. {1} {2}: not employed",\r
"{0}. {1} {2}: absence",\r
"{0}. {1} {2}: already scheduled",\r
"{0}. {1}: employee not found",\r
"{0}. {1}: shift {2} does not exist",\r
"{0}. Items {1}. By VAT rate: {2}. Margin (selling excl. VAT − purchase): {3} EUR.",\r
"{0}. The file is imported on the Tax Administration portal into IOPPD for {1}.",\r
"Year {0}",\r
"Quarter {0} {1}",\r
"{0}. A check against the PDF is required.",\r
"{0}. Work is performed in shifts (including Saturdays, Sundays and holidays when the outlet is open), according to a schedule that the Employer determines by written decision and publishes to employees at least {1} days in advance ({2}); night work is work from 22:00 to 06:00 ({3}), and a night shift lasts consecutively for no more than one working week.",\r
"shift {0}",\r
"{0}{1} → {2}\\n\\nLarge price change. Confirm the new price?",\r
"{0}{1} EUR",\r
"{0}{1} from {2}",\r
"{0}{1} ORDER BY m.Naziv",\r
"{0}{1} Enter the price?",\r
"{0}%: base {1} / VAT {2}",\r
"{0}+ yrs → +{1}",\r
"{0}=COALESCE(?, {1})",\r
"{0}>=? AND {1}<=?",\r
"{0}The main computer's database was not downloaded ({1}). To download it: Connection → \\"Download the complete main database\\".",\r
"{0}number on the sender's device: {1}",\r
"{0}register {1}: {2} ({3})",\r
"{0}Months before {1} remain unchanged (by invoice date), so submitted returns do not change. From {2} an invoice is posted in the month of receipt.\\n\\nContinue?",\r
"{0}Continue?",\r
"{0}{1} EUR is unused. There are no open invoices on this side ({2} stores).\\n\\nApply the remainder to invoices of the other side ({3} stores) as well?",\r
"{0}New transactions: {1}{2}{3}{4}{5}. Duplicates are not posted; an item that is really another payment is marked with the \\"not a duplicate\\" button.",\r
"{0}Exchange: sent {1} changes, received {2} packages: new records {3}, already existing {4}.{5}{6}{7}",\r
"{0}New records written: {1}, changes sent: {2}.{3}",\r
"{mjesto}: {naziv} · {stara} → {nova}",\r
"* the amount is not in the file: quantity × the outlet's retail price on that day.",\r
"* Indicative store stock (purchased + received − issued by transfers; does not subtract retail sales). The selling price is excl. VAT (as on the costing sheet) and is suggested from the item's latest costing sheet.",\r
"* The source stock is approximate (purchased + received − issued by transfers; retail sales are not deducted).",\r
"&amp;",\r
"&gt;",\r
"&lt;",\r
"&quot;",\r
"% = tax",\r
"% per year — reference rate + 8 p.p., Act on Deadlines for Settling Monetary Obligations; the rate is published by the CBCG) and 40 € collection cost compensation:",\r
"% and PIO",\r
"% on purchase",\r
"% on the base (borne by the contractor); surtax on the tax by the contractor's municipality. Example: 1,000 → base 700, tax 105, PIO 70, surtax 13 % = 13.65, payout 811.35. The payout goes into",\r
"% of selling ·",\r
"% of the base. The lessor receives the rent reduced by the tax; the company pays the surtax on that tax to the lessor's municipality. The month's calculation enters",\r
"% per year).",\r
"％ Change margin",\r
"％ Margin change on costing sheets",\r
"% of salary",\r
"%), tax",\r
"%); the calculation needs to be confirmed with the accountant. An empty retail field with a wholesale price entered is calculated on saving.",\r
"%); tax",\r
"• … {0} more",\r
"• {0} EUR — {1}",\r
"• {0} EUR, entered {2}",\r
"• p. {0}: {1}",\r
"• p. {0}: {1} {2}",\r
"© {0} {1}, author and rights holder. All rights reserved.",\r
"← this computer",\r
"→ My data. All codes are of the form",\r
"→ to",\r
"→ to the whole",\r
"→ offset",\r
"→ regular",\r
"→ with costs",\r
"→ actual",\r
"↔ the Drive folder watched by the computer. Without an additional application: \\"⬆ Send changes\\" (Drive is selected in the dialog) and \\"Load from Drive…\\". With the IRIS CORVINA server this is not needed.",\r
"↩ undo",\r
"↩ Cancel posting",\r
"↩ Cancel confirmation",\r
"↩ Annul termination",\r
"↩ Undo closing",\r
"↩ Cancel closing",\r
"↩ Restore amount from contract",\r
"↩ Revert to the previous program version",\r
"↩ shared",\r
"↺ Default",\r
"↺ Undo allocation",\r
"↻ Refresh from the general ledger",\r
"↻ Refresh checks",\r
"↻ retry",\r
"↻ Post again",\r
"↻ Restore template from data",\r
"⇄ Change company",\r
"⇄ Exchange with registers now (fetch changes + publish price list)",\r
"⇄ swap with…",\r
"⇢ Allocate to lines",\r
"+ {0} with us since {1}",\r
"+ non-employment",\r
"+ new outlet \\"",\r
"+ New invoice",\r
"+ New quote",\r
"+ new type…",\r
"+ surtax",\r
"+ incentive",\r
"+ cost/unit",\r
"+ Enter customer payment",\r
"+ related costs",\r
"+{0} days carried over from {1} (use by {2}{3}.)",\r
"+{0} short",\r
"+days",\r
"<!doctype html>",\r
"= profit before tax {0} − tax {1}",\r
"= purchase value",\r
"| s:<šifra> | n:",\r
"~amount",\r
"− cost value of goods sold {0} (opening stock {1} + purchases {2} − closing stock {3}{4})",\r
"− standardised costs",\r
"− deductions",\r
"− tax",\r
"− overpayment {0}",\r
"− goods",\r
"− standard costs",\r
"− costs {0} · depreciation {1} · salaries with contributions {2}",\r
"− costs and salaries",\r
"⌨ Type barcode",\r
"⏰ Reminders (",\r
"⏸ {0} {1}: statements not imported: {2}; the account is not confirmed as this company's account (the label \\"our account\\" or \\"other company\\" is required)",\r
"⏹ Stop",\r
"⏹ Interrupted.",\r
"▲ choosing",\r
"▲ Rules",\r
"▲ hide",\r
"▲ hide other stores",\r
"▲ Hide the shift code list",\r
"▶ Start Outlook",\r
"▼ from other stores ({0})",\r
"▼ Advanced: code list of all shifts (break, colour, shared shifts)",\r
"▼ not scheduled into shifts ({0})",\r
"▼ Scheduling rules",\r
"▼ enter days",\r
"☀ Sundays",\r
"☁ Make a copy now",\r
"♻ Reallocate from scratch",\r
"⚖ Make decision + decision document (PDF)",\r
"⚖ Margins per line",\r
"⚙ Schedule automatically",\r
"⚙ Create costing sheets ({0})",\r
"⚙ Calculate all",\r
"⚙ Rules (rulebook)",\r
"⚙ Proposal for",\r
"⚙ Recalculate",\r
"⚙ Schedule all stores",\r
"⚠ {0}: the PIB on the statement ({1}) is not this company's PIB ({2}), and the account has posted payments. Deletion was not performed. The company's PIB needs to be checked (Settings); another company's account is marked manually (\\"Other company\\").",\r
"⚠ no Z number",\r
"⚠ day taken",\r
"⚠ Perform renumbering",\r
"⚠ the total control check does not match",\r
"⚠ possible duplicate",\r
"⚠ not balanced",\r
"⚠ posted — recipient does not match (to check)",\r
"⚠ job classification",\r
"⚠ Disputed supplier items",\r
"⚠ to check ({0})",\r
"⚡ Quick entry (employee × day)",\r
"✂ Terminate contract on expiry —",\r
"✂ Terminate contract on expiry…",\r
"✅ Total assets = total liabilities.",\r
"✉ Reply to IOS by e-mail",\r
"✍ Manual invoice entry (no QR)",\r
"✍ Record delivery of the decision",\r
"✎ Date / name",\r
"✎ Edit customer",\r
"✓ {0} — {1}: {2} statements, recorded {3}, already existed {4}, {5} new transactions",\r
"✓ {0} {1} {2}: {3} new, {4} already recorded{6}{7}",\r
"✓ week confirmed",\r
"✓ Confirm week",\r
"✓ Read the entered text",\r
"✓ posted",\r
"✓ matches",\r
"✓ imported",\r
"✓ replaces interim report",\r
"✓remembered",\r
"✔ fiscalized",\r
"✔ Confirm allocation",\r
"✔ Confirm week",\r
"✔ Reviewed — nothing to enter",\r
"✔ Apply margins",\r
"✔ Change margin on {0} costing sheets",\r
"✔ RECORD",\r
"✔ Enter hours from the days",\r
"✔ Enter into this payroll",\r
"✗ {0} {1} ({2}): reading was not completed — left for manual import",\r
"✗ {0} {1}: control check does not match — not imported",\r
"✗ {0}: control check does not match — not imported",\r
"❌ Assets and liabilities are not equal. The difference is in manual corrections or vouchers (the trial balance must be in balance).",\r
"➕ Add account",\r
"➕ Add customer",\r
"➕ Add store",\r
"➕ Add selected (",\r
"➕ Add period",\r
"➕ Add stocktake",\r
"➕ Add holiday",\r
"➕ add employee",\r
"➕ Add difference (",\r
"➕ Add cost",\r
"➕ another shift",\r
"➕ New violation / procedure",\r
"➕ New write-off",\r
"➕ New transfer",\r
"➕ row",\r
"➕ Manual entry of a transaction",\r
"➕ to group",\r
"➕ Enter absence",\r
"➕ Enter scheme",\r
"➕ Add to plan + decision…",\r
"➕ Start stocktake",\r
"➖ Deduct the fine this month",\r
"➜ Costing sheet from QR",\r
"➜ Read daily takings",\r
"➜ Compare ledger card",\r
"➡ Create invoice from quote",\r
"⤵ Fill PRICES from existing data",\r
"⤵ Fill MARGINS from existing data",\r
"⤵ Fill in the starting job structure",\r
"⤵ Import price list from file (kasa-paket)…",\r
"⤵ Import changes from register / from Manager (file)…",\r
"⤵ Import all statements (\\"clean year\\")",\r
"⬆ Send changes",\r
"⬇ Export database copy (.knj.db)",\r
"⬇ Pull daily takings from the cash register",\r
"⬇ Download changes",\r
"⬇ Download closings now",\r
"⬇ XML (portal)",\r
"🌐 New company from the IRIS CORVINA server",\r
"🌐 Connect to server (new company)",\r
"🌐 Download company data from the server",\r
"🌐 IRIS CORVINA server (exchange)",\r
"🎯 Fit",\r
"🏘 Surtax by municipality (Excel)",\r
"🏛 IOPPD XML (e-return)",\r
"🏦 Pending transactions",\r
"👁 Preview before printing",\r
"👤 Payouts to natural persons (Excel)",\r
"💲 Send MPC to the cash register",\r
"💶 Enter IQOS amounts",\r
"💸 VAT payment order",\r
"💸 Payment orders (Excel)",\r
"💾 Copy the whole database to the folder",\r
"💾 Backup (Google Drive)",\r
"💾 Save price list to file (for a register without a folder)",\r
"💾 Save changes to file",\r
"💾 SAVE",\r
"💾 Save declaration",\r
"💾 Save invoice and costing sheet",\r
"💾 Save and calculate",\r
"💾 SAVE CORRECTION",\r
"💾 Save selected takings",\r
"💾 Save the amount for this month",\r
"💾 Save customer",\r
"💾 Save finding — track disputed items",\r
"💾 Save voucher",\r
"💾 Save notes",\r
"💾 Save decision",\r
"💾 Save takings",\r
"💾 SAVE TAKINGS",\r
"💾 Save PD return",\r
"💾 Save PDF",\r
"💾 Save payment",\r
"💾 Save data",\r
"💾 Save rules",\r
"💾 Save filing version",\r
"💾 Save return (tax",\r
"💾 Save payment",\r
"💾 Save service",\r
"💾 Enter marked payments",\r
"💾 Record that the card has been checked",\r
"📂 Select file (PDF / Excel / CSV)",\r
"📂 Open folder",\r
"📂 Reopen",\r
"📂 Import database (.knj.db)",\r
"📂 Import existing database (.knj.db)",\r
"📄 IOPPD overview (PDF)",\r
"📄 IOS to supplier (PDF)",\r
"📄 IOS for the customer (PDF)",\r
"📄 Export old → new list (Excel)",\r
"📄 Journal voucher (PDF)",\r
"📄 Create document",\r
"📄 Create decision",\r
"📄 Calculation (PDF)",\r
"📄 Lease calculation (PDF)",\r
"📄 Reply to IOS (PDF)",\r
"📄 Classification decision (PDF)",\r
"📄 Decision: work on a public holiday",\r
"📄 Costing sheet PDF",\r
"📄 Inventory list (PDF)",\r
"📄 Rulebook (PDF)",\r
"📄 Discipline rulebook (PDF)",\r
"📄 Rulebook on job structure (PDF)",\r
"📄 QR from PDF invoice",\r
"📄 Decision again",\r
"📄 Manual statement import (PDF)",\r
"📄 Scanned daily reports (PDF)",\r
"📄 Scanned reports (PDF)",\r
"📄 Load bank PDF statement",\r
"📄 Employment contract (PDF)",\r
"📄 Warning (PDF) + record delivery today",\r
"📅 Move month",\r
"📅 Deadlines for obligations",\r
"📅 Week — all stores",\r
"📉 Effective margin with costs",\r
"📊 IOPPD overview (Excel)",\r
"📊 Payslips — all (Excel)",\r
"📊 Journal voucher (Excel)",\r
"📊 Calculation (Excel)",\r
"📊 Lease calculation (Excel)",\r
"📊 Payslip (Excel)",\r
"📊 Record (Excel)",\r
"📊 Summary expense voucher for the month",\r
"📋 Violation catalogue (minor / serious)",\r
"📋 Paste another interim report",\r
"📋 Norm (Rulebook)",\r
"📋 Prepare this month for sending",\r
"📋 Request text to the supplier (copy)",\r
"📑 Specification (monthly)",\r
"📑 Supplier specification",\r
"📒 Post stocktake",\r
"📘 Post (minus costing sheet)",\r
"📤 Publish database (phones and secondary computers)",\r
"📥 Open mail",\r
"📥 Import from the public statement",\r
"📥 Download the complete main database",\r
"📥 Post to end of month",\r
"📥 Load supplier ledger card",\r
"📥 Load processed database (.knj.db)",\r
"📥 Import from file (CSV/Excel)",\r
"📦 Filing package",\r
"📦 With line items…",\r
"📧 1. Check mail from date",\r
"📧 Mail",\r
"📧 Mail and bank statements",\r
"📧 Read mail and import statements",\r
"📷 Stocktake by scanner (barcode)",\r
"📷 SCAN BARCODE",\r
"📷 Photograph again",\r
"📷 Photograph the interim report",\r
"📷 Photograph the X report from the register",\r
"🔁 Week template:",\r
"🔄 Calculate the month from contracts",\r
"🔄 Recalculate by rates",\r
"🔄 Sync now",\r
"🔍 Read statement",\r
"🔍 Find database",\r
"🔍 Find Google Drive",\r
"🔍 Check duplicate items",\r
"🔍 Check now",\r
"🔍 Check this company",\r
"🔎 No barcode (by name)",\r
"🔎 No barcode — find by name",\r
"🔎 Detect cigarettes in the catalogue",\r
"🔐 Enter IIC/FIK manually",\r
"🔒 locked",\r
"🔒 Locking the tax ledgers",\r
"🔒 Finalise (purchase)",\r
"🔒 Finalise (selling)",\r
"🔒 Close the year",\r
"🔒 Close the book",\r
"🔒 Lock month",\r
"🔒 Lock payroll",\r
"🔓 Unlock month",\r
"🔗 Automatically link payments to invoices",\r
"🔗 Connect and download company",\r
"🔗 Merge duplicate items",\r
"🔗 Match payments from statements",\r
"🔢 Prepare renumbering (preview)",\r
"🔢 Check the number sequence",\r
"🔦 Light",\r
"🕘 Calculate by shifts",\r
"🕘 Hours from shifts",\r
"🖨 print the costing sheet automatically",\r
"🖨 Automatically print every costing sheet made by scanning",\r
"🖨 Payslips — all (PDF)",\r
"🖨 Payslip (PDF)",\r
"🖨 Test page",\r
"🖨 Print all (",\r
"🖨 Print all ({0})",\r
"🖨 Record (PDF)",\r
"🖼 From gallery",\r
"🖼 Choose an image from the gallery",\r
"🗄 Create year archive",\r
"🗑 Delete costing sheet",\r
"🗑 Delete draft",\r
"🗑 Delete write-off",\r
"🗑 Delete transfer",\r
"🗑 Delete manual data",\r
"🗑 Delete manual",\r
"🗑 Delete all manual",\r
"🗑 Delete other companies' records from this company",\r
"🗒️ CSV",\r
"🗜 Reduce the database (for phone)",\r
"🧮 Propose from the program",\r
"🧹 Delete automatic",\r
"🧹 Company mix-up check",\r
"🧾 Costing sheets for the selected period",\r
"🧾 XML",\r
"🚬 Cigarettes — remembered prices and margins",\r
"🛟 Support: new reply",\r
"🛡 Make a permanent backup (Archive)",\r
"€ · KPR \\"amount excl. VAT\\"",\r
"€ · max retail",\r
"€ (under the Depreciation Rulebook these are not fixed assets but expenses):",\r
"€). VAT Act Art. 37 para. 7: the taxpayer \\"may deduct input VAT in the tax period in which it received the invoice\\".",\r
"0 % (exempt)",\r
"0 = no limit",\r
"0 = no limit.",\r
"003 — earnings of a person with disabilities",\r
"006 — sick leave up to 60 days",\r
"006 = sick leave 70 %, 007 = pregnancy leave 70 %, 008 = maternity leave 100 %. Other codes only change the IOPPD return.",\r
"007 — sick leave over 60 days / pregnancy leave",\r
"008 — maternity / parental leave",\r
"01.10.2026;{0};1001;3870000000017;Mlijeko 1 l;kom;12;13,80;21",\r
"01.10.2026;{0};1002;;Hljeb bijeli 500 g;kom;20;16,00;7",\r
"02.10.2026;{0};1001;3870000000017;Mlijeko 1 l;kom;9;10,35;21",\r
"030, 039 (part)",\r
"031 (part), 032 (part)",\r
"031 (part), 032 (part), 039 (part)",\r
"032 (part), 034, 035, 036, 039 (part)",\r
"033 (part), 039 (part)",\r
"038, 039 (part)",\r
"047 — the contractor is insured on another basis (employed elsewhere, pensioner…)",\r
"048 — the contractor is not registered for compulsory insurance",\r
"065 — income from property",\r
"070 — unpaid leave (not for care of a family member)",\r
"079 — the contractor has only health insurance (not registered for PIO)",\r
"1 year in warehouse work",\r
"1 meal",\r
"1 No.",\r
"1. Long-term loans",\r
"1. Pairing code (IRIS CORVINA server)",\r
"1. Liabilities on loans and borrowings from persons that are not credit institutions",\r
"1. General information. {0}, PIB {1}, registered office {2}, legal form: limited liability company, main activity: {3}. The company has no parent entity. Average number of employees in {4}: {5}. Classification decision: {6} legal entity (Art. 7 of the Accounting Law, Official Gazette of Montenegro 84/25, {7}).",\r
"1. Basic earnings per share",\r
"1. Written warning on the initiation of the procedure (",\r
"1. Receivables from customers",\r
"1. Photograph the interim report with the regular",\r
"1. Sales revenue — net revenue",\r
"1. Changes in revaluation reserves (property, plant and equipment, intangible, biological)",\r
"1. Current corporate income tax",\r
"1. Equity interest in subsidiary legal entities held for trading",\r
"1. It is established that the employee {0}, JMB {1}, in the position of {2}, on {3} committed {4} breach of work duty: {5}.",\r
"1. Material inventories (production material, spare parts, small inventory and car tyres)",\r
"1. The employment contract {3}of {4} of the Employee {0}, JMB {1}, in the position {2}, IS TERMINATED and the employment relationship ends on {5}.",\r
"1. Because of the nature of the activity (retail — supplying the population), it is established that the Employer will work on the holiday {0} — {1}, in the outlets: {2}.",\r
"1. Land and buildings",\r
"1) choose a holiday (or add it / change its date in the list), 2) tick the days and premises, 3) \\"Create decision\\" — a PDF in the company's format, recorded in the document register. Shifts and Payroll use the same holiday list.",\r
"1/3 (1/2 if the employee supports a family)",\r
"10 To final consumers without VAT",\r
"10 Total input VAT",\r
"10. Materially significant items of income and expense: sales revenue {0} EUR; cost of goods sold and materials {1} EUR; salary costs {2} EUR; other operating costs {3} EUR; depreciation {4} EUR; result before tax {5} EUR.",\r
"10. Income from other financial investments and loans (227 to 229)",\r
"1001;3870000000017;Mlijeko 1 l;kom;24;0,79;1,15;21",\r
"1002;;Hljeb bijeli 500 g;kom;12,5;0,55;0,80;7",\r
"1003;3870000000031;Sir trapist;kg;3,250;6,20;9,90;21",\r
"11. Liabilities with a maturity over five years and secured liabilities: {0}",\r
"11. Other income from interest, exchange rate differences and other effects of contracted hedging (231 to 233)",\r
"12. Value adjustment of short-term financial assets (235-236)",\r
"13. Expenses from interest, exchange rate differences and other effects of contracted hedging (238 to 240)",\r
"134000 − 134001 − 134002 = purchase value",\r
"134000 goods in retail",\r
"134000 Goods in retail (debit)",\r
"134001 Price difference (credit)",\r
"134001 RUC (credit)",\r
"134002 VAT in retail (credit)",\r
"134002 VAT in retail (credit)",\r
"14 Foreign 7 %",\r
"14 Foreign serv. 7 %",\r
"15 Foreign 15 %",\r
"15 Foreign serv. 15 %",\r
"15 Total taxable turnover",\r
"15. PROFIT OR LOSS AFTER TAX (244-245)",\r
"16 Foreign 21 %",\r
"16 Foreign serv. 21 %",\r
"17 Flat-rate 8 %",\r
"18 digits (not required)",\r
"2 · Global margin %",\r
"2 years of driving experience",\r
"2 meals",\r
"2. {0} is the last working day, that is, the day of appearing at work, {1}, and the termination of the employment relationship and deregistration from compulsory social insurance take effect on {2}.",\r
"2. Long-term loans to the parent and subsidiary legal entities",\r
"2. Database file for Manager (without a server)",\r
"2. The employee's response (in writing within",\r
"2. Concessions, patents, licences and similar rights and other intangible assets",\r
"2. On the holiday, employees work according to the shift schedule published at least {0} days in advance ({1}){2}. Employees are notified of work on the holiday no later than three days before the holiday ({3}).",\r
"2. Liabilities on loans from credit institutions",\r
"2. Deferred tax expenses or income for the period",\r
"2. Repurchased own shares and repurchased own interests",\r
"2. Period and new margin",\r
"2. Receivables from the parent and subsidiary legal entities",\r
"2. Holiday for the decision",\r
"2. Translation of financial statements of foreign operations",\r
"2. Change in the value of inventories of finished products and work in progress",\r
"2. The image opens in",\r
"2. Statutory reserves",\r
"2. Diluted earnings per share",\r
"2. Compliance with regulations. The financial statements have been prepared in accordance with the Accounting Law and {0}; forms per the Rulebook on the content and form of financial statement forms (Official Gazette of Montenegro 11/20, 139/21, 13/22, 139/22). Amounts are presented in euros.",\r
"2. All unpaid salaries, allowances and other payments up to and including the termination date will be paid to the Employee no later than {0} days ({1}), together with compensation for damages for unused annual leave ({3}). The Employer will deregister the Employee from compulsory social insurance and return the employment record book on the termination date.",\r
"2/ Pension contribution costs",\r
"200, 209 (part)",\r
"201, 209 (part)",\r
"202, 203, 209 (part)",\r
"21, 22 except 223",\r
"23 except 236 (part) and 237",\r
"236 (part)",\r
"28 except 288",\r
"3 · QR code (scanner or pasted text, Enter to process)",\r
"3 years in managerial positions",\r
"3 years in retail, of which 1 in a managerial position",\r
"3. Other reserves",\r
"3. Finished products and goods",\r
"3. Generating costing sheets",\r
"3. Opening balance corrections: there were no opening balance corrections or retroactive changes in accounting policies.",\r
"3. The measure is recorded in the personnel file; it is removed from the records if the employee does not commit a new breach of work duty within {0} years ({1} para. 3).",\r
"3. Decision on the measure (",\r
"3. Other long-term provisions",\r
"3. Other installed equipment, tools and equipment (012+013+014)",\r
"3. Then tap here",\r
"3. Receivables from other related parties",\r
"3. Equity interests in legal entities (except subsidiaries)",\r
"3. Investments in equity instruments",\r
"3. Employees who work on the holiday are entitled to a salary increase of {0} % per hour worked ({1} and the employment contract), and employees who do not work are entitled to salary compensation equal to the salary they would have earned had they worked. Work on the holiday is recorded in the shift schedule and included in the payroll for the month in which the holiday falls.",\r
"3. The salary, salary allowances and other payments on the basis of work and in connection with work that {0} earned up to and including {2} will be paid on the day the employment relationship ends referred to in point 1 of this decision, and no later than {3} days from that day ({4}){5}.",\r
"3.2. Biological assets",\r
"3.3. Other unlisted tangible fixed assets",\r
"322 (part)",\r
"330 and credit bal. 331–337",\r
"3a. Delivery of the decision to the employee (delivery within",\r
"4 Date issued",\r
"4. Actuarial gains and losses",\r
"4. Advances for property, plant, equipment and biological assets and property, plant and equipment in progress",\r
"4. Advances for intangible assets and intangible assets in progress",\r
"4. Advances paid",\r
"4. Long-term loans to legal entities in which there is an equity interest",\r
"4. On the day the employment relationship ends, the Employer will hand {0} a duly completed and closed employment record book ({1}).",\r
"4. Salary deduction",\r
"4. Measurement bases: historical cost. Retail merchandise inventory is carried at selling value including VAT and the calculated margin (account 134); the cost of goods sold is determined monthly using the retail method (weighted average margin per outlet).",\r
"4. Other operating income (205 to 207)",\r
"4. Positive revaluation reserves and unrealised gains on financial assets and other comprehensive income",\r
"4.1. Receivables for overpaid corporate income tax",\r
"4.2. Receivables on the basis of value added tax",\r
"4.3. Other unlisted receivables",\r
"40 except 400 and 404",\r
"400 (part)",\r
"404 (part)",\r
"41 excluding 414, 415",\r
"422–425, 429 (part)",\r
"422–426, 429 (part)",\r
"439 (part)",\r
"47, 48 except 481",\r
"47.11 (retail sale in non-specialised stores)",\r
"490, 491, 494, 495 (part), 496, 497 and 499",\r
"495 (part)",\r
"5 days (Mon–Fri)",\r
"5 Customer and registered office",\r
"5 para. 4",\r
"5. Negative revaluation reserves and unrealised losses on financial assets and other comprehensive income",\r
"5. Liabilities on bills of exchange",\r
"5. This decision is final.",\r
"5. Accounting policies: revenue from the sale of goods is recognised at the time of sale (daily takings or invoice issued), excluding VAT. Property, plant and equipment are measured at cost less depreciation; depreciation is calculated at the rates from the Rulebook on classification of fixed assets (group I 2.5 % straight-line, groups II–V 10/15/20/30 % declining balance). Trade payables are carried at invoice value. Salaries and contributions are recognised in the month of calculation.",\r
"5. Operating expenses (209+210+210a)",\r
"5. Equity interests measured using the equity method",\r
"5. Share in other comprehensive income of an associate",\r
"52 (part)",\r
"53, 54 (part) and 55",\r
"5771 Expense (debit)",\r
"580, 581, 582, 589 (part)",\r
"584, 589 (part)",\r
"6 days (Mon–Sat)",\r
"6 Supplier",\r
"6 Supplier and registered office",\r
"6 Customer's VAT number",\r
"6. Long-term financial investments (loans granted and securities)",\r
"6. Liabilities to the parent and subsidiary legal entities",\r
"6. Revaluation: property, plant and equipment have not been revalued.",\r
"6. Salary costs, salary compensation and other personnel expenses (212+213)",\r
"6. Hedge of net investment in a foreign operation",\r
"660 (part)",\r
"661 (part)",\r
"662, 663, 664, 669 (part)",\r
"669 (part)",\r
"68, except 683 and 685",\r
"6A4D-92DE-B3DB-A31D",\r
"7 days for bread, milk and press",\r
"7 Exempt turnover",\r
"7. Financial instruments: the company has no financial instruments measured at fair value; receivables and payables are stated at nominal value.",\r
"7. Cash flow hedging",\r
"7. Liabilities to other related parties",\r
"7. Other long-term financial investments and receivables",\r
"7. Expenses from asset value adjustments (except financial) (218+219)",\r
"8 Exempt",\r
"8 Exempt purchases",\r
"8. Other operating liabilities and other short-term liabilities (138 to 142)",\r
"8. Other operating expenses",\r
"8. Off-balance-sheet liabilities and guarantees: business premises are used under lease agreements; the company has not given any guarantees or sureties.",\r
"8.2. Other short-term liabilities",\r
"8.3. Liabilities on value added tax and other public revenues",\r
"8.4. Liabilities on corporate income tax",\r
"8.5. Liabilities related to assets held for sale and assets of discontinued operations",\r
"9 To taxable persons without VAT",\r
"9 Taxable purchases incl. VAT",\r
"9 Taxable with VAT",\r
"9. Advances, loans and liabilities to members of governing bodies: none.",\r
"9. Income from equity interests (223 to 225)",\r
"started months",\r
"positions",\r
"A-ZČĆŠŽĐ0-9",\r
"A. EQUITY (102+103+104+105+111+116)",\r
"A. UNPAID SUBSCRIBED CAPITAL",\r
"A. Business profit and losses — I. Financial result from the income statement",\r
"a.Broj",\r
"a.FIK",\r
"a.IIC",\r
"a.InvNum",\r
"a) 9 % for taxable profit up to 100,000.00",\r
"a) Cost of goods sold and material costs",\r
"a) Net salary costs, salary compensation and personnel expenses",\r
"a) from the parent and subsidiary legal entities",\r
"a) from subsidiary legal entities",\r
"a) Other income from ordinary operations",\r
"a) to the parent and subsidiary legal entities",\r
"a) Income from value adjustments",\r
"a) Expenses from value adjustments of fixed assets (except financial)",\r
"ab123ab123",\r
"ACCOUNT",\r
"AD",\r
"ada bojana",\r
"Addiko Bank",\r
"admin",\r
"Admin",\r
"ADMIN (can do everything like the main one, does not publish the database, follows the main one)",\r
"Administrative fees",\r
"Administrative costs paid by a permanent establishment to a non-resident head office",\r
"administrator",\r
"Administrator",\r
"Administrator — everything, without publishing the database",\r
"administrator",\r
"address",\r
"Address",\r
"The address \\"{0}\\" is not valid.",\r
"Address {0} has no stored fingerprint of the local server CA — the device must be paired again.",\r
"An address without https:// is allowed only for a server on this computer (tests). The company's local server runs on https://.",\r
"IRIS address (works immediately): {0}",\r
"Cash register address",\r
"Local server address",\r
"The local server address has not been entered.",\r
"Guest menu address",\r
"The address must start with https:// or http://.",\r
"The address is not https:// — a server without TLS has no certificate.",\r
"The address is not valid.",\r
"Sender address",\r
"The sender address is not valid.",\r
"Recipient's address",\r
"The server address must be in the form https://",\r
"The server address must start with \\"https://\\".",\r
"The server address is not valid (local server example: https://192.168.1.10:8443).",\r
"The server address is not valid.",\r
"registered office address",\r
"Registered office address",\r
"The SMTP server address is not valid.",\r
"The SMTP server address was not found.",\r
"The SMTP server address has not been entered.",\r
"The update address gives an invalid version label \\"{0}\\". The update was rejected.",\r
"The update address gives an invalid version label.",\r
"The update address returned an error (HTTP {0}).",\r
"The update address does not provide a valid package checksum (sha256). The update was rejected.",\r
"The update address is not set.",\r
"Address for update checks",\r
"The address, code and CA fingerprint have been taken from the link.",\r
"address; second address",\r
"Adriatic Bank",\r
"ADVANCE",\r
"Agency",\r
"Promotion",\r
"The promotion \\"{0}\\" has been added. Promotion items are selected with the \\"items\\" button.",\r
"The promotion \\"{0}\\" has been changed. The change reaches the registers with the next price list.",\r
"Promotion \\"{0}\\": {1} items. It reaches the registers with the next price list.",\r
"A promotion without items is not sent to the registers",\r
"The promotion has been deleted.",\r
"The promotion was not found.",\r
"Promotions",\r
"Promotions (special offers) reach the registers",\r
"Promotional price",\r
"the promotional price is not lower than the previous lowest; not a price reduction",\r
"Share capital (shares)",\r
"Excise duty",\r
"If access is allowed, you need to start",\r
"If the window is empty, restore the previous version — data is not touched.{0}",\r
"If a row has several numbers, the amount is",\r
"If, within {0} months of the date this measure is imposed, the employee commits a new serious breach of work duty, their employment ends ({1} para. 3).",\r
"Job structure act: for each position a job description, required qualification, experience, special conditions, number of post slots and who it reports to. The job description goes into the",\r
"Active",\r
"An active ENU cannot be changed.",\r
"active",\r
"Active",\r
"active (a disabled promotion is not sent to the registers)",\r
"PREPAID EXPENSES AND ACCRUED INCOME",\r
"Active cash registers",\r
"Active (",\r
"Active cash registers on the server: {0} · pairing codes waiting: {1} · loaded {2}",\r
"active price reductions about to expire",\r
"active",\r
"Active",\r
"active position",\r
"Actuarial gains or losses from defined benefit plans",\r
"Tools and small inventory",\r
"allergens",\r
"Allergens (Regulation on providing food information to consumers)",\r
"alcohol",\r
"Depr. group",\r
"AMO",\r
"Depreciation (annual OA)",\r
"Depreciation (from OA)",\r
"Depreciation {0} ({1} %)",\r
"Depreciation {0} per OA form: {1}",\r
"depreciation per OA form for {0} has not been posted (Finance → Post month, December)",\r
"Depreciation, current year",\r
"Depreciation: accumulated depreciation of buildings (group I)",\r
"Depreciation: accumulated depreciation of equipment (groups II–V)",\r
"Depreciation: accumulated amortisation of software and licences (intangible)",\r
"Depreciation: expense (annual OA calculation)",\r
"Depreciation group",\r
"AN",\r
"An analytical account has 4 to 8 digits (the first three are the synthetic account from the framework).",\r
"analytical",\r
"Analytics by",\r
"Expense analytics",\r
"COST ANALYSIS",\r
"AND {0}",\r
"AND {0}.Datum>=?",\r
"AND {0}<=?",\r
"AND {0}>=?",\r
"AND Aktivna=1",\r
"AND c.ArtikalID=?",\r
"AND d.MarketID=?",\r
"AND Datum<=?",\r
"AND Datum>=?",\r
"AND DobavljacID=?",\r
"AND ENU=?",\r
"AND f.MarketID=?",\r
"AND k.DobavljacID=?",\r
"AND k.MarketID=?",\r
"AND ks.ArtikalID=?",\r
"AND m.Aktivan=1",\r
"AND MarketID=?",\r
"AND n.Datum>=?",\r
"AND n.Vrsta<>'ZK'",\r
"AND n.Vrsta=?",\r
"AND o.Datum<=?",\r
"AND o.MarketID=?",\r
"AND o.RadnikID=?",\r
"AND p.Datum<=?",\r
"AND p.DobavljacID=?",\r
"AND p.MarketID=?",\r
"AND p.Status='razlika'",\r
"AND pl.DobavljacID=?",\r
"AND ps.DobavljacID=?",\r
"AND r.MarketID=?",\r
"AND RadnikID=?",\r
"AND s.ArtikalID=?",\r
"AND s.Datum<=?",\r
"AND s.Uredjaj=?",\r
"AND Status='zakljucen'",\r
"AND t.DobavljacID=?",\r
"AND t.KljucRacuna=?",\r
"AND u.MarketID=?",\r
"AND z.RadnikID=?",\r
"Andrijevica",\r
"Android",\r
"Annex to employment contract",\r
"antibiotic",\r
"Antibiotic",\r
"the application does not have \\"access to all files\\", so it does not see the files that Autosync downloads from Drive. Grant access and return to the application.",\r
"The application should not be uninstalled",\r
"Pharmacy: medicines and FZO",\r
"application/json, text/plain, */*",\r
"application/x-www-form-urlencoded; charset=UTF-8",\r
"April",\r
"April",\r
"April",\r
"Arabic",\r
"Archive",\r
"Archive {0} was created (files: {1}): {2}",\r
"Archive {0}: {1}",\r
"Year archive",\r
"YEAR ARCHIVE {0} — {1}",\r
"The year archive is created on a Windows computer (main database).",\r
"Archives documentation and keeps it for the periods prescribed by law.",\r
"items ·",\r
"item",\r
"Item",\r
"ARTIKAL",\r
"The item \\"{0}\\" is linked to the cash register item. The main computer creates the write-off document on the next reading of the cash register closings.",\r
"The item \\"{0}\\" is linked to the cash register item.{1}{2}{3}{4}",\r
"The item \\"{0}\\" was not found: the code does not exist, and there is no new item with that name on the \\"Artikli\\" sheet.",\r
"Item \\"{0}\\" already has barcode {1}.",\r
"item {0}",\r
"Item {0}",\r
"Item {0} is linked to a CInMED report row: maximum wholesale {1} €, maximum retail {2} €.",\r
"Item {0} has been saved. The change reaches the cash registers with the next price list.",\r
"Item {0} is already on the revaluation.",\r
"Item {0} has no name — it is entered as inactive under the name \\"(no name)\\".",\r
"item {0}: {1}",\r
"Item {0}: {1}",\r
"Item {0}: the unit of measure \\"{1}\\" is not on the list — KOM entered.",\r
"The item receives a code assigned by the program and the barcode",\r
"an item with the same name already exists (code {0})",\r
"Item from the file",\r
"An item from the \\"Cigare\\" group carries",\r
"The item from the Manager was not found in the code list. The barcode must be linked manually (Scanner stocktake).",\r
"item is",\r
"Item added: code {0}, {1}.",\r
"Item added: code {0}, {1}. {2}",\r
"The cash register item \\"{0}\\" already exists.",\r
"Register item (name, code, barcode)",\r
"Link the cash register item {0} (\\"{1}\\") to the code list item \\"{2}\\"?\\n\\nThe write-off from the cash register is then booked out of stock against that item, and the same link applies to future write-offs and turnover reviews.",\r
"Cash register item {0} is not in the cash register price list and the code is not a barcode. The item is created when it arrives in the cash register price list.",\r
"Cash register item {0} is not in the Cash register price list, and the code is not a barcode. Linking is possible once the item arrives in the Cash register price list.",\r
"The register item was not changed: {0}",\r
"The cash register item is not linked to a code list item (the item was added to the Cash register price list or on the cash register, or the company has no costing sheets yet), so the line was not booked out of stock. The item is created from cash register data, or the cash register code is linked to an existing item; after that the write-off is booked out of stock.",\r
"register item is not linked to the code list",\r
"The register item with code {0} does not exist.",\r
"The item does not exist.",\r
"The item has no barcode.",\r
"The item has no general price. A store price can be removed only after a general price is entered.",\r
"The item has no general price. Reverting is not possible.",\r
"The item has no rate from the supplier invoice.",\r
"Item not selected.",\r
"Item not found in the code list.",\r
"The item was not found.",\r
"Item not found in the catalogue.",\r
"item not entered",\r
"item became more expensive",\r
"item is sold",\r
"the item is sold at the entered unit price (€)",\r
"Code list item",\r
"Code list item (name, code or barcode)",\r
"Catalogue item not found.",\r
"Item in the program",\r
"items",\r
"Items",\r
"items (the rate does not change).",\r
"items without a barcode",\r
"Items without a barcode",\r
"items without retail price",\r
"items without purchase price",\r
"items without a purchase price (value 0)",\r
"Items that are not active in the cash register catalogue: {0}. They do not go into the package.",\r
"items look like cigarettes",\r
"items became more expensive",\r
"items with changed data",\r
"Items with changed data",\r
"items are sold",\r
"Items of the code list that are not in the file:",\r
"items are",\r
"items; the selection also applies to items that are not shown.",\r
"items. Narrow the search to see the rest.",\r
"The item \\"{0}\\" is not in the code list.",\r
"The item or store no longer exists.",\r
"The cash register item \\"{0}\\" is not in the price list.",\r
"The item under the new code no longer exists.",\r
"The item is no longer in the code list.",\r
"items",\r
"Items",\r
"Items of the promotion \\"{0}\\"",\r
"Items without a barcode",\r
"ITEMS WITHOUT A BARCODE",\r
"Items whose rate differs from the rate by rule (",\r
"Items of the whole code list that have no barcode; first come the items from the latest invoices of the selected store.",\r
"Items and barcodes",\r
"Items from the \\"Cigarettes\\" group (Items → Cigarettes) always keep their own margin.",\r
"Items this store purchased this year that are not in the stocktake. The list serves as a check of skipped shelves and does not represent a shortage (sales are not tracked by item).",\r
"Items the program does not recognise (",\r
"Items at 0 % without basis:",\r
"ITEMS FROM INVOICES WITHOUT A BARCODE",\r
"ITEMS WITH A WRONG BARCODE CHECK DIGIT",\r
"Items with a special margin (",\r
"Items at the 0 % rate without a basis. Without a basis, turnover goes into the PR PDV-2 field according to the company setting (Forms → PR-PDV).",\r
"Items have been removed from the group.",\r
"For items without a rule, the margin from their latest costing sheet is entered.",\r
"For items without a rule, the selling price incl. VAT from their latest costing sheet is entered.",\r
"item",\r
"ATC",\r
"The ATC code is not valid (format: M01AE01).",\r
"ATLANTIC INVESTMENT D.O.O.",\r
"auto",\r
"Auto",\r
"Auto PDF",\r
"The automatic daily copy works from the installation of the new program version (Setup). Until then the copy is made with the button below.",\r
"automatic check (at startup and every 30 min)",\r
"Automatic exchange through a folder runs from the main computer (Windows).",\r
"automatic printing",\r
"Automatic printing is switched off.",\r
"Automatic printing is switched on. Every new costing sheet from a scan goes to the printer.",\r
"Automatic \\"No-show\\"",\r
"automatic (source {0} #{1})",\r
"The automatic backup is located",\r
"The automatic backup is made when the company is opened (the first state of the day), during work and when the application is closed (the last state of the day), for every open company; 14-day rotation, the Archive is not deleted. (The copy on opening and during work — from the new installation of the program.)",\r
"automatically turned off: the company has no such data or a package that requires them",\r
"An automatic voucher is changed through the document and \\"Post month\\".",\r
"An automatic voucher is not deleted manually. Deletion goes through the document and \\"Post month\\" again.",\r
"An automatic voucher is not edited manually. Changes go through the document and \\"Post month\\" again.",\r
"Publish the database automatically after changes",\r
"Automatically linked {0} to invoices (closed {1}).",\r
"Automatic proposal for the whole month, for all stores",\r
"Automatically download the main computer's database",\r
"Download new updates automatically",\r
"automatic import of statements into Bank after reading",\r
"Automatically linked {0} payments ({1} EUR), closed {2} invoices.",\r
"automatic: {0}",\r
"automatic reading off",\r
"automatic reading on",\r
"Automatic sending of technical errors:",\r
"There is no automatic posting",\r
"Author and rights holder",\r
"Autosync for Google Drive",\r
"AV-{0}-{1}",\r
"advance",\r
"Advance",\r
"Advance — {0}",\r
"Advance {0} — {1}",\r
"The advance of {0} EUR has been collected.",\r
"The advance of {0} EUR has been returned.",\r
"Advance and cancellation",\r
"The advance has been deducted on the final receipt.",\r
"The advance has been deducted on the final receipt. It can be deleted only after the deduction is cancelled.",\r
"The advance has not been deducted on any receipt.",\r
"Advance deducted on this receipt",\r
"Advance on cancellation",\r
"Advance for accommodation {0} – {1}",\r
"Advance",\r
"Advances",\r
"Advances and credit notes",\r
"Advances used",\r
"Advances received",\r
"Advances refunded",\r
"Advances for property, plant, equipment and biological assets",\r
"Advances for intangible assets",\r
"Advance receipt",\r
"ADVANCE RECEIPT",\r
"advance invoice {0}",\r
"Advance receipt {0}",\r
"Advance receipt {0} — {1}",\r
"Advance receipt {0} belongs to a different customer.",\r
"Advance receipt {0}, payment {1}",\r
"Advance receipt and advance cancellation",\r
"The advance receipt has an IKOF and cannot be deleted.",\r
"Advance receipt from a payment",\r
"The advance receipt has been fiscalized.",\r
"The advance receipt was issued (IKOF {0}), but saving to the server failed. Retry the save; the receipt is not issued again.",\r
"The advance receipt has been deleted.",\r
"The advance receipt has been saved.",\r
"The advance receipt has been cancelled.",\r
"An advance receipt must have a customer.",\r
"The advance receipt does not exist.",\r
"The advance receipt is not fiscalized.",\r
"The advance receipt is not fiscalized. A corrective receipt for the advance is not needed.",\r
"Advance receipt with a VAT rate of {0} %.",\r
"Advance receipt for this payment",\r
"Advance receipt for a customer payment not tied to an invoice (statement or Collection from customers)",\r
"Advance receipt: advance received excluding VAT (by customer); closed by cancellation on the final receipt",\r
"Advance receipts",\r
"Advance receipts to customers, deduction of the advance on the final receipt, advance ledger · credit notes and customer notices",\r
"Advance receipts by payment date; cancellation by the date of the issued final receipt. PR-PDV covers this ledger and the regular I-RAČ.",\r
"Advance receipts, deduction of advance on the final invoice, advance ledger · credit notes to customers and customer notices",\r
"August",\r
"August",\r
"August",\r
"AVR",\r
"Update",\r
"Updates are allowed only over an HTTPS connection.",\r
"Update downloaded",\r
"B. LONG-TERM PROVISIONS AND LONG-TERM LIABILITIES (118+122)",\r
"B. Capital gains and losses",\r
"B. FIXED ASSETS (003+008+016)",\r
"b) 12 % for taxable profit exceeding 100,000.00",\r
"b) from other related legal entities",\r
"b) Other operating income",\r
"b) Other operating expenses (provisions and other operating expenses)",\r
"b) to other related parties",\r
"b) Expenses from value adjustments",\r
"b) Expenses from value adjustments of current assets (except financial)",\r
"b) Tax and contribution costs (214 to 216)",\r
"Backup",\r
"Database backup",\r
"The backup failed.",\r
"Christmas Eve",\r
"bank",\r
"Bank",\r
"Bank — statements and cash flow",\r
"Bank / statement",\r
"Bank 2410 outflows — IZV vouchers vs statements (excluding \\"other\\")",\r
"Bank 2410 inflows — IZV vouchers vs statements (excluding \\"other\\")",\r
"Bank: {0} outflows from the statement are awaiting posting.",\r
"Bank: statements and cash flow",\r
"Bank fees",\r
"Bar",\r
"BAR",\r
"at least one outlet (store, premises, office)",\r
"barcode",\r
"Barcode",\r
"Barcode (reader or manual) + Enter",\r
"Barcode (reader or manual), code or name + Enter",\r
"Barcode (type or scanner)",\r
"barcode {0}",\r
"Barcode {0}",\r
"Barcode {0} was added to the item chosen by the Manager.",\r
"Barcode {0} stays on the existing item.",\r
"Barcode {0} already belongs to catalogue item \\"{1}\\". It must be linked to the existing item.",\r
"Barcode {0}: {1}",\r
"Barcode {barkod} is linked to the item \\"{naziv}\\".",\r
"Barcode {barkod} already has the item \\"{naziv}\\".",\r
"Barcode + Enter",\r
"Barcode or name",\r
"Also have this barcode:",\r
"The barcode was entered in Excel as a number; leading zeros were lost.",\r
"The barcode was not entered.",\r
"The barcode is not linked to any item.",\r
"A barcode is scanned with a reader or typed into the field next to the item and confirmed with the Enter key. An item without an entered barcode stays on the \\"Items without barcode\\" list.",\r
"The barcode is typed or scanned in the Barcode column (with the goods in hand, row by row) and remembered for later entries; it reaches the registers and the Manager.",\r
"barcode in a disallowed format",\r
"The barcode already belongs to",\r
"Barcodes",\r
"barcodes {0}{1}",\r
"barcodes on several items",\r
"Barcodes on multiple items",\r
"barcodes with a wrong check digit",\r
"Barcodes with an incorrect check digit",\r
"Barcodes",\r
"Barcodes from the Manager to check (",\r
"Database",\r
"item database",\r
"The item database was created for another company.",\r
"Company database on this device",\r
"The database was published at {0} ({1} MB). Phones, secondary computers and Manager download it.",\r
"The database has been reduced: {0} MB → {1} MB (older invoices cleaned: {2}).",\r
"Cash register database on this computer",\r
"The cash register database was not found on this computer.",\r
"The cash register database was not found. The path to kasa.db is set in Settings.",\r
"the database has not been changed since the last compilation",\r
"The database was not published: {0}",\r
"the database is not open",\r
"The database is not open",\r
"baza_obradjena_….knj.db",\r
"baza_obradjena.knj.db",\r
"of the database.",\r
"The database of this company is currently published by:",\r
"BB",\r
"Bearer {0}",\r
"bečići",\r
"BENSTON",\r
"Berane",\r
"BERANE",\r
"BEST",\r
"without items",\r
"no barcode",\r
"No barcode",\r
"without a number",\r
"Without price",\r
"no date",\r
"No room assigned",\r
"without a document",\r
"no ENU",\r
"Without recorded sales by item in the period:",\r
"Gluten-free",\r
"no group",\r
"No payout in this month",\r
"No selection: all outlets",\r
"no changes",\r
"no cash register",\r
"no key (Manager 1.4.0)",\r
"Without posting: all transactions wait for review in \\"Transactions\\".",\r
"no customer",\r
"Lactose-free",\r
"no licence (the company PIB is not entered in Settings → Company)",\r
"no licence: the program works without restrictions",\r
"no limit",\r
"without a store",\r
"no position",\r
"Without purchase price",\r
"no method",\r
"without order",\r
"no name",\r
"no numbering (by days)",\r
"no meals",\r
"no response",\r
"no job description: {0}",\r
"without notice period (",\r
"Unticked when returning goods received earlier at the old margin (a return is discharged at the price at which it was charged).",\r
"Unmatched: {0}. Manual linking: the list \\"Payments from statements without a match\\" (with a takings suggestion).",\r
"No partner",\r
"excl. VAT",\r
"Excl. VAT",\r
"excl. VAT · deductible VAT",\r
"without VAT",\r
"Without right to deduction",\r
"no rule (general rate)",\r
"Without a selling price the write-off cannot be posted.",\r
"no changes ({0} files already read)",\r
"no change",\r
"Unchanged: {0}.",\r
"no check",\r
"No invoice",\r
"Without a schedule (not touched): {0}{1}.",\r
"no reason",\r
"no end date",\r
"No rotation (everyone keeps their own shift)",\r
"bez secera; vanil; zele; vuna; bombon; zvak; sok; napitak",\r
"No image",\r
"no room",\r
"No room",\r
"No tax after nights",\r
"no tax: {0}",\r
"no required qualification: {0}",\r
"no role",\r
"unlinked",\r
"Unlinked",\r
"No connection since {0}",\r
"No connection since {0}:{1}",\r
"No connection to the server for {0} {1} (allowed {2}). Read-only and export until the connection to the server is restored.",\r
"no protection",\r
"Without connection security, the password and message travel unencrypted. STARTTLS or SSL/TLS is recommended.",\r
"non-cash (bank transfer) invoices",\r
"BIJELO",\r
"Bijelo Polje",\r
"Balance sheet",\r
"Balance sheet · income statement · statistical annex · notes · classification · PD · closing — from the general ledger, on the forms from the Rulebook (Official Gazette of Montenegro 11/20, 139/21, 13/22, 139/22) and the Accounting Act 84/25. Filing deadline: 31 March (IRMS).",\r
"Balance sheet and income statement on the official form, statistical annex, notes, year-end closing",\r
"balance sheet and income statement, PD",\r
"Balance sheet, Income statement, Simplified notes, Statistical annex",\r
"Income statement",\r
"Was",\r
"Biological assets held for sale",\r
"Cash desk",\r
"Cash desk — cash in / cash out",\r
"Cash desk (cash from daily takings)",\r
"Cash desk {0}: {1}",\r
"Store cash desk",\r
"The cash voucher has been saved: {0}.",\r
"BLG",\r
"The block for rate {0}% was not read; it was derived from UKUPAN POREZ ({1} + {2} = {3}).",\r
"The UKUPAN POREZ block was not read.",\r
"BO",\r
"vial",\r
"Colour",\r
"Colour {0}",\r
"Location colour and label",\r
"The colour and label of the location \\"{0}\\" are determined again from the location name. The cash registers and Manager receive them with the next price list.",\r
"The colour and label of the location \\"{0}\\" have been saved. The cash registers and Manager receive them with the next price list.",\r
"The colour and label are determined again from the location name.",\r
"The colour and label appear next to every price entry and change (in Accounting, on the cash register and in Manager), so that it is visible which location the price applies to. The program determines them from the location name; others can be chosen here.",\r
"Colour of location {0}",\r
"The colour must be one of the 16 palette colours.",\r
"Employee colour in the schedule (click to change)",\r
"Sick leave",\r
"Sick leave 100 % (work injury, occupational disease, donation…)",\r
"Sick leave 100 % up to 60 days (work injury, occupational disease…)",\r
"Sick leave 100 % over 60 days",\r
"Sick leave up to 60 days (70%)",\r
"Sick leave and maternity leave are recorded in the salary payroll, not in a separate payroll.",\r
"sick leave from {0}: no calculated months before the start — current basic + seniority = {1} EUR",\r
"sick leave from {0}: average of basic earnings (basic + seniority) {1}–{2}, {3} mo. = {4} EUR",\r
"Sick leave over 60 days",\r
"Sick leave, pregnancy leave, maternity leave by period (salary and IOPPD)",\r
"Candies and other sugar products",\r
null,\r
"BOND",\r
"Bonus / award (taxable)",\r
"Green beans, peas, peppers, tomatoes and pumpkin",\r
"Stay",\r
"Stay longer than {0} days",\r
"Stay longer than 30 days",\r
"Tourist tax",\r
"Tourist tax — records {0}.",\r
"tourist tax — a liability to the municipality, not revenue ({0} person-nights)",\r
"Tourist tax ({0}{1}",\r
"Tourist tax (EUR per person per night)",\r
"Tourist tax (estimate)",\r
"Tourist tax is a liability to the municipality, not income: it does not enter the daily takings, the KIF or the exempt turnover of PR-PDV. Payment deadline:",\r
"Tourist tax by months",\r
"The tourist tax for the municipality {0} is {1} EUR; in the property rules it is {2} EUR.",\r
"Tourist tax: the payment deadline for period {0} expired {1} Unpaid: {2} EUR.",\r
"Tourist tax: payment for period {0} is due {1} Amount: {2} EUR.",\r
"Christmas",\r
"Christmas (second day)",\r
"br",\r
"BR",\r
"br original",\r
"no. {0}",\r
"br. dok",\r
"Doc. no.:",\r
"br. dokumenta",\r
"Document no.",\r
"No. of invoices",\r
"br. fakture",\r
"Invoice no.",\r
"Suppl. invoice no.",\r
"Supplier invoice no.",\r
"Stmt. no.",\r
"br. original",\r
"Invoice no.",\r
"No. of receipts",\r
"Flour",\r
"Flour (corn and wheat) and rice in bulk",\r
"Flour (corn and wheat) and rice, packaged",\r
"Takes care of the appearance of outlets, occupational safety and compliance with trade and fiscalization regulations.",\r
"Deletion",\r
"deleting a costing sheet",\r
"Deleting a costing sheet, renumbering the year, locking a period and merging items require a PIN. The PIN prevents",\r
"Deletion was not carried out.",\r
"Delete the receipt being entered (customer changed their mind, no money); it stays in the deleted records",\r
"Deleting a manually entered holiday",\r
"Item deletion",\r
"Deleting the entered opening balance",\r
"Deleting, locking a period, payroll and HR require a PIN, to protect against accidental actions.",\r
"Only accounts added by the user can be deleted.",\r
"count",\r
"Number",\r
"BROJ",\r
"Access program number (ID) (optional)",\r
"number {0} (e.g. 123 456 789)",\r
"number / amount; the type is set on the Bank screen, then \\"Post month\\" again",\r
"Notice number / reference",\r
"Number of barcodes",\r
"The customs declaration number is required.",\r
"Number of days on a business trip (8–12 h = 0.5 per diem)",\r
"Declaration number",\r
"broj dok",\r
"Doc. no. old → new",\r
"document number",\r
"Document number",\r
"Document number — NEW",\r
"Document number — OLD",\r
"The document number must run without a break through the whole year at the company level, and the costing sheet number per store. That is why numbers are assigned by",\r
"Document number, IKOF or JIKR",\r
"Invoice number",\r
"Invoice number / description",\r
"supplier invoice number",\r
"The number of free pieces must be at least 1.",\r
"The customer's notification number or reference is not entered.",\r
"document number",\r
"Document number",\r
"Statement number",\r
"Number of post-holders",\r
"Costing sheet no. old → new",\r
"costing sheet number",\r
"Costing sheet number",\r
"Costing sheet number — NEW",\r
"Costing sheet number — OLD",\r
"Costing sheet number from the series",\r
"The number of pieces has changed in the meantime.",\r
"The number of pieces must be greater than zero.",\r
"The number of pieces from which the price applies (N) is required, at least 1.",\r
"The number of pieces per pack must be greater than zero.",\r
"The number of pieces for barcode {0} must be greater than zero.",\r
"The licence number must be in the form L-2026-0001.",\r
"ID card number",\r
"Number on the cash register",\r
"The number of reward days is mandatory when the incentive is enabled.",\r
"The number of reward days cannot be negative.",\r
"Voucher number",\r
"the number of orders ({0}) and rows with amounts ({1}) do not match",\r
"Decision no.",\r
"Decision number (optional)",\r
"number of credits {0} ≠ {1}",\r
"Number of person-nights",\r
"Number of person-nights: {0} · tax amount: {1} EUR · paid for the month: {2} EUR",\r
"The number of paid pieces for the free item (N) is required, at least 1.",\r
"access program number",\r
"broj racuna",\r
"broj računa",\r
"Receipt number",\r
"Invoice number / description",\r
"supplier invoice number",\r
"ENU receipt number",\r
"The invoice number has not been entered.",\r
"invoice number, name, PIB…",\r
"Number of working days the employee worked. \\"Regular work\\" = days × hours per day.",\r
"Prescription number",\r
"Batch number (LOT) from the pharmaceutical wholesaler's delivery note. The fiscal receipt does not contain it; it is entered manually.",\r
"Number of rooms",\r
"Contract number",\r
"Contract number (empty = automatic)",\r
"Number of devices",\r
"The number of devices is not valid.",\r
"Visa number",\r
"number of debits {0} ≠ {1}",\r
"Bank account number",\r
"The bank account number is not entered.",\r
"number, supplier…",\r
"code counter",\r
"Counted by:",\r
"Counting",\r
"Counted",\r
"Numeric fields accept only numbers.",\r
"Numbers",\r
"The numbers on already issued costing sheets are changed",\r
"the numbers differ from the file's control totals.",\r
"the numbers in the code list match the file's control totals.",\r
"gross",\r
"Gross",\r
"GROSS",\r
"Gross (EUR)",\r
"gross (the tax is deducted from the rent)",\r
"gross (contracted fee)",\r
"Trial balance",\r
"TRIAL BALANCE",\r
"GROSS PROFIT (income − cost value)",\r
"gross turnover of those days; the breakdown is entered from the Z report, then the estimate is repeated",\r
"Gross salaries ({0} persons)",\r
"Gross: the tax is deducted from the contracted rent. Net: the lessor receives exactly the contracted amount, and the gross is calculated.",\r
"Gross: tax, PIO and surtax are deducted from the contracted fee. Net: the contractor receives exactly that amount, and the gross is calculated.",\r
"Quick change",\r
"Quick select",\r
"Quick access",\r
"Fast notification",\r
"BS",\r
"BU",\r
"Budva",\r
"BUDVA",\r
"button",\r
"Bypass",\r
"C. DEFERRED TAX ASSETS",\r
"C. DEFERRED TAX LIABILITIES",\r
"C. Tax base",\r
"c) 15 % for taxable profit exceeding 1,500,000.00",\r
"c) Depreciation",\r
"c) INTANGIBLE ASSETS — accounting depreciation (Art. 11)",\r
"c) from unrelated legal entities",\r
"c) to unrelated parties",\r
"c) Income from asset value adjustments",\r
"calc(10px + env(safe-area-inset-top)) 14px 10px",\r
"CAMEL",\r
"CAMERA",\r
"Customs duty",\r
"Customs declaration",\r
"Customs value",\r
"Customs declarations — import VAT, PR-PDV field 20",\r
"customs declarations (Import and foreign services) + manual",\r
"Hour (0–23) of the day after the planned arrival.",\r
"CASH",\r
"CAST(substr(COALESCE(DatumUUpotrebu,DatumNabavke),1,4) AS INTEGER)",\r
"pending",\r
"Pending",\r
"waiting {0}",\r
"awaiting response",\r
"awaiting posting",\r
"awaiting posting / classification",\r
"waiting for customer notification",\r
"awaiting processing",\r
"Awaiting processing",\r
"awaiting decision",\r
"waiting for the data it refers to",\r
"Waiting for the data it refers to.",\r
"awaiting review ·",\r
"waiting to be sent",\r
"Waiting to be sent",\r
"Waiting to be sent: {0}.",\r
"awaiting summary receipt",\r
"waits in Mail)",\r
"Celery",\r
"Social Work Centre (CSR)",\r
"Thu",\r
"Thu",\r
"Cetinje",\r
"CETINJE",\r
"Thursday",\r
"Thursday",\r
"CHESTERFIELD",\r
"Cigarettes",\r
"Cigarettes — prices and margins",\r
"Cigarettes — keep their own margin",\r
"Cigarettes — special prices and margins",\r
"CIGARETA",\r
"cigarettes",\r
"CIGARETE",\r
"Cigarettes and other tobacco products",\r
"CIGARILLOS",\r
"CIGARILOS",\r
"The whole database was copied to the backup folder: {0}",\r
"Whole year",\r
"price",\r
"Price",\r
"Price (EUR incl. VAT)",\r
"Price (N/P/S)",\r
"price {0} EUR incl. VAT",\r
"price {0}{1}",\r
"The price {nova} is lower than the purchase price ({nabavna}). Enter the price?",\r
"The price {nova} exceeds the maximum permitted price of the medicine ({max}).",\r
"item price",\r
"Price excl. VAT",\r
"Price waiting",\r
"FZO price",\r
"Price and payment",\r
"Price from existing data entered for {0} items",\r
"price above the maximum retail price:",\r
"The price is unchanged.",\r
"The price has changed in the meantime.",\r
"The price has changed in the meantime. Undoing is not possible.",\r
"Price scheduled: {0}, {1}, {2} from {3}.",\r
"Register price",\r
"pending price {0}",\r
"prices waiting for a place",\r
"Prices waiting for outlet linking",\r
"store prices (the last selling price from the costing sheet).",\r
"The price of location \\"{0}\\" cannot be removed: the item has no general price.",\r
"The price must be less than 100.000,00 €. Check that a barcode was not scanned into the price field.",\r
"The price must be greater than zero.",\r
"the price at the registers ({0}) exceeds the maximum price of the medicine ({1})",\r
"Register price",\r
"The register price ({0} €) is above the maximum retail price ({1} €).",\r
"The register price (highest {0}) is above the maximum retail price.",\r
"Register price is above the maximum retail price:",\r
"Register price: general",\r
"Price cannot be negative.",\r
"Price per night",\r
"Price per night (EUR)",\r
"The price per night is not valid.",\r
"Price per night incl. VAT by period. A period for a room type takes precedence over a period for all types; outside periods the base price of the type applies.",\r
"Price for N pieces (€)",\r
"The price at which this store's cash register sells the item (price list)",\r
"prices by location",\r
"Prices per outlet (entered and waiting)",\r
"Price by nights",\r
"Price from the List (€)",\r
"Price with VAT",\r
"PRICE incl. VAT",\r
"Price incl. VAT (EUR)",\r
"The price is entered with the Enter key and applies only to",\r
"The price is entered in that location's column. Clearing the field makes the location use the general price again.",\r
"Price for the point of sale",\r
"The price for location \\"{0}\\" must be greater than zero (empty field = the general price applies).",\r
"The price for location \\"{0}\\" is not a number.",\r
"Price for location \\"{0}\\": {1}",\r
"prices",\r
"Prices",\r
"PROMOTION PRICES — {0}",\r
"Promotion prices: {0}",\r
"Prices are waiting for a point of sale to be linked to a store:",\r
"Cash register prices updated: {0}.",\r
"Prices waiting for a point of sale",\r
"Prices of place \\"{0}\\": in the preview {1}, on the main computer {2}.",\r
"Prices on cash registers · promotions with the previous lowest price (30 days) · labels",\r
"Prices on the cash register are already the same as on the costing sheet.",\r
"outlet prices",\r
"Prices of these outlets are not discarded: they wait and are entered once the outlet is linked to a store (\\"Link points of sale to stores\\").",\r
"Prices at which the registers sell: the company's general price and the store price. A change here reaches the registers and the Manager; changes made by the supervisor at the register and from the Manager arrive here. ·",\r
"Prices by point of sale",\r
"prices by outlet, sending to cash registers",\r
"Prices of an outlet from the file that is not linked to a store wait here. After linking they are entered as prices of that store. The link is remembered for future imports.",\r
"Prices for cash registers are changed by the computer in processing mode (main or admin).",\r
"The price is changed by a user with authorisation.",\r
"a price incl. VAT",\r
"Target",\r
"Target {0} {1}: {2} €",\r
"The target is too low to fit.",\r
"The target net amount is required.",\r
"CInMED",\r
"the entire price list",\r
"all day",\r
"whole outlet",\r
"whole outlet (annual / full stocktake)",\r
"whole outlet: included in the trade ledger, stock and PD",\r
"The whole payroll (items, deductions and results) is copied to the selected month. The hour fund is set to that month's fund, unless it was changed manually.",\r
"chip",\r
"Cleaning",\r
"Cleaning in progress",\r
"Clean",\r
"the reader (OCR) stopped even after a restart ({0}). The reading must be repeated.",\r
"The document reader enters the zone here; it can also be done manually, row by row.",\r
"with a reader",\r
"reading",\r
"Reading Outlook…",\r
"Reading…",\r
"Reading the cash register database is available only in the Windows version.",\r
"Reading the file",\r
"Reading Manager files…",\r
"reading stopped; the reader is restarting",\r
"reading was not completed; manual import required (Obligations → Statement import)",\r
"reading not completed: {0}",\r
"Reading Outlook failed. {0}",\r
"Read Outlook from the last date and import statements into Bank",\r
"Reading Outlook works only on Windows.",\r
"Reading the PDF failed: {0}",\r
"Reading PDF…",\r
"Reading mail from Outlook since {0}. Processing may take a few minutes…",\r
"Reading mail from Outlook… (attachments are saved, mail is not modified)",\r
"Reading mail is available only on a computer with classic Outlook and Setup 1.0.67 or newer installed. Importing a single statement: Payables → Import statement.",\r
"Reading mail works only on a computer (Windows) that has Outlook.",\r
"Reading mail requires a new installation of the program (Setup 1.0.67 or later) on this computer.",\r
"Reading mail requires installing Setup 1.0.67 or later on the computer with Outlook. Updating over the internet does not include this feature.",\r
"Reading the receipt from the image…",\r
"reading row {0}/{1}",\r
"Reading from the server…",\r
"Text recognition is not available on this device.",\r
"Reading…",\r
"Price list",\r
"price list from file",\r
"Price list from the \\"kasa-paket\\" file: a price list saved from another Accounting using the \\"Save price list to file\\" button, or the catalogue of one register from the Cash register program (Settings → Items and prices → \\"Save catalogue to file\\"). A store is assigned to each point of sale in the package. Prices from the package do not replace newer prices in the price list; the import deletes nothing.",\r
"Price list from file (kasa-paket)",\r
"the price list has been published (registers pick it up automatically).",\r
"The price list is empty.",\r
"The price list is empty. Items are added individually or by import (Exchange and Excel).",\r
"Cash register price list",\r
"Price list of cash registers, prices and closings of IRIS CORVINA cash registers",\r
"The price list is published to the registers by the company's main computer, automatically in every sync round.",\r
"cash register price list",\r
"Price list changed",\r
"the price list has not changed since the last publication.",\r
"The price list was not written to the folder: {0}",\r
"price list published",\r
"price list exists",\r
"CKB",\r
"Art. 101 para. 2 of the Labour Law",\r
"Art. 102 of the Labour Law",\r
"Art. 105 of the Labour Law",\r
"Art. 106 of the Labour Law",\r
"Art. 119a para. 6 of the Labour Law",\r
"Art. 120 para. 7 of the Labour Law",\r
"Art. 126 of the Labour Law",\r
"Art. 126a of the Labour Law",\r
"Art. 139, 140 and 141 of the Labour Law",\r
"Art. 144 and 145 of the Labour Law",\r
"Art. 146 of the Labour Law",\r
"Art. 147 and 148 of the Labour Law",\r
"Art. 149 of the Labour Law",\r
"Art. 150 of the Labour Law",\r
"Art. 151 of the Labour Law",\r
"Art. 152 of the Labour Law",\r
"Art. 153 of the Labour Law",\r
"Art. 154–157 of the Labour Law",\r
"Art. 158 of the Labour Law",\r
"Art. 161 and 162 of the Labour Law",\r
"Art. 163 of the Labour Law",\r
"Art. 164 para. 1 point 7 of the Labour Law",\r
"Art. 164 of the Labour Law",\r
"Art. 165 of the Labour Law",\r
"Art. 166 of the Labour Law",\r
"Art. 169a of the Labour Law",\r
"Art. 17",\r
"Art. 172 para. 1 point 2 indent 5 of the Labour Law",\r
"Art. 172 of the Labour Law",\r
"Art. 173 of the Labour Law",\r
"Art. 174 of the Labour Law",\r
"Art. 175 of the Labour Law",\r
"Art. 176 and 176a of the Labour Law",\r
"Art. 177 of the Labour Law",\r
"Art. 179 of the Labour Law",\r
"Art. 18 points 5 and 5a of the Labour Law",\r
"Art. 180a para. 1 and Art. 140 of the Labour Law and Art. 65 para. 3 of the Law on Peaceful Settlement of Labour Disputes",\r
"Art. 19 para. 1 point 1 of the Labour Law",\r
"Art. 19 para. 1 point 3 of the Labour Law",\r
"Art. 193 of the Labour Law",\r
"Art. 205 of the Labour Law",\r
"Art. 25",\r
"Art. 26",\r
"Art. 27",\r
"Art. 29 and 30 of the Labour Law",\r
"Art. 29 para. 4 of the Labour Law",\r
"Art. 31 para. 1 point 15 and Art. 92 of the Labour Law",\r
"Art. 31 para. 1 of the Labour Law",\r
"Art. 31 para. 3 of the Labour Law",\r
"Art. 33 of the Labour Law",\r
"Art. 34 and 35 of the Labour Law",\r
"Art. 35b para. 3 pt. 2",\r
"Art. 35b para. 3 pt. 6",\r
"Art. 35b para. 3 pt. 7",\r
"Art. 37 para. 9 of the Labour Law",\r
"Art. 37 of the Labour Law",\r
"Art. 38 of the Labour Law",\r
"Art. 47 and 48 of the Labour Law",\r
"Art. 48 paras. 5–7 of the Labour Law",\r
"Art. 49 of the Labour Law",\r
"Art. 5 para. 1 points 6 and 9 of the Labour Law",\r
"Art. 50 of the Labour Law",\r
"Art. 61 of the Labour Law",\r
"Art. 62 para. 4 of the Labour Law",\r
"Art. 62 of the Labour Law",\r
"Art. 64 of the Labour Law",\r
"Art. 67 of the Labour Law",\r
"Art. 7 para. 1: the category is determined by the criteria on the last day",\r
"Art. 7 of the Law on the Prohibition of Workplace Harassment",\r
"Art. 70 of the Labour Law",\r
"Art. 73 of the Labour Law",\r
"Art. 75 of the Labour Law",\r
"Art. 76 of the Labour Law",\r
"Art. 79 paras. 3 and 4 of the Labour Law",\r
"Art. 79 of the Labour Law",\r
"Art. 80 of the Labour Law",\r
"Art. 81 para. 4 of the Labour Law",\r
"Art. 81 of the Labour Law",\r
"Art. 83 para. 1 of the Labour Law",\r
"Art. 83 para. 2 of the Labour Law",\r
"Art. 83 para. 4 of the Labour Law",\r
"Art. 85 of the Labour Law",\r
"Art. 86 of the Labour Law",\r
"Art. 87 of the Labour Law",\r
"Art. 88 and 88a of the Labour Law",\r
"Art. 89 of the Labour Law",\r
"Art. 9 of the Law on the Prohibition of Workplace Harassment",\r
"Art. 90 of the Labour Law",\r
"Art. 93 of the Labour Law",\r
"Art. 98 of the Labour Law",\r
"Article and point of the law (e.g. \\"Art. 27 point 5\\")",\r
"Contract clause on the term (optional)",\r
"article, point",\r
"Membership fees to chambers, federations and associations above 0.1 % of total income",\r
"CLASSIC",\r
"COALESCE({0},'') LIKE ? ESCAPE '\\\\'",\r
"COALESCE({0}DatumFakture, {1}DatumDokumenta)",\r
"COALESCE({0}DatumKnjizenja, {1}DatumDokumenta, {2}DatumFakture)",\r
"COALESCE(d.Naziv,'')",\r
"COALESCE(k.DatumFakture, k.DatumDokumenta)",\r
"COALESCE(k.DatumKnjizenja, k.DatumFakture, k.DatumDokumenta)",\r
"COALESCE(k.MarketID, r.MarketID)",\r
"COALESCE(ks.PDVProcenat,0)",\r
"COALESCE(ks.ZavisniJed,0)",\r
"COALESCE(NULLIF({0}.DatumPDV,''), {1}.DatumIzdavanja)",\r
"COALESCE(NULLIF(Racun,''), Banka)=?",\r
"COALESCE(p.Iznos,0)",\r
"COALESCE(p.Iznos,0)-{0}",\r
"COALESCE(pl.Placeno,0)",\r
"COALESCE(ps.Poc,0)",\r
"COALESCE(vz.Vezano,0)",\r
"coca; cola; fanta; sprite; sok; juice; ledeni caj; tonik; bitter; energetsk; cedevita; limunada",\r
"cokolad; kakao; voc; jagod; vanil; keks; napolitank; karamel; sladoled; puding; sojin; bademov; zoben; kokosov; rizin; tijelo; sapun; losion",\r
"cokolad; kinder; tjestenin; rezanci; sampon; liker",\r
"Chocolate and chocolate and cocoa products",\r
"Consolas, monospace",\r
"Content-Disposition: attachment; filename=\\"{0}\\"",\r
"Content-Transfer-Encoding: base64",\r
"Content-Type: application/octet-stream; name=\\"{0}\\"",\r
"Content-Type: multipart/mixed; boundary=\\"{0}\\"",\r
"Content-Type: text/plain; charset=UTF-8",\r
"CORRECTIVE",\r
"CRNA",\r
"of Montenegro",\r
"Crnogorska komercijalna banka (CKB)",\r
"Montenegrin",\r
"red",\r
"red",\r
"CSR",\r
"Ctrl+K",\r
"Retention of personal data (years)",\r
"Retention of personal data: at least 1 year",\r
"Flowers",\r
"Other flowers",\r
"Fresh flowers (cut)",\r
"D. LONG-TERM DEFERRED INCOME AND DONATIONS RECEIVED",\r
"D. CURRENT ASSETS (026+031+039+043+044)",\r
"d.Broj",\r
"d.DokID IN ({0})",\r
"d.FIK",\r
"d.IIC",\r
"d.InvNum",\r
"d.MarketID",\r
"yes",\r
"Yes",\r
"DA",\r
"Yes — support level IV needed (counted as two persons)",\r
"yes — allocated to lines",\r
"that you state in writing your position on the allegations in this warning within {0} days of delivery, no later than {1}, and attach any evidence you have. If you do not respond within that period, you are deemed to agree with the allegations in the warning ({2} paras. 5 and 6). You have the right to request, within {3} days of delivery (by {4}), to give your statement orally — the hearing is then held within 15 days of delivery of the warning, in the presence of a representative of the trade union of which you are a member and a defender of your own choosing, if you so request, and minutes are kept ({5} paras. 7–12).",\r
"to enter their requests (day off, leave, preferred shift, work in another store) — before \\"Schedule automatically\\". Click any cell or day header to add an employee, replace one, or remove one from the shift. The last rows show how many employees are scheduled per shift that day (red = short).",\r
"Next",\r
"day",\r
"Day",\r
"Day / from",\r
"Statehood Day",\r
"day has takings",\r
"Report day: from 1 to 31",\r
"The day is non-working for everyone.",\r
"The day is a non-working holiday again.",\r
"The day on which both the goods and the invoice were received (the later of the two). Input VAT goes into PR-PDV by it.",\r
"Independence Day",\r
"Invoice receipt date — VAT Act Art. 37 para. 7",\r
"days",\r
"Days",\r
"Days (0 = none)",\r
"on {0} the employment relationship with the Employer, on the basis of the expiry of the fixed-term employment contract.",\r
"days to respond in writing,",\r
"days to request an oral hearing; silence = consent) →",\r
"Days to deadline",\r
"days and enforcement within",\r
"days and its delivery within",\r
"Days late",\r
"days after the response deadline expires)",\r
"days of learning of it (the employee has",\r
"days after the end of each 15 days of the month; monthly report by",\r
"Days after the end of each 15 days in a month.",\r
"days before.",\r
"days; the period for legal remedy runs from delivery",\r
"days; the remainder by",\r
"days; orally on request within",\r
"days), and for termination create a dismissal decision. The whole procedure must be completed within",\r
"today",\r
"Today",\r
"today ({0})",\r
"No price changes from this device today.",\r
"Today's backup has already been made.",\r
"Days",\r
"Days and hours are recorded in the salary payroll, not in a separate payroll.",\r
"Holiday days in the decision",\r
"Days of the week (nothing selected = all days)",\r
"Danilovgrad",\r
"DANILOVGRAD",\r
"days",\r
"On the date this Rulebook enters into force, the Employer's previous act on job classification ceases to apply. The Rulebook is published on the notice board of the head office and of each outlet and electronically, and enters into force on the eighth day after publication. Each employee is made familiar with the Rulebook and the job description of their position and confirms this by signature (Annex 2).",\r
"day",\r
"DATA",\r
"datalist",\r
"ADVANCES PAID",\r
"Advances paid for inventories and services",\r
"Date",\r
"date \\"{0}\\" was not recognised (dd.mm.yyyy or yyyy-mm-dd)",\r
"The \\"to\\" date is before the \\"from\\" date.",\r
"The \\"to\\" date is before the \\"from\\" date.",\r
"The \\"to\\" date must be YYYY-MM-DD or null (no deadline).",\r
"The \\"to\\" date cannot be before the \\"from\\" date.",\r
"The \\"to\\" date is not valid.",\r
"The contract's \\"to\\" date is before the \\"from\\" date.",\r
"The \\"from\\" date is after the \\"to\\" date.",\r
"The \\"from\\" date must be YYYY-MM-DD.",\r
"The \\"from\\" date is not valid.",\r
"datum dokumenta",\r
"Document date",\r
"invoice date",\r
"Invoice date",\r
"Issue date and time",\r
"Payment date",\r
"The payment (or contract) date is required. It determines the month of the IOPPD return.",\r
"Delivery date",\r
"Issue date",\r
"The issue date is in the future. The Revenue Administration does not accept such a receipt.",\r
"The issue date is not valid.",\r
"The date was taken from the bottom of the report (with correction for printing after midnight). Verification of the day is required.",\r
"datum knjizenja",\r
"datum knjiženja",\r
"Posting date",\r
"Posting date (which ledger it enters)",\r
"The posting date {0} is earlier than the invoice date {1}.",\r
"Posting date {0} was not applied: {1}",\r
"The posting date has been set: {0}.",\r
"The final receipt date is before the advance was received.",\r
"Purchase date",\r
"Purchase date is required.",\r
"VAT liability date: {0} (eighth day from supply).",\r
"The date is not valid.",\r
"The revaluation date is not valid.",\r
"The notification date is before the credit note date.",\r
"The notification date is in the future.",\r
"The notification date is not valid.",\r
"The date from which the discount applies is not valid.",\r
"The date from which the scheme applies is required.",\r
"The date from which the basis applies is required.",\r
"The date from which the new rate applies is required.",\r
"The date from which the rate applies is not valid (format YYYY-MM-DD).",\r
"The date from which the new price applies is required (YYYY-MM-DD).",\r
"Decision date",\r
"Credit note date",\r
"The credit note date is before the invoice date.",\r
"The credit note date is in the future.",\r
"The credit note date is not valid.",\r
"The delivery note date is not valid.",\r
"Disposal date (sale or scrapping), YYYY-MM-DD:",\r
"The disposal date is before the purchase date.",\r
"Takings date",\r
"The takings date is required.",\r
"Takings date: {0}",\r
"Opening balance date",\r
"The opening balance date is not valid.",\r
"The date under which the costing sheet enters the books (KPR by posting date, trade ledger, accounts 134). For invoices of the previous month entered at the beginning of the month, enter the last day of the previous month.",\r
"The date under which the created costing sheets enter the books. At the start of a month, the last day of the previous month is entered for scans from that month.",\r
"Date of filing the return",\r
"Stocktake date",\r
"The stocktake date is required.",\r
"Return date",\r
"The return date is before the issue date of the issue form.",\r
"The return date is in the future.",\r
"The return date is not valid.",\r
"Date of violation *",\r
"End date",\r
"Receipt date",\r
"Receipt date (by law)",\r
"The receipt date {0} is before the invoice date {1}. An invoice cannot be received before it is issued.",\r
"The receipt date {0} is in the future. Enter the day the goods and invoice were actually received.",\r
"The advance receipt date is in the future.",\r
"The advance receipt date is not valid.",\r
"Advance received on: {0}",\r
"The declaration receipt date is required.",\r
"The invoice receipt date is before the estimate date.",\r
"The invoice receipt date is in the future.",\r
"The invoice receipt date has not been entered.",\r
"The date of receipt is required.",\r
"The date of receipt cannot be before the invoice date.",\r
"The date of receipt cannot be in the future.",\r
"The receipt date is not valid.",\r
"Date the notice was received",\r
"The estimate date is in the future.",\r
"Supply date",\r
"Invoice date",\r
"The invoice date is required.",\r
"The receipt date is before the advance {0} was received.",\r
"The invoice date is not valid.",\r
"Decision date",\r
"date of birth",\r
"Date of birth",\r
"The cost date is in a locked month. A date in an open month is required.",\r
"Contract date",\r
"Date of entry into Montenegro",\r
"date of entry into the program",\r
"Deposit date",\r
"The payment date is not valid.",\r
"The date the decision was delivered to the employee has not been entered (delivery within 8 days of the decision, Art. 148 para. 7). The enforcement period runs from that date.",\r
"Date of delivery of the decision:",\r
"Date of last invoice",\r
"Date of conclusion",\r
"Employment date",\r
"Employment date (registration)",\r
"Datum;Objekat;Kasa;ZBroj;BrojRacuna;UkupnoSaPDV;Osnovica21;PDV21;Osnovica15;PDV15;Osnovica7;PDV7;Oslobodjeno0;Gotovina;Kartica",\r
"Datum;Objekat;Sifra;Barkod;Naziv;JM;Kolicina;Iznos;PDV",\r
"Date: ____________ Responsible person: {0}",\r
"Date: the report was printed in the morning ({0} around {1} h), and the fiscal day at the top was not read. For the previous day's Z report the date must be corrected.",\r
"Date: the top ({0}) and bottom ({1}) of the report do not match. The date from the bottom was used; verification is required.",\r
"termination date",\r
"The dates are not in the format YYYY-MM-DD.",\r
"Holiday dates (YYYY-MM-DD, several separated by commas):",\r
"date of receipt",\r
"DAVIDOFF",\r
"A deactivated ENU cannot be changed.",\r
"December",\r
"December",\r
"December",\r
"Declaration {0} of {1} is already entered.",\r
"The declaration has been entered. VAT goes to PR-PDV field 20.",\r
"The declaration was not saved. The base and VAT need to be checked.",\r
"Details: Purchases · OA · PD.",\r
"Laundry detergent",\r
"Foreign currency cash desk",\r
"Foreign currency letters of credit",\r
"Foreign currency account",\r
"Share",\r
"also shared by",\r
"shared barcode",\r
"Shared barcode",\r
"Sharing was cancelled. The changes were not sent.",\r
"Sharing is not available on this device.",\r
"The parts of the program are determined by the company's licence.",\r
"Parts of the program (modules)",\r
"Parts outside the books",\r
"Child up to {0} years",\r
"Child up to 12 years",\r
"child with disabilities",\r
"The image dimensions cannot be read.",\r
"part of the day",\r
"Part of long-term financial investments maturing within one year",\r
"Portion of long-term loans maturing within one year",\r
"FZO share",\r
"Guest's part ({0} EUR)",\r
"Guest's part (balance)",\r
"part of the name",\r
"part of the name (e.g. milka 100)",\r
"Part of other long-term liabilities falling due within one year",\r
"Patient share",\r
"Patient share",\r
"Partner's part ({0} EUR)",\r
"Partner's part (balance)",\r
"Part of the overview was not compiled: {0}.",\r
"Part of the partner's bill is left for invoicing.",\r
"part of the goods (control stocktake)",\r
"part of the goods (control)",\r
"part of the goods: control only, no effect on the ledger and stock",\r
"Direct write-off of receivables",\r
"Direct submission",\r
"Direct submission: available after the technical instructions of the Police Administration are received.",\r
"director",\r
"Director, administrator, manager, cashier, shelf stocker, warehouse worker, assistant bookkeeper, driver, cleaner — with job descriptions. Existing positions are not duplicated (Director = Executive Director), empty fields are completed.",\r
"Discipline",\r
"Disciplinary measure — fine {0} % ({1}/{2})",\r
"Disciplinary proceedings",\r
"Disciplinary proceedings — {0} {1}",\r
"the disciplinary proceedings have not arrived yet",\r
"div",\r
"d",\r
"DJE",\r
"Children",\r
"Activity",\r
"Business activities",\r
"partially invoiced",\r
"partially returned",\r
"Work contract {0} {1}/{2}",\r
"Daily (changes shift every day)",\r
"Daily and periodical press",\r
"The daily backup is turned on/off in Settings → Protection.",\r
"Daily copy to that folder",\r
"Daily (cyclical) stocktake done by shop managers in the IRIS Manager program: counted against book stock, by store and day. View only — it is not entered into Stocktake. The full stocktake from Manager is on the \\"Stocktake by scanner\\" tab.",\r
"daily statement",\r
"daily account statement — entering payments to suppliers",\r
"Daily takings",\r
"Daily takings by store · takings overview with total check (export)",\r
"Daily overview",\r
"Daily turnover per unit — basis for KIF/EDI/KPP, PR-PDV and the trade ledger.",\r
"Domestic per diem — tax-free per day (EUR; 20 % of OVK, Decree Art. 7a — check the current OVK)",\r
"Per diems for a business trip (tax-free: days × per diem; enter days and meals)",\r
"log",\r
"Journal",\r
"JOURNAL",\r
"log ({0} lines)",\r
"Change log",\r
"The log is larger than {0} MB.",\r
"JOURNAL OF POSTINGS",\r
"Log of sent documents",\r
"The log is kept automatically and retained as long as the guest registration data.",\r
"Log attachment: an array of up to {0} lines of text (a line of up to {1} characters).",\r
"Entry log (Accounting Law, Art. 12–13)",\r
"log for the issuer: {0} B",\r
"Journal, general ledger (trial balance) and financial statements — 10 years (Accounting Act 84/25, Art. 14)",\r
"to",\r
"To",\r
"DO",\r
"To (empty = until further notice)",\r
"To (inclusive)",\r
"until {0}",\r
"Until {0}",\r
"until further notice",\r
"By when the guest leaves the room on the day of departure.",\r
"until manual review and confirmation.",\r
"To hour",\r
"until a new one is entered",\r
"Supplier codes",\r
"Supplier",\r
"supplier",\r
"Supplier",\r
"Supplier · PIB",\r
"Supplier (from the code list or manual entry)",\r
"Supplier (name or PIB) is required.",\r
"Supplier (code list or new)",\r
"Supplier (last invoice)",\r
"Supplier and code are required.",\r
"No supplier or customer has been selected.",\r
"The supplier has",\r
"The supplier has {0} disputed items ({1} EUR) that it demands but which are not in the records. The payment must not cover these items without a physical check.\\n\\nSave the payment?",\r
"The supplier has invoices in locked months ({0}). The flag is not changed.",\r
"The supplier does not exist.",\r
"supplier unknown",\r
"supplier with PIB {0} does not exist",\r
"Supplier PIB {0} is not in the code list (account {1}). The item was entered without a partner.",\r
"the supplier claims {0} EUR more than our invoice",\r
"the supplier is claiming it; we have no invoice or costing sheet",\r
"supplier: {0}",\r
"Supplier: {0}{1}{2}",\r
"suppliers",\r
"Supplier codes — {0}",\r
"Suppliers",\r
"suppliers",\r
"Suppliers - parent and subsidiary entities",\r
"Suppliers - other related entities",\r
"Suppliers — balance and debts",\r
"Suppliers (goods)",\r
"Suppliers and debts",\r
"Foreign suppliers",\r
"Domestic suppliers",\r
"Suppliers, ledger cards, IOS to supplier, debts",\r
"unposted to suppliers",\r
"supplier",\r
"Gains or losses from hedging instruments of net investment in a foreign operation",\r
"Gains or losses from cash flow hedging instruments",\r
"Gains or losses from the share in other comprehensive income or loss of associates",\r
"Gains from the sale of biological assets",\r
"Gains on sale of materials",\r
"Gains from sale of intangible assets, real estate, plant and equipment",\r
"Gains from the sale of equity interests and long-term securities",\r
"obtained together with the software code",\r
"Profit",\r
"Profit for the business year (income statement, before tax)",\r
"PROFIT BEFORE TAX",\r
"Profit or loss",\r
"Gain on sale of FA — {0}",\r
"Profit from discontinued operations",\r
"PROFIT FROM DISCONTINUED OPERATIONS, EXPENSES FROM PRIOR REPORTING PERIODS AND TRANSFER OF INCOME",\r
"Profit before tax",\r
"dobra voda",\r
"DOCUMENTS",\r
"Documents/",\r
"supplements on top of that",\r
"supplements: night",\r
"Add",\r
"Add promotion",\r
"Add item (name, code, barcode)",\r
"Add an item from the code list (name, code, barcode)",\r
"Add to the Manager's item",\r
"Add barcode",\r
"Add guest",\r
"Add to this item too",\r
"Add cash register",\r
"Add cash register and create code",\r
"Add payment method",\r
"Add property",\r
"Add rule",\r
"Add discount",\r
"Add an employee to the table",\r
"Add rooms",\r
"Add item",\r
"Add rate",\r
"Add to open calculation",\r
"Add service",\r
"Add room type",\r
"Add bank account",\r
"Annex PG 1 — carry-forward of business losses (5 years)",\r
"Night work supplement 22–06 (+40 % on top of the base)",\r
"Public holiday work supplement (+150 % on top of the base)",\r
"Sunday work supplement (+80 % on top of the base)",\r
"Add the seniority bonus difference ({0} EUR gross, {1} employees) to the calculation for {2} {3}?",\r
"Additional option: hours from the shift schedule (regular, night, holiday, overtime) are copied into the employee's items and calculated. When weeks are confirmed on the \\"Employee shifts\\" screen, only the confirmed ones are included.",\r
"Additional item (optional)",\r
"Additional",\r
"Additional module",\r
"An additional computer for a company that already works on another computer",\r
"Additional days",\r
"Extra beds",\r
"Additional",\r
"added",\r
"Rooms added: {0}{1}.",\r
"Added to the \\"Cigare\\" group: {0} items. Entering margins or prices comes next.",\r
"Added.",\r
"Add an item (name, code, barcode)",\r
"Adding multiple rooms",\r
"Assign a new ID to this device?\\n\\nThis is only needed when another computer has the same ID.",\r
"A new ID has been assigned: {0}",\r
"Assigned numbers:",\r
"Agreed price per night (EUR)",\r
"The agreed net was not kept for {0} employees because hours and base salary give a higher amount (hours and hour fund need to be checked): {1}{2}.",\r
"The agreed net was kept for {0} employees.",\r
"DOK",\r
"While the device is not paired with the server, devices can also exchange changes through this folder (Google Drive copies it between computers), more slowly and with more files in Drive. This is not needed after the device is paired.",\r
"dok. br",\r
"Evidence",\r
"Evidence (camera footage, X report, statements…)",\r
"Doctor of science (VIII)",\r
"payroll documents",\r
"Document",\r
"Document {0}{1}",\r
"The document has been marked as annulled.",\r
"The document has been passed on for sharing.",\r
"The document is printed twice on the page. The left copy was used.",\r
"The document has been cancelled.",\r
"The document has been reinstated.",\r
"The document must have at least one item with a name.",\r
"The document must have at least one item.",\r
"Voucher document",\r
"The document does not exist.",\r
"The document has no attachment.",\r
"The document has no items.",\r
"The document is not fiscalised.",\r
"payroll document",\r
"Employee document",\r
"The document is shared or downloaded; the recipient is chosen in the mail program.",\r
"The document is sent through system sharing; the recipient is chosen in the mail program.",\r
"payroll documents",\r
"Documents",\r
"Employee documents",\r
"Arrivals",\r
"Arrivals and overnight stays by country (TU-11)",\r
"Arrivals and overnight stays by country and month",\r
"Arrivals from today",\r
"Arrival",\r
"Arrival (first night)",\r
"arrival {0}",\r
"arrival today",\r
"Arrival today",\r
"The arrival has been registered.",\r
"Arrival delayed ({0})",\r
"Coming to work under the influence of alcohol or narcotics",\r
"Arrival from",\r
"Arrival from (hour)",\r
"DOMACE",\r
"Homemade",\r
"domestic",\r
"Domestic guest",\r
"Domestic guest (citizen of Montenegro)",\r
"Domestic: {0} arrivals, {1} overnight stays · foreign: {2} arrivals, {3} overnight stays.",\r
"Domain {0} has been entered. QR codes with this domain are printed on the main register (QR menu → Settings → own domain).",\r
"The domain was removed. QR codes lead to the IRIS menu address.",\r
"Donations above 3.5 % of total income (+ all to natural persons) + scientific research projects + sports federations above 5 % (a+b+c)",\r
"Brought forward (balance before the period)",\r
"Adopts the job classification act, rulebooks and other general acts of the employer.",\r
"DOO",\r
"DOOEL",\r
"Co-payment",\r
"Surcharges",\r
"co-payment list",\r
"Employer contr.",\r
"DOPRINOS",\r
"the contribution is not calculated (disabled on the Rates tab)",\r
"the contribution is calculated with the regular earnings return, not with a separate payroll",\r
"Contribution for persons with disabilities — average monthly earnings in Montenegro (EUR)",\r
"Contribution for persons with disabilities — average monthly earnings in Montenegro {0} (base for payrolls {1}) (EUR)",\r
"Contribution for persons with disabilities: 1 = calculated, 0 = not (newly established employer — first 24 months; association of persons with disabilities)",\r
"PIO contribution of the contractor",\r
"Contribution for not employing persons with disabilities:",\r
"DOPRINOSA",\r
"contributions",\r
"Contributions",\r
"DOPRINOSI",\r
"Employer contributions",\r
"Employer contributions + surtax",\r
"Employee contributions",\r
"contributions on contract for work",\r
"employer contributions",\r
"employee contributions",\r
"Completing company details",\r
"Complete",\r
"Items of existing documents supplemented: {0}.",\r
"Supplementary work",\r
"Breakfast, half board, full board.",\r
"The current and new codes are required and must differ.",\r
"Previous code",\r
"The previous code {0} has been taken in the meantime.",\r
"Due dates",\r
"Due dates and payment of liabilities",\r
"DUE DATES OF LIABILITIES",\r
"Due in the next 7 days",\r
"VAT DUE FOR PAYMENT (24−27)",\r
"VAT DUE for payment (28)",\r
"Overdue",\r
"OVERDUE",\r
"Due (up to 30 days)",\r
"overdue:",\r
"Deliver to (one item per line)",\r
"Delivery: in person at the Employer's premises against a signature, to the residence address or to the employee's e-address from the Employer's records ({0}). If delivery cannot be made, a written note is drawn up and the act is posted on the notice board — delivery is considered made after 8 days have passed.",\r
"A version is available",\r
"Version {0} is available.",\r
"allow when short of people",\r
"Allow access",\r
"allowed",\r
"Allowed values: units of measure, VAT rates, barcode types and location types.",\r
"Allowed on Sundays",\r
"DR",\r
"Dragomir Dačević",\r
"DRI, audit of the final budget account of the Municipality of Nikšić for 2022 (cites the surtax decision)",\r
"DRI, audit of the final budget account of the Municipality of Petnjica for 2023 (cites the surtax decision)",\r
"DRI, audit of the final budget account of the Municipality of Rožaje for 2022 (cites the surtax decision)",\r
"DRINA",\r
"narcotic",\r
"Narcotic",\r
"Second",\r
"other company",\r
"Another company",\r
"another company (PIB {0})",\r
"Other document",\r
"Another costing sheet of the same invoice",\r
"OTHER RECEIVABLES",\r
"second shift",\r
"Second shift",\r
"differently",\r
"Other unlisted liabilities — salary deductions",\r
"OTHER LIABILITIES",\r
"Other types",\r
"another key (does not belong to the company, not read)",\r
"another customer",\r
"OTHER OPERATING INCOME",\r
"Other income",\r
"the other computer did not apply this computer's change",\r
"other",\r
"Other",\r
"The company prepares and submits: {0}.{1}",\r
"the company is classified as a {0} LEGAL ENTITY.",\r
"Country",\r
"Country (ISO-3)",\r
"Country of issue",\r
"Country of document issue",\r
"country that issued the document",\r
"The customer's country is entered as a three-letter ISO 3166 code (e.g. MNE, SRB, DEU).",\r
"country of birth",\r
"Country of birth",\r
"Citizenship",\r
"citizenship",\r
"Citizenship",\r
"public",\r
"public — non-working for everyone",\r
"State capital",\r
"Public holidays",\r
"state holiday",\r
"DUG",\r
"debt to suppliers (EUR)",\r
"Debt to supplier {0} (opening balance)",\r
"The customer's debt is reduced immediately. The amount is split by the receipt's rates.",\r
"debt of PARTNER stores",\r
"DUGA",\r
"button",\r
"dugme malo",\r
"button: {0}",\r
"LONG-TERM LIABILITIES",\r
"LONG-TERM FINANCIAL INVESTMENTS",\r
"Long-term loans to parent, subsidiary and other related entities",\r
"Long-term loans abroad",\r
"Long-term domestic loans",\r
"debit bal. 331–337",\r
"Debit",\r
"DUNHILL",\r
"Dupl.",\r
"Duplicate items",\r
"duplicates in the file",\r
"duplicate",\r
"duplicates (quantity is summed)",\r
"duplicates skipped",\r
"DUPLICATES (recognised and skipped)",\r
"DUVAN",\r
"Two main computers publish two different databases and produce duplicate document numbers.",\r
"Two computers have the main role: \\"{0}\\" also publishes the database. Only one computer may be the main one; on the other, the secondary role must be selected (Connection → \\"Role of this computer\\"). Until then, this computer does not publish the database automatically.",\r
"Double room",\r
"dvopek; prezla; mrvice",\r
"not present",\r
"Employee e-mail address (delivery of acts by e-mail, Art. 31 para. 1 point 2a)",\r
"Accountant's e-mail",\r
"Accountant's e-mail (for sending forms)",\r
"E-mail",\r
"E. PREPAID EXPENSES AND ACCRUED INCOME",\r
"E. SHORT-TERM PROVISIONS AND SHORT-TERM LIABILITIES (128+129)",\r
"EAN-13",\r
"EAN-8",\r
"EC",\r
"ECDSA",\r
"EDI",\r
"EDI — Record of daily reports",\r
"Eff. purch.",\r
"Exotic fruit",\r
"The entry screen is not open.",\r
"screen: {0}",\r
"Electricity",\r
"ELECTRONIC JOURNAL — ISSUED INVOICES",\r
"Email",\r
"Share premium",\r
"English",\r
"Enter",\r
"ENU",\r
"ENU {0} is registered on another computer ({1}).",\r
"ENU {0} is registered on another computer ({1}). This computer needs its own ENU (Settings → Fiscalization).",\r
"ENU {0} is registered with another cash register program; a new ENU is needed for invoices",\r
"ENU registered. Code: {0}",\r
"The ENU must be separate, only for invoices",\r
"err",\r
"Erste Bank",\r
"Escape",\r
"EUR",\r
"EUR — included in this month's IOPPD XML (\\"Service contract\\" tab), not counted among employees.",\r
"EUR — included in this month's IOPPD XML (\\"Rent\\" tab).",\r
"EUR · net:",\r
"EUR · remainder",\r
"EUR · VAT liability without an invoice:",\r
"EUR · surtax",\r
"EUR · receipts",\r
"EUR · payment deadlines",\r
"EUR · balance",\r
"EUR · decrease (red cancellation):",\r
"EUR · total seniority",\r
"EUR · trade ledger:",\r
"EUR · total company cost",\r
"EUR · paid",\r
"EUR · paid for the month:",\r
"EUR (Art. 106 of the Labour Law — 1/3 of earnings; for mandatory maintenance up to 1/2).",\r
"EUR (red cancellation),",\r
"EUR (purchase). Norm",\r
"EUR excl. VAT) to the lines of the costing sheet. Purchase price per unit = (net invoice − discount + allocated cost) / quantity; deductible VAT does not enter the purchase price. Selling prices are not changed; the purchase price and RUC are changed.",\r
"EUR is in the purchase price (column \\"Cost + rel. costs\\") and in the RUC of the costing sheet. Selling prices were not changed.",\r
"EUR to the contractor's municipality account · payout to contractors",\r
"EUR is not distributed by payment method, so the cash payment column for those days may be inaccurate. The split needs to be completed on the Takings screen.",\r
"EUR free",\r
"EUR: VAT is calculated on the difference (check with the accountant).",\r
"EUR. Those takings are not in the payment columns but in the list \\"",\r
"EUR) — click \\"Link automatically\\" or link manually through the invoice. Unallocated = prepayment or a payment without a matching open invoice.",\r
"EUR) to the lessor's municipality account:",\r
"EUR) are allocated to lines in proportion to value.",\r
"EUR): this is the book balance",\r
"EUR). The supplier claims them, and the records do not cover them.",\r
"EUR). The balance is the value of goods and cannot be negative (Art. 7); the cause is usually a missing opening balance or a costing sheet that was not entered.",\r
"EVA",\r
"EV record: receipts and issues at wholesale prices excl. VAT.",\r
"Trade record EV (wholesale)",\r
"IMPORT RECORDS (customs declarations)",\r
"Records daily takings, cash register X reports and deposits of takings into the account.",\r
"is recorded exactly once",\r
"Recorded sales",\r
"recorded",\r
"recorded (without posting)",\r
"Excel",\r
"Excel {0}/{1}: {2}",\r
"Excel saved ({0} costing sheets): {1}",\r
"The Excel file has no sheets.",\r
"Expand-Archive -LiteralPath '{0}' -DestinationPath '{1}' -Force",\r
"F. ACCRUED EXPENSES AND DEFERRED INCOME",\r
"F. TOTAL ASSETS (001+002+024+025+045)",\r
"file",\r
"File",\r
"File {0} has been saved. Import on the register: Settings → Items and prices.",\r
"The {0} file provided by the IRIS CORVINA publisher (e.g. on a USB drive)",\r
"File {0} does not exist.",\r
"File {0} is not readable at the moment. Reading will be retried.",\r
"The item database file is empty.",\r
"The database file for Manager has been saved: {0} ({1} MB).",\r
"file and proposal",\r
"The file has a header but no data rows.",\r
"The price change file belongs to a different company (PIB {0}).",\r
"The changes file was not written to the folder: {0}",\r
"The file was exported for another company.",\r
"The file has already been imported into this opening balance.",\r
"The file has already been imported.",\r
"the file is larger than {0} MB and is not sent to the server.",\r
"The licence file issued by IRIS CORVINA (e.g. on a USB drive) is loaded here. Without a licence, the program works as the \\"Books\\" package.",\r
"The file has no Date column. A from–to period needs to be selected for the whole file.",\r
"The file has no Outlet column. An outlet needs to be selected.",\r
"the file has no control totals.",\r
"The file has no \\"Artikli\\" sheet.",\r
"The file has no sheet.",\r
"The file has no export data. Protection against an old file is not possible.",\r
"The file is not an item database (format \\"iris-sifarnik\\").",\r
"The file is not readable (an Excel .xlsx is expected).",\r
"The file is not readable (an item database file, .json, is expected).",\r
"The file is not readable (JSON is expected).",\r
"The file is not a price change file (the format \\"kasa-cijene\\").",\r
"The file is not a cash register status file (format \\"{0}\\").",\r
"The file is not a cash register closing file (format \\"kasa-zakljuci\\").",\r
"The file is not a CInMED report on maximum prices (no header with the columns ATC and INN).",\r
"The file is not an IRIS CORVINA licence (not valid JSON).",\r
"The file is not an IRIS CORVINA licence.",\r
"The file cannot be read: {0}. A PDF scan (without text) is entered by copying the table into the field below or as an Excel file from the supplier.",\r
"The file is not a cash register data package (the format \\"kasa-paket\\" is expected).",\r
"The file of this instruction is no longer on this computer. The import must be sent again from the file.",\r
"A file with one period has sales on the last day of the period; the comparison is then made by import.",\r
"The file cannot be read: {0}",\r
"The file does not differ from the code list. There are no changes to write.",\r
"The file in the instruction is not an item database.",\r
"XLSX file from the CInMED site (the determined maximum price is the wholesale price, excl. VAT). A new import replaces the previous one; linked medicines are linked to the same row of the new report and get the new price. Max retail ≈ wholesale ×",\r
"The file for printing does not exist: {0}",\r
"The closing file belongs to another company (PIB {0}).",\r
"cash register closings file",\r
"The closing file has no cash register code (ENU).",\r
"file",\r
"with a database file",\r
"files",\r
"files {0}, applied {1}{2}{3}",\r
"files {0}, shifts {1}: new takings {2}, changed {3}{4}{5}{6}",\r
"Files waiting to be sent",\r
"Files waiting to be sent ({0}) are not sent to the server.",\r
"Manager files cannot be read: {0}",\r
"FAKT",\r
"Inv.",\r
"Factoring",\r
"invoice",\r
"Invoice",\r
"INVOICE",\r
"Invoice (number)",\r
"Invoice (draft)",\r
"Invoice (cancelled)",\r
"Invoice {0}",\r
"Invoice {0} — {1}",\r
"invoice without an outlet",\r
"Invoice excl. VAT",\r
"invoices today ·",\r
"FZO invoice",\r
"The invoice has a credit note. Deletion is not possible.",\r
"The invoice has items with 0 % VAT without a legal basis. Select a basis (zero rate, Art. 25, or exemption, Art. 26/27 of the VAT Act).",\r
"Invoice from delivery notes (",\r
"Invoice from delivery notes: the goods were discharged by the delivery note (stock and trade ledger).",\r
"Invoice from a delivery note",\r
"Invoice from this quote",\r
"Invoice from an equipment issue form: the goods left stock by the issue form.",\r
"The invoice has been fiscalized. FIK: {0}{1}",\r
"The invoice has been fiscalized. Its content cannot be changed.",\r
"The invoice has been cancelled.",\r
"Invoice imported: {0} ({1} items, {2} EUR). Next: enter margins per item.",\r
"Invoice imported: {0} ({1} items, {2} EUR).{3}",\r
"Invoice imported. PDF was not created: {0}",\r
"The invoice has already been fiscalized.",\r
"An invoice being fiscalized is issued today ({0}). The issue date must be today's date; an earlier date is entered in \\"Date of supply\\".",\r
"The invoice must have a customer.",\r
"Invoice to which the credit relates",\r
"The invoice the credit note refers to has not been fiscalised (no IKOF).",\r
"The invoice does not exist or has not been issued.",\r
"The invoice does not exist.",\r
"The invoice has no customer.",\r
"The invoice has no lines (items is empty) and no summary tax data (sameTaxes) — a costing sheet cannot be created.",\r
"The invoice has no lines with rate {0} %.",\r
"The invoice has no line items.",\r
"The invoice is not fiscalized: the PDF bears the mark \\"Invoice draft — not a fiscal receipt\\".",\r
"Invoice not received: the amount is an estimate, posted to account 494 until the invoice is received; it does not enter the purchase ledger or PR-PDV",\r
"invoices this month ·",\r
"invoices per supplier,",\r
"Invoice received",\r
"Invoice incl. VAT",\r
"An invoice from a foreign supplier has no domestic VAT: invoice items go in at 0 % (the costing sheet keeps the selling rate). Import VAT is entered from the customs declaration (Forms → Imports and foreign services) and goes into PR-PDV field 20.",\r
"Invoice reduced by this credit",\r
"Invoice entered manually: {0}, {1} EUR (costing sheet {2}).",\r
"Invoice already exists",\r
"Invoice for",\r
"Invoice for the estimated cost",\r
"Invoice for goods from an equipment issue form",\r
"Invoice for a dependent cost",\r
"invoices",\r
"Invoices",\r
"FAKTURE",\r
"supplier invoices + equipment/costs + dependent",\r
"Invoices scanned by the shops with phones or in the IRIS Manager program. The costing sheet and document number are created by the main computer — which is why the numbering is continuous throughout the year.",\r
"Invoices scanned by phone — awaiting processing on the computer",\r
"Overdue invoices with default interest (",\r
"Invoices: {0}.",\r
"Invoiced",\r
"{0} end-of-day reports are missing",\r
"missing",\r
"Missing",\r
"1 end-of-day report is missing",\r
"Pharmaceutical form",\r
"Pharmaceutical data of items (dispensing mode, list, maximum price).",\r
"Pharmaceutical data of cash register items (Pharmacy mode, Cash register 1.7): the code list of medicines and withdrawn batches reach the registers with the price list; prescriptions issued at the registers arrive here with the price exchange. · Medicines:",\r
"Pharmaceutical data of item {0} has been removed.",\r
"pharmaceutical data not entered",\r
"FAST",\r
"February",\r
"February",\r
"February",\r
"The feed has no valid package checksum (sha256) — the update was refused.",\r
"The feed has no \\"verzija\\" and \\"url\\" fields.",\r
"The feed is not valid JSON.",\r
"The feed carries an invalid version label \\"{0}\\" — the update was refused.",\r
"FIIT",\r
"FIK",\r
"Finance",\r
"Finance — general ledger",\r
"Finance: vouchers and general ledger",\r
"Financial credit notes excl. VAT",\r
"Financial statements",\r
"Financial statements → Income statement",\r
"Financial statements → PD — corporate income tax",\r
"Financial statements and corporate income tax",\r
"Financial statements and corporate income tax return for {0}",\r
"The financial statements are subject to statutory audit (Audit Law, Official Gazette of Montenegro 84/25, Art. 35).",\r
"FINANCIAL INCOME",\r
"Financial income from parent and subsidiary entities",\r
"Financial income from other related entities",\r
"FINANCIAL EXPENSES",\r
"Financial expenses from relations with parent and subsidiary entities",\r
"Financial expenses from relations with other related entities",\r
"Financial accounting (vouchers, general ledger, trial balance) is kept on the computer. Not available on the phone.",\r
"Financial accounting and taxes",\r
"company",\r
"Company",\r
"Company · PIB",\r
"The company \\"{0}\\" was replaced with the imported database.\\n\\nThe previous database was saved to:\\n{1}",\r
"The company \\"{0}\\" already exists on this computer.",\r
"The company \\"{0}\\" already exists on this device. Replace it with the imported database?\\n\\nOK: replace with the imported database (the current database is first saved as \\"{1}\\").\\nCancel: no import.",\r
"the company has {0} active business units",\r
"The company has its own import (customs declarations)",\r
"The company has a permanent licence — all parts of the program are included.",\r
"The company has a hospitality outlet (VAT rules for a hospitality outlet)",\r
"company disabled on the server",\r
"The company is disabled on the server (e.g. licence). Files wait on this device and are sent when the administrator enables the company again (checked every 15 minutes). Pairing again is not needed.",\r
"The company has been separated. To exchange data, it needs to be paired with the code for this company.",\r
"the company was changed",\r
"The company was changed while snapshot \\"{0}\\" was being read. The download was interrupted and will be repeated when that company is opened.",\r
"the company was changed after the entry",\r
"The company was changed during receipt from the Manager. The receipt was interrupted.",\r
"The company was changed during the price exchange. The price list was not published.",\r
"The company was changed during the price exchange. The exchange was interrupted.",\r
"The company was changed while the overview was being compiled.",\r
"The company is ready for work. The other settings are not required and can be edited later.",\r
"The company is in the VAT system",\r
"The company is paired with the server: only backups are saved to this folder, without exchange files.",\r
"The company was closed before the invoice was processed.",\r
"The company does not exist in the Register of Taxpayers.",\r
"The company does not have Manager yet.",\r
"The company has no outlets.",\r
"The company has no business unit. A business unit is added with the \\"+ Add business unit\\" button (or Settings → Stores).",\r
"The company has no PIB (Settings → Company).",\r
"The company has no PIB (Settings → Company). Cash registers are kept locally.",\r
"The company has no PIB (Settings → Company). The Manager recognises the company by its PIB.",\r
"The company is not active in the Register of Taxpayers.",\r
"The company is not among this computer's companies on the server. The Manager connects via the database file.",\r
"The company is not among this device's companies on the server. Cash registers are kept locally.",\r
"The company is not open.",\r
"The company is not connected to the server",\r
"The company is not in the VAT system, but VAT is shown on the receipt.",\r
"The company is not paired with the server. Cash registers are kept locally; the cash register pairing code is issued by the administrator.",\r
"The company is not paired with the server. Transitional mode is not applicable.",\r
"the company has been changed",\r
"The company works without a licence (\\"Books\\" package): accounting is always included; Cash register and Manager are turned on automatically when the company has cash register or Manager data, or manually below.",\r
"The company works by a fixed weekly pattern: one arranged week is copied onto the other days",\r
"A company with that name already exists.",\r
"The company does not work at all that day: non-working day for everyone (compensation for all)",\r
"The company already has a main computer, so an empty database is not created (it would give wrong document numbers). This computer connects to the server with the code for that company (button below), with the main computer's database downloaded automatically, or a copy of the main computer's database (.knj.db) is imported.",\r
"The company already has Manager",\r
"Company for",\r
"Company, users, backup and year archive",\r
"Fiscalisation",\r
"Fiscalization of sales invoices is not enabled, so issuing an invoice is not possible (Fiscalization Act, Art. 10). Until it is enabled, a quote (pro forma) is sent to the customer, and the invoice is issued through a registered cash register or fiscal software. Missing: {0}.",\r
"Fiscalization of sales invoices is not enabled, so the invoice cannot be issued (Fiscalization Act, Art. 10). The invoice remains a draft; a quote (pro forma) is sent to the customer, and the receipt is issued through a registered cash register or fiscal software.",\r
"Fiscalization is turned off.",\r
"Fiscalization is turned on.",\r
"Fiscalization is not ready. Missing: {0}",\r
"Fiscalization works only on a computer with a certificate (Windows application). On the phone, an invoice can be prepared and saved, and it is fiscalized on the computer.",\r
"Fiscalization is configured in the Windows application (on the computer with the certificate).",\r
"Fiscalization: waiting",\r
"Fiscalization: error",\r
"A fiscalized invoice is not deleted. Corrections are made by cancellation.",\r
"A fiscalized invoice cannot be changed. Corrections are made by a credit note or a cancellation.",\r
"fiscalised",\r
"Fiscalize",\r
"Fiscalize invoices when issuing",\r
"Only an invoice is fiscalized, not a quote.",\r
"Fiscal number",\r
"Fiscal receipt number: {0}",\r
"Fiscal documents at checkout",\r
"Fiscal data of the invoice",\r
"The fiscal data has been recorded.",\r
"Fiscal receipt",\r
"The fiscal service is not responding (timed out).",\r
"Fiscal status",\r
"Fiscal journal (for tax inspection)",\r
"Fiscal",\r
"natural person",\r
"Natural person",\r
"An individual from whom the company leases — how it is entered in the return",\r
"of an individual",\r
"The folder is set up and verified: {0}. In the folder: {1} {2}{3}",\r
"The folder exists, but reading from it is not possible.",\r
"exchange folder",\r
"The exchange folder is not available: {0}",\r
"Folder in the phone's Documents",\r
"The exchange folder has not been selected.",\r
"The exchange folder is currently unavailable (e.g. the Google Drive disk is not connected). The file is waiting.",\r
"Backup folder (Google Drive)",\r
"The backup folder (Google Drive) has not been selected (Connection → \\"Backup\\").",\r
"The backup folder (Google Drive) is not set (Connection → \\"Backup\\").",\r
"Backup folder: {0}",\r
"Folder:",\r
"Labour fund — employer (%)",\r
"employee's fund",\r
"The employee's working-time fund is 0 (absences cover the whole month), so all hours are overtime. The absences need to be checked.",\r
"Hour fund (working days × 8 =",\r
"The hour fund has been set to {0}. Salaries are recalculated with the \\"Calculate all\\" button.",\r
"Hour fund of the month",\r
"The hour fund applies to regular work of all employees. After a change, the amounts are recalculated with the \\"Calculate all\\" button.",\r
"Health Insurance Fund (FZO)",\r
"The .xls format (old Excel) is not supported. Save the file in Excel as .xlsx or .csv.",\r
"Format: 3 digits bank + 13 digits account + 2 check digits (18 in total)",\r
"formula",\r
"Photos",\r
"FZO",\r
"FZO app",\r
"FZO manual",\r
"FZO service",\r
"G. TOTAL LIABILITIES AND EQUITY (101+117+125+126+127+143)",\r
"GAULOISES",\r
"Where",\r
"GET",\r
"GHIJKLMNOPQRSTUVWXYZ",\r
"GK",\r
"general ledger",\r
"General ledger",\r
"general ledger {0}",\r
"The general ledger must give the same result as the tax books from the same documents. Mark ❌: vouchers and books are not reconciled (reason in the Note column).",\r
"main",\r
"Main — costing sheets and document numbers are created here",\r
"glavni grad",\r
"The main computer is the one where costing sheets and document numbers are created; a company has exactly one.",\r
"The main computer (\\"{0}\\") is running an older version of the program. Its database is not downloaded here until it is updated (on the main one: Connection → Update → Check → Update). Documents continue to arrive normally, and payments and statements entered here remain saved.",\r
"MAIN computer (processing — assigns numbers, publishes the database)",\r
"The main computer publishes",\r
"The main computer performs these actions itself. {0}",\r
"Only the import of the item database is sent to the main computer. Importing the code list from Excel is done on the company's main computer.",\r
"GLO",\r
"GO",\r
"yrs",\r
"yrs (",\r
"yrs of seniority on 01.",\r
"year",\r
"Year",\r
"Year {0}",\r
"Year {0} has already been closed (voucher {1}). Closing again is possible after the existing closing is cancelled.",\r
"The year {0} has been closed.",\r
"Year {0} is closed. Entry is not possible.",\r
"Year {0} has not been closed. The closing must be made first.",\r
"year {0}.",\r
"year {0} — not an official income statement; positions without data are marked",\r
"The year of the date ({0}) differs from the other pages. Verification is required.",\r
"The year of the date was aligned with the other pages ({0} → {1}).",\r
"The year has been closed (voucher",\r
"the year has not been closed",\r
"the year has not been closed, so its",\r
"of the year (average number of employees, total revenue, total assets). When the program has no books for",\r
"The years {0} have not been closed. Their result ({1}) was added to item {2} and the tax ({3}) to 141. Close and open those years in order (Year-end closing tab).",\r
"the years have not been closed",\r
"the years have not been closed, so their",\r
"annual (sum in the calendar year)",\r
"annually or as a one-off",\r
"Annual payroll calculations (summaries, IOPPD) — permanently (Accounting Act 84/25, Art. 14)",\r
"Annual leave",\r
"Annual leave is taken in one or two parts (at the Employee's request and in more parts if the work process allows); the first part lasts at least {0} working days without interruption during the year, and the remainder no later than {1} of the following year ({2}). The Employer adopts a leave plan by {3} after consulting the Employee and delivers the leave decision no later than {4} days before the leave begins ({5} and {6}). During annual leave the Employee is entitled to salary compensation in the amount of the salary he or she would have earned had he or she worked ({7}).",\r
"Annual leave is taken in one or two parts, and at the employee's request in several parts if the work process allows. The first part lasts at least {0} working days uninterrupted during the calendar year, and the remainder is used no later than {1} of the following year ({2}). An employee who has not used leave or interrupted it because of temporary incapacity for work or child care uses it on return, no later than {3} months after the end of the year in which the right was acquired; because of maternity, paternity or parental leave — within {4} months of returning to work.",\r
"Annual leave is determined in working days according to a {0}-day working week ({1}); non-working holidays, paid absence and temporary incapacity for work are not counted in leave days. The base is {2} working days ({3}); an employee under 18 is entitled to at least {4} working days ({5}), a person with a disability to at least {6} ({7}), and an employee working reduced hours to {8} working days.",\r
"Annual leave",\r
"ANNUAL LEAVE {0} — ENTITLEMENT AND USED",\r
"Annual stocktake as of 31.12.{0} (before it, reconciliation with partners — IOS)",\r
"Goodwill",\r
"Google Drive on the phone has no folder of its own, so the link is made with the application",\r
"Google Drive for desktop was not found. Install Google Drive or select another folder that is copied outside the computer.",\r
"GORA",\r
"Fuel",\r
"Fuel — passenger car",\r
"guest",\r
"Guest",\r
"Guest — {0} {1}",\r
"guest is awaiting",\r
"The guest arrived after all",\r
"The guest has been deleted.",\r
"The guest has been checked out.{0}",\r
"The guest has been moved.",\r
"The guest has been saved.",\r
"No-show",\r
"guest departs today",\r
"guest in room",\r
"Guest in room",\r
"guests are awaiting",\r
"Guests",\r
"guests have not been entered",\r
"Guests have not been entered.",\r
"guests in house",\r
"Finished products",\r
"FINISHED PRODUCTS",\r
"cash",\r
"Cash",\r
"CASH",\r
"cash · cards",\r
"Cash · cards",\r
"Cash · cards · bank transfer",\r
"Cash (EUR)",\r
"Cash {0} + card {1} = {2}, but the total turnover is {3}.",\r
"Cash + card = {0} (total turnover: {1})",\r
"Cash + card does not match the total turnover. Verification against the image is required.",\r
"cash + cards ({0}) are greater than sales ({1})",\r
"cash + cards ≠ total ({0})",\r
"CASH AND CASH EQUIVALENTS",\r
"Cash and card",\r
"Cash takings without a recorded deposit, deposit deadline passed: {0} — {1} takings, {2} EUR.",\r
"Cash with this partner within ±30 days: {0} EUR (together with this payment). Paying and receiving cash of {1} EUR or more, including through several related transactions, is not permitted (Act on Prevention of Money Laundering and Terrorist Financing; penalty for a legal entity 5,000–20,000 EUR).",\r
"Done",\r
"City",\r
"city (municipality) of the registered office",\r
"City (registered seat)",\r
"Registered office town / municipality",\r
"city not entered: Settings → Company",\r
"The seat city was not recognised as a municipality of Montenegro (e.g. Podgorica, Nikšić, Budva). Without a municipality the reference number for paying tax and contributions is not correct.",\r
"Buildings",\r
"Buildings held for sale",\r
"The limit has been exceeded. Reduce the deductions or carry the remainder over to the next month.",\r
"Free items (e.g. 2+1)",\r
"Free pieces",\r
"error",\r
"greška",\r
"Error",\r
"error · waiting {0}",\r
"The error was reported to the publisher (with the screen, the latest actions and the program version).",\r
"An error the program did not record is reported on the Support and requests screen.",\r
"Error reading the electronic signature.",\r
"Error reading the signature element.",\r
"Export error: {0}",\r
"startup error: {0}",\r
"Server error.",\r
"Display error: {0}",\r
"Display error. The entered data has been saved.",\r
"Connection error with the SMTP server (connection security or port).",\r
"error: {0}",\r
"Error: {0}",\r
"Errors",\r
"Errors (rows that are not imported)",\r
"group",\r
"Group",\r
"GROUP",\r
"group {0}",\r
"GROUP {0} — declining balance {1} %",\r
"GROUP I — total (proportional, 2.5 %)",\r
"Group I proportionally per asset; groups II–V on a declining basis at group level (cumulatively over the years).",\r
"The group is empty. \\"Detect cigarettes in the catalogue\\" suggests items by brand; the suggestion is confirmed manually.",\r
"A group can have at most one parent group.",\r
"The group was not found in the group code list.",\r
"Account group, account",\r
"The group is in use.",\r
"Group for selected",\r
"Groups (categories)",\r
"Cash register groups",\r
"Groups that the cash register does not keep do not go into the package: {0}{1}. For such goods, choose items.",\r
"bulk entry",\r
"bulk margin change on costing sheets",\r
"group",\r
"Losses on sale of materials",\r
"Losses from the sale of equity interests and securities",\r
"Losses from disposal and sale of biological assets",\r
"Losses from disposal and sale of intangible assets, real estate, plant and equipment",\r
"Loss",\r
"LOSS",\r
"Loss and profit from the sale of materials",\r
"Loss from previous years (up to the amount of taxable profit, PG 1)",\r
"A loss from previous years enters line 40 up to the amount of taxable profit. The program takes it from saved returns (line 39); for years before the program, the amount is entered manually.",\r
"Loss on sale of FA",\r
"Loss from discontinued operations",\r
"LOSS FROM DISCONTINUED OPERATIONS, EXPENSES FROM PRIOR REPORTING PERIODS AND TRANSFER OF EXPENSES",\r
"Loss for the business year",\r
"Loss from previous years",\r
"Loss of the current year",\r
"Gusinje",\r
"h",\r
"h · Sunday worked",\r
"h · holiday",\r
"h enter the shift-based payroll calculation.",\r
"H:TAKSA",\r
"h) · night",\r
"h), once, only for the cash register",\r
"h), for",\r
"happy hour = promotion with hours",\r
"Securities - cash equivalents",\r
"Securities held to maturity",\r
"Securities held to maturity - part maturing within one year",\r
"Securities held for trading",\r
"HEETS",\r
"household chemicals",\r
"Chemicals",\r
"HERCEG",\r
"Herceg Novi",\r
"hygiene",\r
"Cleaner",\r
"Hipotekarna banka",\r
"urgent ·",\r
"Urgency",\r
"Bread",\r
"Bread, bakery products and cakes",\r
"hljeb,mlijek,štamp,stamp,novin",\r
"hljeb; hleb; kruh; vekna; baget; somun; lepinja",\r
"Hostel",\r
"Hotel",\r
"Hotel business (hotels, apartments, rooms)",\r
"Food with accommodation",\r
"Baby food",\r
"hrana za pse; hrana za macke; hrana za ptice; hrana za ribice; granule za pse; djubrivo; sjeme",\r
"Animal feed, seeds, fertilizer",\r
"hsl({0}, {1}%, {2}%)",\r
"http",\r
"HTTP {0}",\r
"HTTP {0} - {1}",\r
"https",\r
"https://… or http://…:8080",\r
"Humanitarian aid",\r
"and",\r
"I",\r
"I — primary education",\r
"I (2.5%) — buildings",\r
"and {0} payments posted from them ({1} EUR)",\r
"and application update",\r
"and is waiting for installation.",\r
"and {0} more",\r
"I SHORT-TERM PROVISIONS",\r
"and negative costing sheets",\r
"started month",\r
"and are not sent to the database, so invoices are fiscalized only here. The certificate from the ID card (MUP) is used to log in to the portal, not for this purpose.",\r
"I INTANGIBLE ASSETS (004 to 007)",\r
"and newer). View only: nothing is sent to the cash register and its operation is not interrupted.",\r
"and outlet",\r
"and applies the entered discount (%). Customers are the same code list as for sales invoices (Customers). ·",\r
"and the rulebook: up to",\r
"and will be applied at the next start.",\r
"and invoices of other companies",\r
"and the schedule is locked. It can be changed after the confirmation is cancelled (\\"Month by store\\" tab).",\r
"and resolved",\r
"and scan the next",\r
"Shift I",\r
"and in this return",\r
"and enter its number (ID) below. If there is no response within",\r
"I-RAČ",\r
"I. LONG-TERM PROVISIONS (119 to 121)",\r
"I. SHARE CAPITAL",\r
"I. OPERATING RESULT (201+202+203+204-208-211-217-220)",\r
"I. INVENTORIES (027 to 030)",\r
"ID",\r
"Employee ID for the written warning (Payroll → Employees, column ID):",\r
"Device ID:",\r
"included are a copy of the database (read-only), statements, trial balance and journal, I-RAČ / U-RAČ by month, trade ledgers of all stores and payroll calculations, together with SADRZAJ.txt with SHA-256 fingerprints. Backup rotation does not delete the archive.",\r
"iframe",\r
"not present",\r
"IHDR",\r
"II",\r
"II — basic vocational education",\r
"II SHORT-TERM LIABILITIES (130 to 137)",\r
"II PROPERTY, PLANT, EQUIPMENT AND BIOLOGICAL ASSETS (009+010+011+015)",\r
"Shift II",\r
"II. LONG-TERM LIABILITIES (123+124)",\r
"II. FINANCIAL RESULT (222+226+230+234-237)",\r
"II. Capital gains and losses",\r
"II. SHORT-TERM RECEIVABLES (032 to 035)",\r
"II. UNPAID SUBSCRIBED CAPITAL",\r
"IIC",\r
"IIC {0}… — {1}",\r
"IICPotpis",\r
"IICRefOriginala",\r
"III",\r
"III — secondary vocational education (KV)",\r
"III LONG-TERM FINANCIAL INVESTMENTS AND LONG-TERM RECEIVABLES (017 to 023)",\r
"Shift III",\r
"III. SHARE PREMIUM",\r
"III. SHORT-TERM FINANCIAL INVESTMENTS (040 to 042)",\r
"III. RESULT FROM ORDINARY OPERATIONS BEFORE TAX (221+241)",\r
"III. Adjustment of expenses",\r
"IKOF",\r
"IKOF {0}",\r
"IKOF {0}{1}",\r
"or",\r
"or MARGIN %",\r
"or link to an item…",\r
"has",\r
"IMAGENAME eq OUTLOOK.EXE",\r
"name",\r
"First name",\r
"Name",\r
"The folder name is required (e.g. KnjigSync).",\r
"full name",\r
"First and last name",\r
"First and last name\\nCompany name\\nPhone",\r
"Recipient's first and last name / company name",\r
"director's first and last name",\r
"User name (who scans)",\r
"Sender name",\r
"employee name",\r
"Name, JMBG, address, position, salary and length of service are changed in Payroll → Employees.",\r
"img",\r
"info",\r
"Informational view: costs marked \\"into purchase cost\\" (",\r
"for information: takings entered by OCR often lack \\"total excl. VAT\\"; the voucher takes incl. VAT − VAT",\r
"INN",\r
"INN (generic name)",\r
"abroad €/day",\r
"Abroad: the prescribed per diem of that country (EUR per day); empty = Montenegro",\r
"input",\r
"INPUT",\r
"Installation from within the program is not available on this device.",\r
"It is installed over the existing version; the data remains saved.",\r
"Install",\r
"Install now",\r
"Installed (Setup)",\r
"The latest version ({0}) is installed.",\r
"payment instructions, contracts, IOPPD, decisions",\r
"INTEGER",\r
"Integrated accounting information system",\r
"Internal note",\r
"The internal note has been saved.",\r
"Internal delivery note / costing sheet (Excel)",\r
"Internal delivery note / costing sheet (PDF)",\r
"Internal delivery note and internal costing sheet · trade ledgers of both outlets · not a VAT supply",\r
"internal delivery note and internal costing sheet, trade ledgers of both business units",\r
"Internal ENU label",\r
"The employee's internal (serial) number in the records — used on payslips and in the summary. It is NOT an organisational unit.",\r
"Internal document between outlets of the same company. Not a VAT transaction (PPZPDV Art. 80).",\r
"Internal document between outlets of the same company. Not a VAT transaction (PPZPDV Art. 80). Trade ledger: sender — col. 4 red reversal at the sender's value; recipient — col. 4 debit at the recipient's value.",\r
"Internal code. If the product has a barcode, add it.",\r
"Internal transfer {0}: {1} → {2} (purchase {3}){4}",\r
"Internal transfer no. {0} of {1} from {2} (internal costing sheet){3}",\r
"Internal transfer no. {0} of {1} to {2} (red cancellation){3}",\r
"Internal transfer of goods between outlets",\r
"Inv. no.",\r
"Disability",\r
"Investment property",\r
"Investment property held for sale",\r
"INVOICE",\r
"IOPPD",\r
"IOPPD and payment of tax and contributions for {0}/{1}",\r
"IOPPD basis",\r
"IOPPD basis code from the Code list of calculation bases (1 = earnings, 6 = sick leave up to 60 days, 7 = sick leave over 60 days). Items with a special basis go into a separate row in the return, with the from–to period from the absence records.",\r
"IOPPD XML",\r
"IOPPD requires a 13-digit JMBG for every person. Invalid JMBG for the contractor under the service contract: {0} (\\"Service contract\\" tab).",\r
"IOPPD requires a JMBG for every person. The JMBG is missing for the lessor: {0} (\\"Lease\\" tab).",\r
"IOPPD requires a JMBG for every person. The JMBG is missing for: {0} (\\"Employees\\" tab).",\r
"IOS to supplier: {0}",\r
"ours after all",\r
"IPv4",\r
"IQOS",\r
"IQOS — sales compensation (taxable)",\r
"IQOS — separate compensation payroll",\r
"IQOS amounts — {0} {1}",\r
"IQOS amounts are entered in a separate payroll of the \\"IQOS\\" type.",\r
"IQOS: calculated {0} employees for {1} {2}{3}.",\r
"IRIS CORVINA",\r
"IRIS CORVINA Accounting",\r
"IRIS Accounting",\r
"IRIS Server",\r
"iriscorvina.me",\r
"Outcome",\r
"Slip for the guest's signature",\r
"the FI statement BU-47507/2026 has the same amounts as 2024; it needs to be checked with the accountant",\r
"STATEMENT OF FINANCIAL POSITION / BALANCE SHEET",\r
"Cash flow statement",\r
"Statement of changes in equity",\r
"STATEMENT OF COMPREHENSIVE INCOME / INCOME STATEMENT",\r
"statements not saved",\r
"Statements are prepared on the computer.",\r
"statements saved",\r
"disabled",\r
"disabled on the server",\r
"disabled",\r
"A disabled rate is no longer offered on entry; items keep it.",\r
"Excluded stores with turnover in",\r
"disabled",\r
"Disabled = not offered when entering (employees who already have it stay untouched)",\r
"Disabled: receipts are issued without VAT.",\r
"Disable",\r
"Disable on server",\r
"Deselect all",\r
"Disconnect",\r
"Disconnect from the server on this device?\\n\\n{0}The exchange returns to the old way (Google Drive folder, if selected), and files received from the server are deleted from the inbox folder.{1}\\nTo pair again, a new code from the administrator is needed.",\r
"Derecognition of FA (cost value) — {0}",\r
"Used",\r
"Experience",\r
"Paid out",\r
"Paid",\r
"more was paid than under the scheme; the difference is not added",\r
"payout",\r
"Payment",\r
"Payment to contractor",\r
"the payout was adjusted to the agreed net amount (incentive)",\r
"The payout has been deleted.",\r
"The payout enters this month's IOPPD return",\r
"Payout to lessors:",\r
"Payment to the lessor",\r
"Salary payout",\r
"Payouts",\r
"Payouts from the drawer",\r
"The month's payouts are recalculated at the current rates (\\"Rates\\" tab)",\r
"Payouts for",\r
"below the purchase price ({0})",\r
"help",\r
"Help from other stores",\r
"Delivery",\r
"Delivery of goods before the invoice · reduction of stock and trade ledger on the delivery date · invoice from delivery notes",\r
"Delivery of goods before the invoice · stock and trade ledger discharge on the delivery date · invoice from delivery notes · VAT on the eighth day from delivery",\r
"Supplies at the 0% rate",\r
"Supplies at 15% rate",\r
"Supplies at the reduced rate",\r
"Isporuke0",\r
"Isporuke15",\r
"Document",\r
"Document valid until",\r
"Documents and auxiliary books — 5 years (Accounting Act 84/25, Art. 14)",\r
"Correct",\r
"Correcting takings {0} from {1}. Changes are saved with the \\"SAVE CORRECTION\\" button.",\r
"Data correction",\r
"Accumulated depreciation — {0}",\r
"Impairment of advances paid for inventories and services",\r
"Impairment of other receivables",\r
"Impairment of long-term financial investments",\r
"Accumulated impairment of buildings",\r
"Impairment of short-term financial investments",\r
"Impairment of individual receivables from persons to whom an amount is simultaneously owed",\r
"Accumulated impairment of plant and equipment",\r
"Impairment of receivables from specific transactions",\r
"Impairment of receivables from customers",\r
"Impairment of goods",\r
"Accumulated impairment of software and licences",\r
"Accumulated impairment of investments in third-party premises",\r
"Impairment of material inventories",\r
"Fixes and improvements.",\r
"Document issued by",\r
"The same error has already been reported in the last 10 minutes.",\r
"Same margin for all lines (%)",\r
"highlighted",\r
"expired",\r
"Expiry date passed",\r
"expired",\r
"expired",\r
"Timed out waiting for the local server's response.",\r
"The wait for the Tax Administration's response (MAPR) timed out. The connection was interrupted or the server is not responding.",\r
"Timed out on the MAPR call.",\r
"Download timed out.",\r
"Timed out.",\r
"The same item has been recorded more than once (a difference in spacing or capital letters), so quantities are split across two records. Merging moves all entries to the oldest item;",\r
"the same item as in row {0}; the quantity is added up, the price is from row {1}",\r
"same document: sender's internal delivery note and recipient's internal costing sheet",\r
"the same file has already been imported",\r
"the same amounts ({0}) already entered: {1} {2}",\r
"the same report is already in row {0} of this file",\r
"the same report has already been entered ({0}{1} EUR)",\r
"The same store and day entered more than once (shifts of the same register are not counted), or takings of 0.00 EUR",\r
"The same store and day entered more than once means duplicate turnover and VAT, except when the store has several registers. Shifts of the same register on the same day (different Z number) are not a duplicate; a takings entry from a register is a duplicate only with the same register, the same Z number and the same day. Takings of 0.00 EUR are also shown. After comparison with the Z report, a wrong row is deleted or corrected; deletion and correction also apply on the other computers.",\r
"same name",\r
"The same invoice already exists",\r
"The same sequence number on several costing sheets: company {0}, stores {1}; numbers with \\"~\\": {2}. They occur when two computers assign numbers at the same time — renumbering corrects them.",\r
"The same phone number already belongs to customer \\"{0}\\", who can be marked in the list.",\r
"the same Z no. {0} has already been entered for {1}",\r
"The same dependent cost has already been entered for this costing sheet (same supplier, invoice, date and amount).",\r
"Expires",\r
"same as transaction #{0}",\r
"The same absence (employee, type and period) has already been entered.",\r
"the same payment was entered manually and posted from the bank statement, so the card shows an overpayment",\r
"the same company group",\r
"A payment of the same amount ({1} EUR) and date from another statement has already been posted to the same {0}: {2}.\\n\\nPost as a new payment?\\n\\nOK: post the new payment.\\nCancel: no posting (the same payment is marked with the \\"duplicate\\" button).",\r
"History — {0}",\r
"change history",\r
"The same connection is also used by:",\r
"ITF",\r
"IV",\r
"IV — secondary general/vocational education (SSS)",\r
"IV. CASH IN BANK ACCOUNTS AND IN HAND",\r
"IV. Correction of expenses based on transfer prices between related parties",\r
"IV. NET RESULT OF DISCONTINUED OPERATIONS",\r
"IV. RESERVES (106+107+108+109-110)",\r
"IX. NET COMPREHENSIVE RESULT (248-259)",\r
"from",\r
"From",\r
"From {0} file(s): new records {1}, already existing {2}.{3}",\r
"from the Drive folder is then shared to the phone and loaded with the button above.",\r
"{0} h copied from the absence records (leave, paid absence, sick leave).",\r
"from file",\r
"From file",\r
"from the exchange folder (Google Drive)",\r
"Only daily database copies are deleted from the exchange folder.",\r
"Only data is read from the document; the image is not saved.",\r
"From bank statement",\r
"from the employee card (period)",\r
"from the register",\r
"From cash register {0} (shift {1})",\r
"from the link",\r
"From warehouse",\r
"From Manager: new scans {0}, cancelled {1}, stocktakes {2} new / {3} supplemented.",\r
"Invoice {0} was created from this quote.",\r
"Invoice {0} has already been created from this quote.",\r
"from the PD calculation (same as the PD card; return not saved)",\r
"The IKOF is calculated with this certificate from the data on the printed receipt. If it matches the IKOF on the receipt, it is proven that this company issued the receipt. This screen is a required feature of every fiscal software.",\r
"From mail: {0}. After the payment is entered, the attachment is marked as imported in Mail.",\r
"{0} EUR of tourist tax has been separated from the 0 % turnover — it is included neither in revenue nor in exempt turnover.",\r
"From this month's shift schedule:",\r
"from the server certificate",\r
"{0} h taken from the shifts.",\r
"from the saved PD return",\r
"from the latest costing sheet",\r
"From the new cash register's closings: who deleted how many receipts (and for how much), how many items were removed from receipts and how many were restored. Large numbers for one cashier are a reason to check, not proof.",\r
"Select .pfx / .p12",\r
"Choose file…",\r
"Select the folder for synchronization (e.g. in Google Drive)",\r
"Choose folder…",\r
"Select the certificate for fiscalization (.pfx / .p12)",\r
"Choose image…",\r
"Select all",\r
"Select the advance receipt.",\r
"Select at least one holiday day.",\r
"Select a date.",\r
"Select a valid period.",\r
"Select a report and a period, then \\"Show\\".",\r
"Select a store.",\r
"Select the last night in the same row.",\r
"choose a holiday above",\r
"Choose a holiday or enter its name.",\r
"Select a room type.",\r
"selected",\r
"selected",\r
"The selected goods belong to different groups ({0}). A specialised kiosk sells predominantly one type of goods (Art. 35b para. 4).",\r
"The selected delivery notes have been invoiced.",\r
"The selected file is not a database (.knj.db). Select the file \\"baza_obradjena.knj.db\\" published by the computer.",\r
"The selected file is not a database snapshot.",\r
"The selected store is not active in this company. Select a store from the list.",\r
"The selected takings no longer exist.",\r
"The selected snapshot belongs to company \\"{0}\\", but \\"{1}\\" is open. The snapshot is loaded into company \\"{2}\\".",\r
"selected",\r
"Selected",\r
"hotel business selected (mode of operation)",\r
"{0} costing sheets selected. Preparation may take a few minutes. Continue?",\r
"Selected: {0}, {1}. Next step: the shift of the other employee (it can be on another day).",\r
"Select a business unit.",\r
"removed from the group",\r
"Remove from group",\r
"Remove {0} items from the \\"Cigare\\" group? Their rules will be deleted.",\r
"Select item",\r
"Selecting an item from the list opens its name and description in each language, allergens, labels and image.",\r
"Choose a company to work with",\r
"Selecting a group from the list opens its name in each language, order on the menu and tile image.",\r
"The choice was saved on this computer; the server did not receive it ({0}).",\r
"Selection of stores that are",\r
"Select outlets",\r
"Choose the working store",\r
"Selecting from the list opens editing; \\"New entry\\" adds a new one.",\r
"Selecting from the list shows the data.",\r
"Select the shift the employee joins that day.",\r
"Select with the arrow keys and Enter, or by clicking a row.",\r
"Selection for an invoice from delivery notes",\r
"Issue",\r
"Issue advance receipt",\r
"Issue invoice / quote",\r
"Issued by",\r
"Issued by (authority)",\r
"Issued by: {0}.",\r
"Issued",\r
"An issued document stays in year {0} and its date must remain in that year. A new document is required for another year.",\r
"Invoice issued",\r
"An issued invoice cannot be changed.",\r
"issued invoices",\r
"issued invoices (excl. VAT, excl. drafts and cancellations)",\r
"Issued documents",\r
"Dispensed",\r
"Issued: {0}.",\r
"Publisher",\r
"The publisher has replied to the message to support.",\r
"Issuer:",\r
"Restricted funds and letters of credit",\r
"IZF",\r
"Statement",\r
"Response",\r
"statement received {0}",\r
"I declare under full material and criminal liability that the stated data are accurate.",\r
"Goods stocker (salesperson)",\r
"Output",\r
"leaves {0}",\r
"Sales invoice",\r
"Sales invoices and quotes to customers",\r
"Sales invoices: revenue from sale of goods",\r
"Sales invoices: revenue from services (items without an item code)",\r
"Output",\r
"Outgoing document",\r
"Output VAT",\r
"OUTPUT VAT",\r
"Output VAT {0} %",\r
"Output VAT on invoices 15 %",\r
"Output VAT on invoices 21 %",\r
"Output VAT on invoices 7 %",\r
"Output VAT is reduced when the customer notifies in writing that they have reduced the input VAT deduction (VAT Act Art. 20 para. 9). The customer delivers a written notification of the deduction correction.{0}",\r
"between Z {0} ({1}) and Z {2} ({3}) {4}: not entered or entered with the wrong date or Z number",\r
"Edit",\r
"Items changed: {0}.{1}",\r
"Change",\r
"Edit promotion",\r
"price changes are waiting for a store",\r
"The price change {0} from {1} has no cash register or point-of-sale mark and was rejected (a cash register does not change the general price).",\r
"The price change of item {0} from {1} was rejected. {2}",\r
"price change is waiting for a store",\r
"The price change was not found.",\r
"Edit payout under work contract",\r
"Changes can be made on the company's main computer.",\r
"The change has been discarded.",\r
"The change was undone. The price was restored to {stara}.",\r
"The change has been entered.",\r
"Edit customer",\r
"Change on this computer (after downloading the main computer's database)",\r
"Edit item data",\r
"Edit employee",\r
"Edit manual voucher",\r
"change from other computers is waiting",\r
"a change from the switch to the new version; this data already exists here with different content",\r
"Edit shift",\r
"Edit lessor",\r
"Changes",\r
"Price changes",\r
"price changes are waiting for a store",\r
"Price changes by points of sale",\r
"Amendments to the Rulebook are adopted under the procedure for its adoption: the draft is delivered to the trade union or employee representative at least {0} days before adoption for the purposes of information and consultation ({1}). The Employer keeps the records of positions and post-holders in the accounting program, from which this Rulebook and individual acts (contracts, annexes, decisions) are produced.",\r
"Pending changes",\r
"Changes have not been saved. Discard them?",\r
"Data changes",\r
"Item data changes",\r
"changes from other computers are waiting",\r
"Changes arrived from a register that is not entered in \\"Registers and stores\\". Once the register (ENU code) is entered with its store, the changes are applied automatically.",\r
"Changes are visible after the view is refreshed. An entry in progress is saved first.",\r
"Changes in this version",\r
"changing prices for cash registers",\r
"above the norm for",\r
"Amount",\r
"IZNOS",\r
"The \\"of which services\\" amount cannot be negative.",\r
"amount (gross)",\r
"Amount (EUR)",\r
"Amount (incl. VAT)",\r
"amount / debit−credit",\r
"amount / debit−credit (opening balance from the footer skipped)",\r
"Amount 0 = the employee has no IQOS payroll this month.",\r
"Advance amount (up to {0})",\r
"The advance amount must be greater than zero.",\r
"Amount excl. VAT",\r
"Invoice amount",\r
"The invoice amount without VAT has not been entered.",\r
"the amount is negative",\r
"Amount is required.",\r
"The amount is greater than the free part of the advance.",\r
"The amount must be greater than zero.",\r
"The fee amount is required.",\r
"the amount is not in the file",\r
"the amount is not in the file, and the item's retail price in the outlet is not known",\r
"The credit note amount must be greater than zero.",\r
"The takings amount is required.",\r
"VAT amount",\r
"VAT amount (from the invoice)",\r
"The payment amount is required.",\r
"The payment amount is not valid.",\r
"The amount per rate must be greater than zero.",\r
"The opening balance amount is required. An entered balance is deleted with the delete button.",\r
"Amount of tax paid in another country",\r
"Refund amount (EUR)",\r
"Amount estimated at MPC",\r
"Invoice amount",\r
"Invoice amount (EUR)",\r
"Amount incl. VAT",\r
"Amount with VAT by rate. Without a split, the whole amount goes at 21 % (the goods are not known at the time of payment).",\r
"The amount is offered by municipality; for other municipalities enter the amount from the municipality's decision.",\r
"Tax amount",\r
"Tax amount (EUR per person per night)",\r
"Tax amount (EUR)",\r
"The tax amount has been saved.",\r
"The tax amount is greater than 10 EUR",\r
"The tax amount is not valid.",\r
"The cost amount (excl. VAT) is required.",\r
"Amount in euros",\r
"Amount in euros excl. VAT. The same VAT enters both output (24) and input VAT (25), so it does not change the liability; U-RAČ columns 14–16.",\r
"iznos u lokalnoj valuti",\r
"Payment amount",\r
"The payment amount must be greater than zero.",\r
"Link amount",\r
"The link amount must be greater than zero.",\r
"Amount for FZO",\r
"The amounts do not match:\\n\\n{0}\\n\\nSave the takings despite the differences?",\r
"The amounts are filled in automatically and checked before saving, the same as on Android.",\r
"Calculate IKOF",\r
"Calculate by weight",\r
"calculated from the rate",\r
"Preparing the export…",\r
"Creating a backup and changing the margin…",\r
"balance the difference to the scheme account \\"ps.razlika\\"",\r
"Opening balance adjustment (check with the accountant)",\r
"Balancing of balance sheet accounts",\r
"The imposed measure is not a fine.",\r
"Exceptions",\r
"Exceptions (an expression anywhere in the name excludes the rule)",\r
"Exclude another item (search by name)",\r
"IZV",\r
"derived from rates",\r
"derived from UKUPNO",\r
"derived tax",\r
"derived turnover",\r
"derived base",\r
"derived from the price and the last purchase price",\r
"exported",\r
"Exported (XML; check the first upload to IRMS as a draft): {0}",\r
"Exported: {0}",\r
"Exported: {0}{1}",\r
"Export the code list to Excel",\r
"Report",\r
"The report was generated from the accounting program based on the ledger card you provided ({0} items compared: {1} match, {2} differ in amount, {3} only on your side, {4} only on our side).",\r
"The report was saved: {0}",\r
"The report has not been imported yet.",\r
"Management report",\r
"Tourist tax report — {0}",\r
"Report on the stocktake performed upon a change in goods prices — Rulebook on the form and manner of keeping records of purchase and sale of goods (\\"Official Gazette of Montenegro\\" 34/12, 18/13), Art. 11. Amount of change = counted (found) quantity × (new − old selling price incl. VAT). The difference between counted and book quantity is a stocktake difference and is not included in the price revaluation.",\r
"Stocktake report (Excel)",\r
"Stocktake report (PDF)",\r
"Tax report for the previous month.",\r
"Report on determined maximum prices (CInMED)",\r
"Sales-by-item report from another manufacturer's cash register. Required columns are",\r
"Reports",\r
"Reports on the phone are created from",\r
"statement",\r
"Statement",\r
"The statement ({0}) has already been imported.",\r
"excerpt (not the company's complete ledger)",\r
"Statement {0} was entered in the bank register.",\r
"statement {0}{1} of {2}, {3}",\r
"Statement {0}/{1}: {2} {3} ({4})…",\r
"Bank statement",\r
"statement no. {0}",\r
"Another company's statement",\r
"The statement is issued to the company {0} (PIB {1}), but the company \\"{2}\\" is open. The statement was not imported. It can be imported in the company the statement is issued to.",\r
"the statement has {0} orders, {1} were read",\r
"the statement has more outflows than the header, and the same payment is waiting under a different recipient (possibly an earlier misreading)",\r
"The statement is not in PDF format. Statement text is entered by copying it into \\"Import statement\\".",\r
"The statement was not removed. An advance receipt was issued for a payment from the statement.",\r
"The statement was not imported: account {0} is not confirmed as an account of the company \\"{1}\\".",\r
"STATEMENT OF OPEN ITEMS (IOS)",\r
"Statement of account {0}, which is marked as another company's account. The statement was not imported into the company \\"{1}\\". (For this company's account: Liabilities → Mail → \\"and other companies' receipts\\" → \\"ours after all\\".)",\r
"The statement with payments was not removed. {0}",\r
"A statement is imported only from an account confirmed as the account of the company \\"",\r
"Statement for the selected units: receipts posted to those units (costing sheets, their dependent costs and equipment purchases entered against the unit). Services of foreign entities and purchases without a unit are only in the ledger of the whole company (without unit selection).",\r
"Statement: administrative fees and licence charges",\r
"Statement: salary payout",\r
"Statement: interest on tax payment (payment reference \\"interest\\")",\r
"Statement: bank fees",\r
"Statement: rent collected (income)",\r
"Statement: collection from customer",\r
"Statement: fines (public revenue account for fines)",\r
"Statement: payment to supplier",\r
"Statement: taxes and contributions (pending split by type)",\r
"Statement: refund from supplier",\r
"Statement: loan from an owner or related party (inflow = liability, outflow = repayment)",\r
"Statement: transfer between company accounts (both sides via the transit account)",\r
"Statement: POS / card inflow",\r
"Statement: utilities without an invoice in the program",\r
"Statement: deposit of daily takings (cash)",\r
"Statement: payment of corporate income tax",\r
"Statement: rent paid to a natural person",\r
"statements",\r
"Statements",\r
"statements · last",\r
"statements not imported into Bank",\r
"bank statements, ledger cards, invoices",\r
"Bank statements, recognition of payments in and out (and benefit refunds), cash flow",\r
"Statements whose check does not match are opened with the buttons below, to mark the correct items.",\r
"statements and cash flow",\r
"Statements and coverage",\r
"Statements from mail are waiting for account confirmation.",\r
"Source",\r
"Data source",\r
"Source of starting rate",\r
"Sales source",\r
"VAT rate source",\r
"The source of the VAT rate is entered for",\r
"Source: the status sent by the cash register (Cash register {0} and newer). {1}",\r
"Export",\r
"Export of \\"{0}\\" is not allowed (executable file).",\r
"Export CSV",\r
"The export gives the whole code list (items, barcodes, prices by points of sale) in one Excel file. The import first shows a preview of differences; writing follows after confirmation, with a database backup. The import does not delete items, barcodes or prices that are not in the file.",\r
"Export the code list to Excel",\r
"Export all lines (items) of the selected costing sheets",\r
"Post-h.",\r
"executed",\r
"Instruction {0} was executed: {1}. {2}",\r
"IZVRSENA",\r
"Action performed, expected and obtained result …",\r
"Execution of the instruction was interrupted (the program was closed while the instruction was in progress). The instruction is not repeated; check the last import on the main computer.",\r
"contractor",\r
"Contractor",\r
"Contractor from an earlier contract",\r
"A post-holder is an employee assigned to a position by an employment contract; the number of post-holders is the largest number of employees who can be assigned to that position at the same time.",\r
"contractors",\r
"Post-holders",\r
"Executive director",\r
"j4sVG68Z6QZGUfZ64qBQSMeUiLa8LQYOxzMKIXC-Pmg",\r
"Apples, pears, plums, quinces, watermelons",\r
"Strength",\r
"Strength",\r
"Berries, fresh figs",\r
"Eggs",\r
"Fresh eggs",\r
"jaja; jaje",\r
"January",\r
"January",\r
"January",\r
"reported",\r
"Reported",\r
"Cash register report-in",\r
"public statement",\r
"public statement (IRMS register) for {0}",\r
"public statement (IRMS register) for {0}{1}",\r
"is the day on which both the goods and the invoice were received (the later of the two). Input VAT goes into PR-PDV by it (VAT Act Art. 37 para. 7: VAT is deducted \\"in the tax period in which the invoice was received\\").",\r
"is a receivable from the customer; collection is tracked manually until the accountant decides how these receipts are posted (separately in the KIF as a taxpayer).",\r
"has been downloaded",\r
"is a role for the owner/administrator: it has the main computer's authority (changing books, processing scans, settings), sends changes to the main one as packages, does not publish the database and follows the main one's snapshot, so it cannot become a second main computer.",\r
"is recorded and equals the balance on 31.12.",\r
"is locked. It cannot be changed.",\r
"Unit",\r
"one",\r
"one day",\r
"One Excel file with all statements + PD + notes + JSON for transfer to the portal",\r
"One row is one item. \\"Opšta cijena\\" applies at every location that has no price of its own; a column named after a location is the price for that location only (empty field = the general price applies). Prices are retail prices, incl. VAT.",\r
"One row is one barcode of one item. An item can have several barcodes. A barcode that already belongs to another item is not added during import without a decision: share, move or skip.",\r
"one row per item",\r
"one row per daily report",\r
"one device",\r
"units · purchase value",\r
"Unit",\r
"The unit of measure \\"{0}\\" is not on the list.",\r
"The unit of measure is required for a new item.",\r
"The unit of measure is chosen from the list (sheet \\"Šifarnici\\").",\r
"The net quantity unit \\"{0}\\" is not on the list ({1}).",\r
"Net quantity unit: {0}.",\r
"single account — there is no payroll, rent or service contract calculation in the general ledger for {0}/{1}{2}",\r
"Single account {0}/{1} — {2}",\r
"Single account for taxes and contributions",\r
"One code pairs from 1 to 5 devices.",\r
"One opening balance per supplier, as of 01.01. A new entry replaces the previously entered one.",\r
"one-off",\r
"Single room",\r
"once",\r
"Ready and semi-ready meals",\r
"Language",\r
"Language of the on-screen text on this cash register; applies immediately. Fiscal receipts, printouts, labels and exports remain in Montenegrin.",\r
"Language of the on-screen text on this device. Exports (Excel, PDF), printouts and labels remain in Montenegrin.",\r
"Language of the on-screen text on this device. Exports (PDF, Excel, XML), printouts, fiscal receipts and Tax Administration forms remain in Montenegrin.",\r
"The language was not changed: {0}",\r
"Program language",\r
"JIKR",\r
"UoM",\r
"Unit changed.",\r
"JM neto",\r
"JMB",\r
"JMB {0}",\r
"JMBG",\r
"The contractor's JMBG (13 digits) is required for the IOPPD return.",\r
"The JMBG must have exactly 13 digits (entered: \\"{0}\\").",\r
"JMBG must have exactly 13 digits.",\r
"The JMBG must have exactly 13 digits. Invalid JMBG for: {0} (\\"Employees\\" tab).",\r
"The lessor's JMBG must have 13 digits.",\r
"{0} left",\r
"{0} more {1} ▾",\r
"{0} d left",\r
"one more cash register,",\r
"not made yet",\r
"has not arrived yet: {0}",\r
"has not arrived yet: {0}{1}",\r
"No device has sent rows yet.",\r
"nothing yet",\r
"Nothing yet.",\r
"has not reported yet",\r
"Long-service award (10/20/30/40 years of service: up to 150/250/350/450 EUR)",\r
"Yesterday",\r
"yesterday ({0})",\r
"July",\r
"July",\r
"July",\r
"June",\r
"June",\r
"June",\r
"Southern fruit (oranges, lemons, bananas, mandarins, pineapple, etc.)",\r
"k.BrojDokumenta",\r
"k.BrojDokumentaStari",\r
"k.BrojFaktureDobavljaca",\r
"k.BrojKalkulacije",\r
"k.BrojRacunaDobavljaca",\r
"k.DatumFakture",\r
"k.DatumFakture DESC, k.KalkID DESC",\r
"k.DatumValute IS NOT NULL",\r
"k.DobavljacID",\r
"k.FIK",\r
"k.KalkID DESC",\r
"k.MarketID",\r
"k.MarketID=? AND",\r
"When",\r
"When no other window is open (the program was terminated unexpectedly), the flag is cleared in about a minute.",\r
"When a printer is selected, \\"Print all\\" from the costing sheet overview sends the documents directly to it, without a dialog for each costing sheet. This is also where you switch on",\r
"when the customer buys N or more pieces, the unit price is the entered value (€)",\r
"When the program encounters a technical error (a display crash, an error in the exchange cycle), it sends the publisher",\r
"When the error recurs after an update: revert to the previous version (data stays unchanged).",\r
"When the maximum number of consecutive days is reached",\r
"HR",\r
"HR: contracts, leave, discipline",\r
"Coffee of all kinds — packaged",\r
"kafa; espres; kapucin; cappuccin; macchiat; makijat; nes; latte",\r
"How",\r
"How was it resolved? (e.g. invoice found and entered / supplier corrected the card / supplier error):",\r
"How it works",\r
"How is the folder linked to Google Drive (without server)?",\r
"How receipts are issued when the guest leaves.",\r
"How it is entered in the IOPPD return",\r
"Calendar",\r
"Costing",\r
"KALK",\r
"Costing {0} · {1} · {2}{3}",\r
"costing sheets",\r
"Costing sheet",\r
"Costing sheet — supplier corrective invoice",\r
"Costing sheet — supplier credit note",\r
"Costing sheet · supplier invoice and receipt · sales invoice, quote, corrective receipt · delivery note · equipment issue form · credit note · advance receipt · transfer note · write-off · price revaluation. Part of the number is enough.",\r
"costing sheet {0}",\r
"Costing sheet {0}",\r
"Costing sheet {0} — {1}{2}{3}",\r
"Costing sheet / statement",\r
"costing sheet without an invoice in the KPR (manual entry without an invoice)",\r
"The costing sheet from the confirmation was not found in this database (deleted or not yet arrived).",\r
"Costing sheet from an invoice addressed to another customer, with confirmation",\r
"The costing sheet was created ({0}, {1} EUR). Error after saving: {2}",\r
"The costing sheet was created. {0} (Settings → Printer)",\r
"The costing sheet was deleted on {0}. The scan can be returned to the queue or deleted (a deleted scan can be scanned again by the phone).",\r
"The costing sheet was sent via data exchange. Its number cannot be changed.",\r
"The costing sheet is in a locked month. The allocation of dependent costs cannot be changed.",\r
"The costing sheet is in a locked period.",\r
"The costing sheet does not exist.",\r
"The costing sheet has no store: prices not sent to the cash register: {0}. The general price is changed in the \\"General prices\\" view (Cash register price list).",\r
"The costing sheet has no items with quantity and value to which the cost can be allocated.",\r
"The costing sheet was not created. {0}",\r
"The costing sheet was not found.",\r
"The write-off costing sheet has no dependent purchase costs.",\r
"costing sheets this month entered after the deadline (the day after the receipt; 7 days for bread, milk and press — Rulebook 34/12 Art. 5 and 6)",\r
"The costing sheet was sent to the printer.",\r
"The costing sheet is changed only when the allocation is confirmed.",\r
"The costing sheet is not changed",\r
"The costing sheet is not changed automatically. The correction (return, credit note, quantity change) is made by the accountant.",\r
"costing sheet does not match the invoice (discount, quantity or price); a check is needed",\r
"Costing sheets in",\r
"costing sheets in the selection",\r
"costing sheet outside the selected period/store",\r
"Costing sheet of a dependent cost",\r
"costing sheets, missing",\r
"Costing sheet: difference in cents between the costing sheet and the invoice",\r
"Costing sheet: goods in retail at selling price incl. VAT (debit)",\r
"Costing sheet: calculated margin (credit)",\r
"Costing sheet: calculated VAT (credit)",\r
"Costing sheets",\r
"Costing sheets (receipts)",\r
"costing sheets without a supplier invoice are not in the specification",\r
"Costing sheets and invoices",\r
"Supplier costing sheets and invoices · manual entry (including foreign supplier) · entry log: who entered, changed or deleted the document",\r
"Costing sheets by line (",\r
"COSTING SHEETS WITH LINE ITEMS",\r
"costing sheets in a locked period ({0})",\r
"Costing sheets{1}",\r
"Shrinkage",\r
"Interest paid to non-residents at a rate higher than the usual commercial rate",\r
"Interest on VAT payment",\r
"Interest on late-paid taxes and contributions",\r
"Interest to related parties above \\"arm's length\\", default interest between related parties",\r
"Interest to related parties lower than \\"arm's length\\" income",\r
"Camera",\r
"Camera unavailable: {0}",\r
"Camera: {0}",\r
"Camera",\r
"with the phone camera",\r
"The camera is currently in use by another app. Close that app and scan again.",\r
"Camp",\r
"The channel must be trial or stable.",\r
"Office — not scheduled into shifts (mark on the employee card, Payroll → Employees)",\r
"Office supplies",\r
"An office employee (administrator, director, accountant…) is not included in the shift schedule — neither automatically as a replacement, nor as help to another store, nor from the Manager. Until the checkbox is changed, the decision follows the job position name.",\r
"as auxiliary (extra hand, above the required number)",\r
"as auxiliary (extra hand)",\r
"as for all",\r
"EQUITY",\r
"Capital, loans, bank account, cash desk, customers, VAT and corporate income tax are not in the program. Data is taken from the accountant's trial balance (Excel import or manual entry).",\r
"Capital gains (42 − 43) > 0",\r
"Capital gains (shown in the income statement)",\r
"Capital losses (43 − 42) > 0",\r
"Capital losses (shown in the income statement)",\r
"KARELIA",\r
"KARELIAS",\r
"card",\r
"Card",\r
"CARD",\r
"Ledger card (chronological, by date)",\r
"Supplier ledger card / IOS",\r
"Item card — {0} ({1})",\r
"SUPPLIER LEDGER CARD",\r
"Supplier ledger card — {0}",\r
"Supplier ledger card — loading and checking",\r
"Account ledger card",\r
"ACCOUNT CARD {0} {1}",\r
"Customer ledger card from the general ledger (account",\r
"The card has no amount column (amount / debit / credit).",\r
"ledger card opened in the comparison",\r
"The card shows invoices and collections as posted in the general ledger (Finance → Post month).",\r
"The employee's card has for this month:",\r
"cards",\r
"Cards",\r
"Card payments {0} reduced by bank commission",\r
"Card payments without inflow (2419, older than 3 days, after POS commission)",\r
"Card payments without inflow {0} (more than 5 % of card payments {1}: {2}). A statement or inflow is missing; POS commission has not been posted.",\r
"card payments of month {0}, POS inflows {1}, commission {2}",\r
"card collection — daily takings check",\r
"cash register",\r
"Register",\r
"register — item data",\r
"Cash register \\"{0}\\" ({1}) — {2} items, {3} unsynchronized receipts",\r
"register (item is not in the code list)",\r
"Register (ENU / PJ)",\r
"cash register {0}",\r
"Cash register {0}",\r
"Cash register {0} — {1}",\r
"Cash register {0} · day {1} · cash register status from {2} · turnover {3} EUR",\r
"Cash register {0} · cash register status from {1} · overview from {2}",\r
"Cash register {0} ({1}, {2}) will be disabled on the server and marked as removed. Takings, turnover and closings of the cash register remain. Continue?",\r
"Cash register {0} ({1}) will be disabled on the server. Continue?",\r
"Cash register {0} was disabled on the server.",\r
"Register {0} has started the payment. It can be released only if that register is not working.",\r
"Cash register {0} was moved.{1}{2}",\r
"Cash register {0} has been removed. A cash register is entered again with the \\"Add cash register\\" button.",\r
"Cash register {0} was removed.{1}{2}{3}",\r
"Cash register {0} was entered in the outlet.{1}",\r
"Cash register {0} was entered.{1}{2}",\r
"Cash register {0} is already entered ({1}).",\r
"Cash register {0} is not a cash register of store \\"{1}\\".",\r
"Cash register {0} is not in the list of cash registers.",\r
"Cash register {0}, shift #{1}{2}",\r
"Cash register {0}{1} is not assigned to a store (Cash register price list → Registers and stores).",\r
"Cash register / shift",\r
"Cash register 1.5.1 · works until {0} · late after {1}",\r
"Cash register 1.5.2 writes the EX mark (VAT_CL26, VAT_CL27, VAT_CL17) from the item basis (Items → basis for 0 %) into the fiscal receipt line at the 0 % rate. The EX mark has not been verified on the Tax Administration test service. Off: the cash register package is as in version 1.0.107 (without a basis).",\r
"Cash register 1.5.2 sends a reporting interval (via the server 110 s with an open shift, 10 min without one; exchange folder only 5 min): \\"working\\" = reported within {0} intervals, \\"late\\" = within {1} intervals, after that \\"not reporting\\". Cash register 1.5.1: working up to {2} min, late up to {3} min; without an open shift {4} and {5} min.",\r
"cash register without a store: {0}",\r
"Register ID",\r
"IRIS cash register",\r
"The register issues a corrective receipt for the advance receipt.",\r
"The cash register was disabled on the server.",\r
"The cash register had already been disabled on the server.",\r
"The cash register returned an unexpected response.",\r
"The cash register has not yet sent a shift closing.",\r
"On Sundays and holidays the kiosk cash register sells only the selected items and groups. The cash register groups do not include press, flowers and souvenirs — choose items for such goods.",\r
"A kiosk cash register requires the kiosk's business premises (PJ) code. {0}",\r
"Cash register on the network",\r
"The cash register does not send live status. Available from cash register version",\r
"The cash register does not send live status. Live status is available from cash register version {0}.",\r
"The cash register was not paired on the server.",\r
"The cash register is not available at {0}: {1}",\r
"the cash register did not send turnover.",\r
"The cash register has not sent receipts.",\r
"The cash register is not entered in the company's cash register list (Cash register price list → Cash registers and stores).",\r
"The register refuses to sell a withdrawn batch. The list reaches the registers with the price list. A batch removed from the list remains banned on registers that have already received it (Cash register 1.7 only adds to the list of withdrawn batches). The \\"Received\\" column shows the receipts of that batch by costing sheets (the batch is entered on a costing sheet item in \\"Costing sheets and invoices\\").",\r
"OfflineKasa cash register — how it works",\r
"Cash register marked as a kiosk in a store (record before 1.0.108). A kiosk is a separate point of sale: \\"Open kiosk\\" next to the store.",\r
"The cash register sells at a different price than the costing sheet",\r
"cash register working",\r
"cash register working · late or not reporting: {0}",\r
"Cash register now",\r
"the cash register reports every {0} · works until {1} · late after {2}",\r
"Cash register entered",\r
"The cash register keeps receipts and shifts. Accounting needs the daily takings, so the application takes",\r
"Send the 0 % base to cash registers (fiscal code EX)",\r
"KasaZakljuciPotpis:{0}",\r
"cash register",\r
"Cash registers",\r
"Cash register 1.x (new cash register) — closings",\r
"Company cash registers by outlet (cash register ENU code at the Tax Administration); the cash register gets its prices and rules according to the outlet. A cash register is added with a pairing code from the server and removed by revoking on the server; takings, turnover and closings of a removed cash register stay in the books.",\r
"Cash registers and kiosks are changed by a computer in processing mode (main or admin).",\r
"Registers and stores",\r
"Cash registers and Manager",\r
"Cash registers moving to the kiosk",\r
"Cash registers with a pairing code, kiosk and working hours in the company register require server 0.5.2 and IRIS Admin 0.3.1 at the publisher. Cash register 1.5.2 applies the kiosk's Sunday mode and the working hours from the package.",\r
"Cash registers were not loaded from the server: {0}",\r
"Live cash registers",\r
"Cash registers live — latest receipts: {0} · {1}",\r
"Cash registers live — cash register overview",\r
"Cash registers live — turnover by item: {0} · {1}",\r
"Cashier",\r
"Late",\r
"Late (days)",\r
"{0} d late",\r
"Overdue 1–30 days",\r
"Overdue 30–60 days",\r
"Overdue 31–60 days",\r
"Overdue 61–90 days",\r
"Overdue by more than 60 days",\r
"Overdue over 90 days",\r
"late reporting",\r
"Later",\r
"Late arrival or early departure without permission (up to 3 times a month)",\r
"late",\r
"Catalogue of violations of work duty (goes into the Rulebook and contracts)",\r
"catalogue: —",\r
"Category",\r
"The category that applies for",\r
"Category valid for {0}",\r
"Category for {0} (Art. 7 of Law 84/25)",\r
"Fine % of salary (",\r
"The fine has already been deducted from salary. The deductions must first be removed from the payroll.",\r
"The fine has already been deducted for {0} month(s), and it was imposed for {1} month(s).",\r
"The fine is deducted from salary, not from a separate (IQOS) payroll.",\r
"The fine is deducted only after the decision has been made and delivered to the employee.",\r
"Fines and penalties (not tax-deductible)",\r
"Penalties in payroll",\r
"KB",\r
"KENT",\r
"KEPU",\r
"KEPU - Turnover records ledger",\r
"KEPU",\r
"KG",\r
"KIF",\r
"KIF, KUF, VAT return, tax card",\r
"Peanuts",\r
"Kiosks",\r
"kiosk",\r
"Kiosk",\r
"Kiosk \\"{0}\\"",\r
"Kiosk \\"{0}\\" was opened.{1}{2} Goods allowed on Sundays and holidays are selected in \\"Set up kiosk\\".",\r
"Kiosk \\"{0}\\" was saved.{1}{2}",\r
"kiosk (in a store)",\r
"Kiosk {0}",\r
"A kiosk is a retail point of sale and is opened under a retail outlet.",\r
"The kiosk was opened in Accounting; the company register on the server was not changed: {0}",\r
"A kiosk is a separate point of sale (Art. 15 para. 2 of the Domestic Trade Act): a separate business premises registered with the Tax Administration, its own cash register and trade records. Goods arrive by internal transfer from the parent store.",\r
"A kiosk is a separate point of sale next to a store: its own business premises code (PJ), its own cash register and trade records (EM); goods arrive by internal transfer from the parent store. On Sundays and holidays the kiosk cash register sells only selected goods (Art. 35b of the Domestic Trade Act).",\r
"A kiosk is a separate point of sale: the Tax Administration assigns the kiosk's business premises (PJ) code when the business premises is registered. The kiosk's cash registers fiscalise receipts under that code.",\r
"The kiosk has been entered in the company register on the server (outlet {0}).",\r
"The kiosk has no business premises (PJ) code.",\r
"The kiosk has no active cash register.",\r
"A kiosk is opened under a store, not under another kiosk.",\r
"Kiosk next to a store…",\r
"Sauerkraut in bulk",\r
"class",\r
"Classes, groups and three-digit accounts come from the Rulebook on the chart of accounts of Montenegro (Official Gazette of Montenegro 11/20) and are mandatory. Analytical accounts (4+ digits) are added by the program and the user; partner, store and bank account are kept as item dimensions, not in the account number.",\r
"classic Outlook",\r
"class",\r
"non-competition clause (",\r
"Click",\r
"Click — change the day (swap, add, hours)",\r
"click — worked this Sunday",\r
"Click on a cell — adding by clicking a name, swap, actual hours. Click on a name in the \\"Day off\\" column — the employee joins the shift. ✎ next to the store name — working hours.",\r
"Clicking an invoice opens the overview and correction of the payments linked to it.",\r
"Clicking an invoice opens manual linking and unlinking of payments.",\r
"Click on a name: the employee joins this shift.",\r
"Click a receipt to show its items.",\r
"Click a row to open the document.",\r
"Clicking a row opens the item's pharmaceutical data. An item is entered as a medicine by searching all register items (the search field). The data reaches the registers with the next price list; the register dispenses a prescription (Rx) medicine only with a prescription and a logged-in pharmacist.",\r
"Click removes the item from the excluded ones.",\r
"Click to confirm the week of this store",\r
"Click: change the schedule of that day",\r
"click: enter into the first shift",\r
"Click: employee requests for this month — day off, leave, preferred shift in the week, work in another store. They are taken into account in automatic scheduling.",\r
"Click",\r
"Key",\r
"Key",\r
"Company key",\r
"company key · paired device",\r
"company key · administrator device",\r
"Allocation key",\r
"The allocation key has not been selected (by value, quantity or weight).",\r
"knj.datumKnjizenjaUnos",\r
"knj.server.bazaUredjaja",\r
"knj.server.firmeUredjaja",\r
"knj.server.opisiSnimka",\r
"knj.server.zigKopije",\r
"knj.server.zigSnimka",\r
"knj.servis.saljiGreske",\r
"knj.updateAuto",\r
"knj.updateFeed",\r
"Knjig_backup → Arhiva → company → year",\r
"Book qty",\r
"The book for {0} is closed ({1} outlets, {2} pages). PDF: {3} · for certification: {4}{5}",\r
"The book for {0} is closed. The opening balance cannot be changed.",\r
"Ledger {0}. is closed when all 12 months are closed. Not closed: {1}.",\r
"Advance ledger (I-RAČ)",\r
"Domestic guest book",\r
"Guest book",\r
"SALES LEDGER (I-RAČ)",\r
"Sales ledger for advance payments (I-RAČ, 15 columns):",\r
"SALES LEDGER FOR ADVANCES (I-RAČ)",\r
"Sales ledger (I-RAČ)",\r
"The ledger is closed and protected from changes. Total pages of the saved ledger: {0}.",\r
"The book has no opening balance 01.01.",\r
"PURCHASE LEDGER OF RECEIVED (INPUT) INVOICES",\r
"PURCHASE LEDGER (U-RAČ)",\r
"The ledger is populated by this date. For an earlier invoice posted later: the current date or the last day of the month the invoice belongs to.",\r
"The book is kept",\r
"Foreign guest book",\r
"The book for",\r
"knjiga; slikovnica; roman; enciklopedija; rjecnik; bojanka",\r
"Ledgers / documents",\r
"Books and serial publications",\r
"Sales and purchase ledgers (I-RAČ, U-RAČ) — 5 years (VAT Act, Art. 54)",\r
"The ledgers show all invoices by invoice date in the selected period, regardless of the date of receipt. The regulation requires the date of receipt (VAT Act Art. 37 para. 7): \\"Date of receipt (by law)\\".",\r
"The ledgers are kept on the basis of \\"Invoice date\\", while the regulation requires \\"Date of receipt (by law)\\" (the \\"Period by date\\" switch).",\r
"Purchase ledgers (KPR, U-RAČ), PR-PDV field 19, the trade ledger and the stock list are kept by the date of receipt, i.e. in the month in which the goods and the invoice were received (VAT Act Art. 37 para. 7).",\r
"Purchase ledgers and PR-PDV field 19 are kept by",\r
"Book stock in the unit on the delivery date",\r
"Book stock at the outlet on the issue date",\r
"Accounting",\r
"Accounting — company price list",\r
"Accounting → Register price list → Exchange and Excel → \\"Import code list from Excel…\\" (the company's main computer, with PIN).",\r
"Accounting database",\r
"Knjigovodstvo-Updater",\r
"Posting (balances):",\r
"The posting was cancelled: the payment was deleted and the transaction is waiting for posting again. The supplier is selected again at the next posting.",\r
"Posting has been cancelled. The minus costing sheet has been deleted.",\r
"The posting was not cancelled. {0}",\r
"Posting in progress…",\r
"Posting…",\r
"Posted",\r
"posted)",\r
"Posts bank statements, supplier payments and collections from customers; reconciles ledger cards with suppliers.",\r
"Posted in",\r
"credit note",\r
"credit note",\r
"Credit note (supplier credit).",\r
"Credit notes",\r
"Credit notes applied to {0} invoices ({1} EUR).",\r
"credit notes",\r
"credit note",\r
"CREDIT NOTE",\r
"Credit note",\r
"CREDIT NOTE",\r
"Credit note {0}",\r
"Credit note {0} — {1}",\r
"credit note {0} (invoice {1})",\r
"Credit note {0} per receipt {1}",\r
"Credit note {0} on receipt {1}{2}",\r
"Credit note / debit note",\r
"The credit note has been deleted.",\r
"The credit note has been saved.",\r
"The credit note has been saved. The credit note awaits the customer's notice.",\r
"Credit note to customer",\r
"Credit note to a VAT-registered customer: VAT until the customer's written notification (VAT Act Art. 20 para. 9)",\r
"Book stock",\r
"Ko",\r
"supplier credit note — check in the costing sheets",\r
"Who paid us and whom we paid —",\r
"KO-{0}-{1}",\r
"For",\r
"KOD",\r
"at {0}",\r
"Code {0} has been deleted from item \\"{1}\\".",\r
"The code {stari} is also the barcode of the item \\"{drugi}\\". Delete it from this item?",\r
"The code is given by the IRIS CORVINA administrator (12 characters, valid for 48 hours). The connection is valid for",\r
"At the supplier",\r
"ENU code",\r
"ENU code",\r
"ENU code (for invoices)",\r
"The ENU code is not registered, is not active or does not belong to this company.",\r
"The code has a character that a barcode cannot have (digits, letters, dot and hyphen are allowed; up to 32 characters). Scan the barcode from the product and add it to the item, and remove this code in the item form.",\r
"The code has been copied.",\r
"Cash register code (ENU)",\r
"The cash register code (ENU) is required.",\r
"Cash register code (ENU): letters, digits, dot, hyphen and underscore, at most 40 characters.",\r
"On our side",\r
"On our side there are {0} items (payments/invoices) that are not on your ledger card — we will send the list on request.",\r
"The maintainer code does not match the active maintainer.",\r
"Software maintainer code",\r
"business premises code",\r
"Business premises code",\r
"Business premises code (PJ)",\r
"The kiosk's business premises (PJ) code is required.",\r
"The kiosk's business premises (PJ) code is required. {0}",\r
"The business premises code is longer than 40 characters.",\r
"The business premises code does not belong to an active business unit.",\r
"Business premises code of the outlet at the Tax Administration.",\r
"At recipient",\r
"With recipient (qty)",\r
"At your domain registrar (e.g. domain.me) create a CNAME DNS record: name \\"meni\\" (or whichever you want) → value {0}.",\r
"The code is shown only now; the server stores only its fingerprint.",\r
"software code",\r
"Software code",\r
"software code",\r
"software code {0} belongs to another cash register program; IRIS uses the IRIS software code",\r
"The software code does not match the active software. Check the code in Settings.",\r
"The code for cash register {0} was not created. {1}",\r
"The code for Manager has been created and is valid until {0}.",\r
"Pairing code",\r
"The pairing code is provided by the IRIS CORVINA administrator. The program downloads the company data (name, PIB, address, VAT number, outlets and cash registers) and creates the company database, with no manual entry.",\r
"The pairing code is required (assigned by the IRIS CORVINA administrator).",\r
"The pairing code is required (assigned by the server administrator).",\r
"Cash register pairing code",\r
"The pairing code for cash register {0} was created.",\r
"Code for pairing the cash register with the server (the cash register stays in the list).",\r
"Manager pairing code",\r
"The pairing code was not created.",\r
"The pairing code is valid from 1 to 48 hours and only once.",\r
"with a code from the server",\r
"Codes awaiting pairing",\r
"Codes from the EFI portal",\r
"Codes are copied from",\r
"Codes saved.",\r
"Pairing codes were not cancelled: {0}",\r
"Coefficient",\r
"which role is posted to which account",\r
"that applies",\r
"announced by the server on the network",\r
"Qty",\r
"Industrial cake",\r
"Kolašin",\r
"Quantity",\r
"Quantity",\r
"The quantity {0} looks like a barcode scanned into the quantity field and was not entered. The actual quantity must be entered.",\r
"quantity 0",\r
"The quantity looks like a barcode scanned into the quantity field and has not been entered.",\r
"the quantity is negative",\r
"The quantity is required.",\r
"Quantity must be greater than zero.",\r
"Quantity cannot be negative.",\r
"quantity not entered",\r
"Quantity is not entered: {0}.",\r
"The return quantity has not been entered.",\r
"Quantity for \\"{0}\\" (entered as free text):",\r
"Kolicina*ProdajnaCijenaBezPdv",\r
"quantities and prices do not change",\r
"Quantity price",\r
"how many",\r
"How many people must be in each shift",\r
"How many Sundays worked",\r
"The column \\"{0}\\" was not recognised and was not loaded.",\r
"The \\"Šifra\\" column of existing items and the hidden \\"Otisak\\" column.",\r
"column 7 — opening balance",\r
"balance column (signed amount per row)",\r
"balance column, opening balance from the footer skipped",\r
"pcs",\r
"KOM",\r
"Pieces",\r
"Pieces {0}",\r
"Komada u pakovanju",\r
"Limited partnership",\r
"Assigned to",\r
"Committee (names, separated by commas)",\r
"compact",\r
"Set-off",\r
"offset",\r
"KOMPLET",\r
"KOMUNALIJA",\r
"Utilities",\r
"KOMUNALNIH",\r
"Final receipt",\r
"The final receipt has an IKOF. The advance is deducted before the receipt is issued.",\r
"The final receipt has an IKOF. The advance deduction cannot be cancelled.",\r
"The final receipt of the same customer, before issuing (fiscalization). The receipt carries PayMethod ADVANCE with the advance's IKOF.",\r
"The final receipt was issued to a different customer.",\r
"The final receipt has been cancelled.",\r
"The final receipt does not exist.",\r
"A final receipt is fiscally linked to one advance receipt (one ADVANCE payment method).",\r
"Concessions, patents, licences and similar rights",\r
"ACCOUNTS",\r
"Accounts 134",\r
"ACCOUNTS OF GROUP 134 — GOODS IN RETAIL",\r
"Contact",\r
"Contact and bank accounts",\r
"The contact has been saved.",\r
"Contact person",\r
"Contacts",\r
"Contacts for notifications and offers",\r
"Context \\"{0}\\": field not allowed or text too long.",\r
"The attached context must be an object {program, verzija, uloga, ekran}.",\r
"Chart of accounts 11/20, account 494 \\"Deferred related procurement costs\\"",\r
"Chart of accounts",\r
"CHART OF ACCOUNTS",\r
"Chart of accounts (analytical account)",\r
"Chart of accounts and schemes",\r
"Chart of accounts, journal vouchers, general ledger, trial balance",\r
"Account",\r
"Account (or prefix, e.g. 134) — Enter",\r
"Account {0} ({1}) does not exist. Row skipped.",\r
"Account {0} {1}",\r
"Account {0} has been confirmed. The payment enters the general ledger after the month is posted again.",\r
"Account {0} does not exist or is not posted to.",\r
"account {0} does not exist in the chart of accounts",\r
"Account {0} does not exist in the chart of accounts.",\r
"Account {0} already exists.",\r
"Account added.",\r
"The account does not exist.",\r
"No account entered.",\r
"The account is determined by the recipient's account (VAT, the single account for taxes and contributions per period from the reference number, municipal surtax, fines, fees). The program cannot classify these payments on its own: the account is chosen manually (a suggestion is made from the description) and confirmed, after which the month needs to be posted again.",\r
"Check",\r
"CONTROL KPR ↔ ACCOUNTS 134",\r
"Control against KPR:",\r
"The check does not match; the statement was not entered in the Bank. The items need to be compared with the PDF and the correct ones marked (none is marked automatically):",\r
"Rate check: the sum of 51a–c does not agree with the progressive calculation. A check is needed.",\r
"The total control check does not match; manual import required (Obligations → Statement import): {0}",\r
"The sum check does not match. The amounts may have been read incorrectly. The statement was not entered in the Bank and no item is marked; the items need to be compared with the statement and the correct ones marked. {0} ({1})",\r
"control: {0} orders, the totals and the number of orders match the statement",\r
"Check: 134000 − 134001 − 134002 = purchase value in negative; counter-entry 5771 (expenses from the write-off of goods). Debit = Credit.",\r
"Check: 134000 − 134001 − 134002 = purchase value in negative; counter-entry 5771. Debit = Credit.",\r
"Check: amount from the invoice (incl. VAT)",\r
"Check: imported sales versus daily takings",\r
"Check: the sum of the items read ({0}) = the printed balance on the card ({1}). The card has been read in full.",\r
"Check: the sum of the items read {0} ≠ the printed balance {1}. Part of the card may not have been read; review the unrecognised rows or enter the table by copying.",\r
"Checks are not possible: {0}",\r
"The controls do not match:\\n\\n{0}\\n\\nSave the takings despite the differences?",\r
"The controls do not match. The fields need to be corrected according to the paper, or the photo retaken if the image is unclear.",\r
"Checks for",\r
"Checks daily takings, cash register X reports, stocktakes and shortages.",\r
"The check (last) digit of the JMBG does not match the other digits. Some digits may have been swapped.",\r
"The check digit does not match. Verify the data against the document.",\r
"Control stocktake from Manager",\r
"The package checksum is not valid. The update was rejected.",\r
"The package checksum does not match — the download was refused.",\r
"Control stocktakes in the exchange: {0} (from {1} Manager devices).",\r
"canned",\r
"Copy",\r
"Copy (optional)",\r
"The database copy is read-only; it is opened in the program (Settings → Backup → import copy) or the same reports are made from it.",\r
"The database copy has been saved: {0}",\r
"Database copy before cleanup: {0}.",\r
"A copy of the database is made in Settings → Backup and kept in a safe place.",\r
"Copy of the database outside the computer",\r
"A copy of document {0} was created as draft {1}.{2}",\r
"Copy of document {0}.",\r
"The copy has been saved to the folder: {0} ({1} MB).",\r
"A copy of delivery note {0} has been created: {1}.",\r
"A copy of the existing database was not made, so the import was aborted: {0}",\r
"the copy cannot be read",\r
"copy:",\r
"The copy of the database should be downloaded and kept in a safe place (Google Drive, computer…).",\r
"The main computer makes the copy by itself, once a day (while the program is open and the backup folder is selected); the last {0} days are kept.",\r
"Copy",\r
"Copy entire registration",\r
"Copying failed.",\r
"Copying failed. The code must be copied manually from the screen.",\r
"Copied",\r
"Corrective",\r
"corrective receipt awaiting sending",\r
"corrective receipt fiscalized",\r
"Corrective receipt",\r
"Corrective invoice {0} has been issued and fiscalized. The original has been cancelled.",\r
"The corrective receipt for the advance is waiting to be sent: {0}",\r
"The corrective receipt for the advance has an IKOF. Deleting the invoice is not possible.",\r
"The corrective receipt for the advance has an IKOF. The deduction cannot be cancelled.",\r
"The corrective receipt for the advance has been fiscalized.",\r
"The corrective receipt was issued (IKOF {0}), but saving to the server failed. Retry the save.",\r
"The corrective receipt is not a final receipt for the advance.",\r
"A corrective receipt cannot be copied.",\r
"Using a mobile phone for private purposes while serving customers",\r
"Use of VAT overpayment from the previous period (VAT credit)",\r
"Username",\r
"User",\r
"User {0} ({1}){2}",\r
"The user has no right to change prices for {mjesto}.",\r
"in use",\r
"The default printer from Windows is used.",\r
"Used only for registration.",\r
"Stone fruit: apricots, peaches, cherries and sour cherries",\r
"Kotor",\r
"KOTOR",\r
"Cosmetic and hygiene products",\r
"kp.MarketID",\r
"KPP",\r
"KPP — Turnover ledger",\r
"KPR",\r
"KPR · KIF · EDI · KPP · KEPU · PR-PDV — on-screen view + export to Excel and PDF",\r
"KPR excl. VAT",\r
"KPR, KIF, PR-PDV",\r
"end of day",\r
"The end of the period is before the start.",\r
"Shift end (24 h; earlier than the start = passes midnight, e.g. 01:00)",\r
"Closing stock of goods",\r
"Closing stock of goods (stocktake from 31.12.",\r
"short code",\r
"SHORT-TERM RECEIVABLES, INVESTMENTS AND CASH",\r
"SHORT-TERM FINANCIAL LIABILITIES",\r
"SHORT-TERM FINANCIAL INVESTMENTS",\r
"Short-term loans and investments - parent and subsidiary entities",\r
"Short-term loans and investments - other related entities",\r
"Short-term loans from parent and subsidiary entities",\r
"Short-term loans from other related entities",\r
"Short-term loans abroad",\r
"Short-term domestic loans",\r
"Create",\r
"The cryptographic signature is not valid. The certificate needs to be checked.",\r
"Early potatoes and carrots, celery and parsley",\r
"Potatoes, carrots, onions",\r
"exchange cycle",\r
"Exchange cycle: {0}",\r
"server cycle",\r
"Server cycle: {0}",\r
"ks.Kolicina*ks.ProdajnaCijenaBezPdv",\r
"ks.MarzaProcenat",\r
"ks.ProdajnaCijenaBezPdv",\r
"House or apartment",\r
"KUF",\r
"customer",\r
"Customer",\r
"Customer \\"{0}\\" has been added and marked for the registers.",\r
"Customer (company) on the receipt",\r
"A customer without a phone number cannot be sent to cash registers. The cash register recognizes the customer by phone number.",\r
"The customer has issued documents. Deletion is not possible.",\r
"The customer has delivery notes or equipment issue forms. Deletion is not possible.",\r
"Customer from the code list or a freely entered recipient",\r
"The customer is VAT-registered: output VAT is reduced in the month the customer's written notice is received.",\r
"Customer on the receipt: {0}{1}.",\r
"The customer does not exist.",\r
"The customer is not selected.",\r
"The customer was not found.",\r
"The customer is not VAT-registered: output VAT is reduced in the month of the credit note.",\r
"The customer is not VAT-registered. The notification is not entered.",\r
"Customer is VAT-registered: output VAT is reduced in the month the customer's written notice is received (VAT Act Art. 20 para. 9)",\r
"customer with PIB {0} does not exist",\r
"Customer PIB {0} is not in the code list (account {1}). The item was entered without a partner.",\r
"A customer with PIB {0} already exists and can be marked in the list.",\r
"The payer of the payment is required.",\r
"Customer: {0}{1}{2}",\r
"customer",\r
"Customers - parent and subsidiary entities",\r
"Customers - other related entities",\r
"Customers (invoices)",\r
"Customers (loyalty)",\r
"Customers abroad",\r
"Domestic customers",\r
"customer",\r
"Purchase (in use)",\r
"Cabbage, kale, chard, fresh lettuce",\r
"KV — skilled (III)",\r
"Square image: program header, company selection, Cash register and Manager. An image that is not square is fitted into a square.",\r
"Qualification",\r
"Fault \\"{0}\\" — {1} ({2})",\r
"Defect / faulty",\r
"Faults",\r
"Quarter",\r
"Quota {0} must be a whole number ≥ 0 or null (unlimited).",\r
"Quotas are required.",\r
"kz.MarketID",\r
"l.KasaSifra IS NOT NULL",\r
"label",\r
"STOCK LIST — STOCK BY ITEM",\r
"Stock list (stock by item)",\r
"A stock list from another program,",\r
"Stock is not shown for outlets without sales by item from the cash register: {0}.",\r
"Stock per item and item card · stock by store · stocktake · price revaluation (price changes) · opening stock of goods · sales by item without an IRIS cash register",\r
"stock list, stocktake",\r
"minor",\r
"Minor violations",\r
"Chain",\r
"The certificate chain is not valid.",\r
"LD",\r
"beds",\r
"Beds",\r
"li",\r
"persons",\r
"person",\r
"Person responsible for preparing the statements",\r
"Person responsible for preparation: ________________ Responsible person: {0}",\r
"Person with disability",\r
"person with a disability ({0})",\r
"person with a disability (rulebook)",\r
"Person with severe sensory or physical disabilities",\r
"Licence",\r
"Licence (optional)",\r
"Licence {0} · {1} · {2} · modules {3}{4}{5}",\r
"Licence {0} expires {1} (in {2} {3}).",\r
"Licence {0} expired {1} The program will keep working for {2} {3}. The licence needs to be extended.",\r
"Licence {0} expired {1} The program works only for reading and exporting data. The licence needs to be extended.",\r
"Licence {0} was revoked {1} The program works only for reading and exporting data.",\r
"Licence {0} has been suspended since {1} The program works only for reading and exporting data until the suspension is lifted.",\r
"Licence {0} is already loaded.",\r
"Licence {0} does not include the Accounting module. The program works only for reading and exporting data.",\r
"Licence {0} is not valid. The program works only for reading and exporting data.",\r
"Licence {0} is valid without an end date.",\r
"Licence {0} is valid until {1}",\r
"The licence has been verified, but the IRIS CORVINA server issues a different licence for this company. The licence from the server applies.",\r
"Licence loaded: {0}",\r
"The licence has been loaded.",\r
"The licence is for the company with PIB {0}, but the company with PIB {1} is open.",\r
"The licence is not valid: {0}",\r
"The licence is not an object.",\r
"The licence cannot be saved on this device.",\r
"licence: {0} package",\r
"licence: Chain package",\r
"Licences of the libraries used",\r
"ID card",\r
"ID card (ID)",\r
"The guests' personal data is viewed and entered by reception.",\r
"The guests' personal data is viewed by a user with that authorisation.",\r
"LICNI",\r
"Personal data",\r
"Personal data was deleted after the retention period expired.",\r
"Medicine",\r
"Medicine (name, code, INN, ATC)",\r
"medicine {0}",\r
"Medicine {0} has been saved. The data reaches the registers with the next price list.",\r
"medicine:",\r
"Medicine: {0} ({1})",\r
"Pasting from memory failed. The text can be pasted manually into the field below.",\r
"Limit",\r
"LIMIT {0}",\r
"The limit for \\"{0}\\" is now {1}.",\r
"The link has no CA fingerprint of the local server. The fingerprint is read with the \\"Read fingerprint\\" button and compared with the IRIS Server program.",\r
"The link is not a pairing link from IRIS Admin (iris://upari?s=…&k=…&o=…).",\r
"Pairing link from IRIS Admin (optional)",\r
"Sheet",\r
"The \\"Artikli\\" sheet has no \\"Šifra\\" and \\"Naziv artikla\\" columns.",\r
"The \\"Barkodovi\\" sheet has no \\"Šifra\\" and \\"Barkod\\" columns and was not loaded.",\r
"List",\r
"FZO List",\r
"The FZO list is not valid.",\r
"The list is osnovna, doplatna or empty.",\r
"FZO medicines list",\r
"Medicines",\r
"Medicines",\r
"Medicines whose row was not found in the new report: {0} (the link has been removed, the entered price stays).",\r
"the shell does not support it.",\r
"Spicy",\r
"LM",\r
"logo",\r
"Logo",\r
"Company logo and emblem",\r
"No logo has been set.",\r
"Location",\r
"Company's local IRIS server (instead of the IRIS CORVINA server)",\r
"The local IRIS server runs on the company's computer (the IRIS Server program). The program accepts only a certificate signed by that server's CA; the CA fingerprint is remembered during pairing. The CA is not added to Windows.",\r
"The company's local server works only on an https:// address.",\r
"The company's local server requires a confirmed CA fingerprint: the pairing link from IRIS Admin, a network search, or \\"Read fingerprint\\" with a comparison against the IRIS Server program overview screen.",\r
"breakage",\r
"Breakage / spillage",\r
"Lovćen banka",\r
"Password",\r
"The password has been deleted from this computer.",\r
"The password is too long.",\r
"The account password has not been entered on this computer (Settings → E-mail).",\r
"The password is entered in the Windows program (new installation).",\r
"Certificate password",\r
"LS",\r
"LUCKY STRIKE",\r
"Lupin",\r
"m.MarketID IN ({0})",\r
"Warehouse",\r
"Warehouse worker",\r
"Master / specialist (VII-2)",\r
"MAGUD COMPANY D.O.O.",\r
"MAGUD COMPANY DOO",\r
"May",\r
"May",\r
"May",\r
"Poppy seed and wheat bran",\r
"Small hotel",\r
"small",\r
"retail",\r
"Retail",\r
"Retail price incl. VAT. It can be entered directly; the margin is derived from it.",\r
"of the retail percentage. For goods not in the table, the taxpayer's norm is used. The loss is determined by stocktake/committee (record).",\r
"shortage",\r
"Shortage (stocktake)",\r
"Shortage on invoices",\r
"Shortage after credit notes",\r
"Goods shortage",\r
"Goods shortage per stocktake (purchase value)",\r
"Unjustified shortage in the register or goods",\r
"fewer",\r
"Shortages",\r
"Shortages of materials and goods",\r
"Goods shortages",\r
"The MAPR response is not valid JSON.",\r
"store",\r
"Store",\r
"Store \\"{0}\\"",\r
"The store \\"{0}\\" from the cash register does not exist in the accounting program. The store must be added or renamed.",\r
"The store \\"{0}\\" is deactivated in this company. Select an active store.",\r
"Store \\"{0}\\" has been added.",\r
"store \\"{0}\\" does not exist",\r
"Store \\"{0}\\" does not exist on the main computer.",\r
"The store \\"{0}\\" does not exist in Accounting.",\r
"The store \\"{0}\\" does not exist in the program (location \\"{1}\\").",\r
"Store \\"{0}\\" does not exist. The item was entered without a store.",\r
"Store \\"{0}\\" works only according to its own shifts",\r
"The store \\"{0}\\" already exists.",\r
"The \\"from\\" store and the \\"to\\" store are required.",\r
"Store (outlet)",\r
"Store (optional)",\r
"Store (for shifts)",\r
"store {0}",\r
"Store {0}",\r
"Store / cash register",\r
"Store / unit",\r
"The store whose week is being confirmed has not been selected.",\r
"Store and amount are required.",\r
"The store has {0} shifts. Shift number {1} does not exist.",\r
"The source and destination stores must not be the same.",\r
"the store has not arrived yet",\r
"the store has not arrived yet ({0})",\r
"The store uses shared shifts. Saving gives it its own working hours.",\r
"The store does not exist in this company. Select a store from the list.",\r
"The store has no shifts. The store's working hours must be set.",\r
"The store has no shifts. Shifts are set on the \\"Store working hours\\" tab.",\r
"Store not selected",\r
"No store selected. Stock is kept by point of sale.",\r
"No store selected. Stores are added in Settings.",\r
"store not entered",\r
"the employee's store has not arrived yet ({0})",\r
"Store mismatch: the Manager sends \\"{0}\\" (code {1}), but under that code Accounting has \\"{2}\\". Check whether the Manager works with this company, then run \\"↻ repeat\\".",\r
"the shift's store has not arrived yet ({0})",\r
"The store where the employee works — the lists in the shift schedule are arranged by it. \\"Replacement\\" = no permanent store, covers days off. Does not affect the salary calculation.",\r
"The store where the employee works — the lists in the shift schedule are arranged by it. Does not affect the salary calculation.",\r
"The store where the employee works in that period has not been selected.",\r
"The store for which the schedule is made has not been selected.",\r
"The store for the write-off is not selected.",\r
"Store: {0}",\r
"stores with their own prices,",\r
"Stores",\r
"MarketID IS NULL",\r
"store",\r
"MARLBORO",\r
"March",\r
"March",\r
"March",\r
"Margin",\r
"Margin (%) for this scan. When the supplier has a previous costing sheet, processing still takes the margin from it.",\r
"margin {0} %",\r
"Margin {0} % has been written to {1} costing sheets ({2} items).{3}{4}{5}{6}{7} The costing sheets are ready to be generated (PDF / Excel) or printed.",\r
"Margin % on cost",\r
"margin below 0 (selling below purchase price)",\r
"Margin from existing data entered for {0} items",\r
"The margin has been applied. Selling prices have been recalculated.",\r
"Costing margin",\r
"The margin must be a number (e.g. 25 or 22,5).",\r
"The margin must be between {0} % and {1} %.",\r
"Margin was not changed: {0}",\r
"The margin was not changed. {0}",\r
"margin above 200 %, entry must be checked",\r
"Recipient margin %",\r
"Margin now",\r
"Margin now %",\r
"The margin is entered for each line separately. The selling price is recalculated immediately upon applying.",\r
"Scan margin",\r
"Actual margin",\r
"Margin for this scan (a scan with an error goes back into processing)",\r
"Margins per line —",\r
"Margins per item (cigarettes)",\r
"Per-line margins have been applied. Selling prices have been recalculated.",\r
"Margins taken from history:",\r
"margin",\r
"Fat",\r
"Edible lard",\r
"Materials",\r
"MATERIJAL",\r
"MATERIALS AND GOODS",\r
"MATERIJALA",\r
"Financial liability for goods in the warehouse; computer skills (receipt and issue); category B driving licence if needed.",\r
"Inventory accounting",\r
"home",\r
"Registration number",\r
"Registration number: {0}",\r
"Parent store",\r
"The home store comes first; in another store the employee is a substitute.",\r
"The parent store does not exist.",\r
"Max prices CInMED",\r
"Max retail",\r
"Max retail incl. VAT (€)",\r
"Max wholesale",\r
"Max wholesale excl. VAT (€)",\r
"Max. zaliha",\r
"ME + PIB",\r
"ME",\r
"Honey",\r
"Molluscs",\r
"manager",\r
"Manager",\r
"Manager · {0}",\r
"Manager \\"{0}\\" is being disabled on the server and immediately loses its connection. Continue?",\r
"Manager (the owner's or store manager's phone or computer) receives company data from Accounting: stores, suppliers, items, received goods, daily takings, employees and shifts. It connects",\r
"Manager has closed stocktake {0}; the stocktake is ready to be finalised. After reviewing the stocktake list (and the subtotal per device), it is finalised at purchase or selling price.",\r
"The Manager remembered a barcode for an item that was not found in the code list. The barcode is linked to an item by choosing one in the row, or it stays as it is.",\r
"Retail manager",\r
"Manager suggests",\r
"Manager connects from the accounting computer (processing mode: main or admin).",\r
"The Manager connects only from the accounting computer (processing mode).",\r
"Company Manager devices: {0} · codes awaiting pairing: {1} · loaded {2}",\r
"Company Manager devices",\r
"Manager devices from the server were not loaded: {0}",\r
"Manager closed — ready for finalising",\r
"Manager closed {0}",\r
"Menu",\r
"The menu has not yet been published from any register.",\r
"The menu has not been published yet. The QR menu is enabled on the outlet's main cash register.",\r
"Menu for guests at tables: names and descriptions in 8 languages, allergens, pictures, groups, own domain, table addresses",\r
"Menu: {0} {1}, {2} items",\r
"Menstrual products",\r
"Meat and fish",\r
"Meat and fresh fish",\r
"Fresh meat",\r
"Method:",\r
"Changes the margin on all costing sheets in the selection (except cigarettes, the locked period and write-offs)",\r
"is changed (",\r
"Document number changes:",\r
"Costing sheet number changes:",\r
"The prescribed MPC of cigarettes \\"{0}\\" is being changed: {1} → {2}.\\n\\nThe price is set by the manufacturer or importer (Excise Act, Art. 50). Confirm only if a new price has been published.\\n\\nChange the prescribed price?",\r
"The books of these unlocked months change: {0}. If any of them has already been submitted, PR-PDV and the books will no longer match the submitted one.",\r
"changed after export",\r
"Changed after the export",\r
"micro",\r
"MICRO",\r
"milostDana: 0–90.",\r
"MIME-Version: 1.0",\r
"min",\r
"min, access is not allowed. The response is recorded in the program log.",\r
"Min. stock",\r
"Min. stock changed.",\r
"Minimum net earnings (EUR) — warning",\r
"Minimum net earnings for qualification level VI and above (EUR) — warning",\r
"minmax(46px, 1fr)",\r
"minmax(92px, max-content) repeat({0}, {1})",\r
"Seniority pay",\r
"Seniority bonus — scheme by periods",\r
"Seniority pay from {0}: {1}",\r
"Seniority bonus from {0}: {1}. Open calculations are recalculated with the \\"Calculate all\\" button.",\r
"Seniority pay in this payroll:",\r
"Seniority pay, brackets: % per year of service up to limit 1",\r
"Seniority pay, brackets: % per year of service between limit 1 and 2",\r
"Seniority pay, brackets: % per year of service above limit 2",\r
"Seniority pay, brackets: limit 1 (years of service)",\r
"Seniority pay, brackets: limit 2 (years of service)",\r
"Seniority pay, \\"flat\\" scheme: % for each year of service",\r
"Negative costing sheet (write-off posting)",\r
"Negative costing sheet (write-off)",\r
"negative write-off costing sheets ({0})",\r
"mo.; enforcement within",\r
"mo.; serious:",\r
"Measure",\r
"No measure selected.",\r
"No measure selected. Selecting a measure is required before the decision is made.",\r
"month",\r
"Month",\r
"MONTH",\r
"The month {0} was locked before the basis for 0 % was introduced. All 0 % turnover is in field 14.",\r
"The month {0} is locked. The split of 0 % turnover is from the snapshot of {1}",\r
"month {0}/{1} is locked; entry is not possible",\r
"month {0}/{1} is locked; entering daily takings is not possible",\r
"Month {0}/{1} is locked. Journal vouchers cannot be changed.",\r
"The month {0}/{1} is locked. Moving a voucher into that month is not possible.",\r
"Month {0}/{1} is locked. Entry is not possible.",\r
"Month {0}/{1} cannot be locked: {2}. List: Forms → PR-PDV. The breakdown by rates is entered from the Z report (Takings entry).",\r
"Payout month",\r
"The month approved by the accountant is locked; changes are no longer possible and late invoices go to the current period.",\r
"Month to be locked",\r
"the voucher's month is locked here",\r
"the voucher's month is locked",\r
"The month is not valid (format YYYY-MM).",\r
"The month is not valid.",\r
"month not locked",\r
"The month from which the receipt date applies is not valid (YYYY-MM expected).",\r
"The write-off month ({0}) is locked. To post, the write-off date must be in an open month, or the month must be unlocked with the accountant's consent.",\r
"Month by store (advanced)",\r
"month in the books",\r
"month locked — return ready",\r
"Month of the summary expense voucher",\r
"of the payout month as a row with code",\r
"months of initiation (",\r
"months of learning of it) →",\r
"months",\r
"Months (",\r
"months → termination of employment.",\r
"Months have not been posted: {0}.",\r
"Months with documents that have not been posted:",\r
"months",\r
"Monthly rent (EUR) *",\r
"The monthly rent of {0} EUR is included in the calculation and IOPPD every month while the contract is valid. An annual or one-off (prepaid) lease is entered here as 0, and the amount paid is entered in the month of payment (click on the lessor in that month's calculation).",\r
"Monthly report due by (day of month)",\r
"NLB monthly report for personal accounts (private individual), not a company account statement. The report is not imported. Another person's account is marked in Mail as \\"not ours\\".",\r
"Monthly tourist tax report",\r
"The monthly tourist tax report for {0} is due by {1}",\r
"Monthly payroll",\r
"Monthly VAT calculation: liability to pay (difference)",\r
"Monthly VAT calculation: overpayment / receivable",\r
"Monthly payroll under Montenegrin regulations · employees · rent and service contracts · IOPPD return and payslips",\r
"The monthly schedule is a proposal. A week becomes valid when confirmed (✔). It is then locked and its hours enter the shift-based payroll calculation.",\r
"Monthly archives",\r
"Monthly",\r
"monthly (sum in the month; 0 = no limit)",\r
"Monthly: rent (gross)",\r
"month",\r
"month, but received (recorded) in",\r
"month, but recorded after the lock, so they enter the current month's book (a locked book is not changed). The list is for review.",\r
"mixed",\r
"places",\r
"Locations \\"{0}\\" and \\"{1}\\" are linked to the same store.",\r
"Places and tables",\r
"The outlets have been linked. {0}.",\r
"place",\r
"Place",\r
"Place of delivery",\r
"Place of visa issue",\r
"The place has no price of its own; the general price applies.",\r
"The location has no price of its own.",\r
"the point is not linked to a store — prices are waiting",\r
"Place of work (outlet / city)",\r
"The place of work is {0}. The Employer's activity (retail trade) is carried out in several retail outlets, so the Employee may be assigned to work at another outlet of the Employer in the territory of the same municipality or at a distance of less than 60 km, with organized transport or reimbursement of transport costs, without a change in other working conditions ({1}); a temporary assignment due to an urgent need of the work process is made by written order for up to 30 days in 12 months ({2}). Work as an auxiliary worker at another outlet is recorded in the shift schedule and shown on the salary calculation.",\r
"place of birth",\r
"Place of birth",\r
"Place of entry",\r
"ML",\r
"under 18 years of age ({0})",\r
"Persons younger than this many years do not pay the tax.",\r
"Persons younger than this many years pay a reduced amount.",\r
"Milk and dairy products",\r
"Milk and dairy products",\r
"mlijeko; mleko; jogurt; kiselo mlijeko; kefir; bijeli sir; mladi sir",\r
"MNE",\r
"model {0}, payment reference number {1} ({2})",\r
"Payroll module: gross + employer contributions + non-taxable earnings",\r
"Modules: at least one of {0}.",\r
"possible duplicate entry: {0}",\r
"Possible duplicate payments:",\r
"Possible duplicate entry:\\n\\n{0}\\n\\nSave the takings?\\n\\nOK: the takings are saved.\\nCancel: not saved (same daily report).",\r
"Possible duplicate entries",\r
"Possible duplicate: {0}",\r
"My changes today",\r
"My requests",\r
"Mojkovac",\r
"Please confirm that you agree with the stated balance or send your objections within 8 days. An unconfirmed IOS is considered accepted.",\r
"Please confirm that you agree with the stated balance or send your ledger card with remarks within 8 days.",\r
"MONTE CARLO",\r
"MONTENEGRO",\r
"MOODS",\r
"Motel",\r
"motorn; masaz; suncanj; kosu; tijelo; etericn",\r
"can wait",\r
"Deductible",\r
"Can be changed later (Tax books).",\r
"Retail",\r
"Retail from wholesale →",\r
"MPC",\r
"Retail price (with VAT)",\r
"Sender's retail price",\r
"Recipient's retail price",\r
"Retail price incl. VAT",\r
"IAS/IFRS in accordance with the Accounting Law (Official Gazette of Montenegro 84/25) and the Rulebook on the chart of accounts (Official Gazette of Montenegro 11/20)",\r
"IFRS for SMEs (Art. 26 para. 2 of the Accounting Law, applicable from 01.01.2027)",\r
"MURATTI",\r
"male",\r
"MUSTANG",\r
"n.Broj",\r
"n.Status<>'storniran' AND n.Datum<=?",\r
"n.Vrsta IN ('PAZ','PS')",\r
"n.Vrsta='PAZ' AND n.Datum>?",\r
"n.Vrsta='PAZ' AND n.Datum>=?",\r
"to {0} {1}",\r
"Postings are not made to the {0} {1}. Select an account.",\r
"Posting to {0} is not allowed (class/group). Row skipped.",\r
"On Android, the update is installed by downloading the new version.",\r
"On Android, restoring a previous version is not possible without deleting data, because the system does not allow installing an older version over a newer one. The fix is published as a new version.",\r
"on a cell: empty → I → II → empty (Shift+click clears immediately). Sundays are orange — so you can quickly see and mark who worked on a Sunday (the \\"Sun\\" column). Shifts entered this way are manual (the program does not overwrite them). Add an employee who is not here (substitute, another store) above.",\r
"As of",\r
"as of {0}",\r
"As of {0}",\r
"{0} is already the holiday \\"{1}\\".",\r
"A holiday is already entered for {0}.",\r
"as at 31.12.{0}.",\r
"as at 31.12.{0}. · in EUR",\r
"On the day the contract is concluded, the Employee's entitlement is {0} working days per year.",\r
"{n} items on the invoice have no barcode.",\r
"On fiscal receipts",\r
"On the main register: Settings → QR menu → Address in QR code: \\"Own domain\\", then print the table codes again.",\r
"There is no import to undo on the main computer.",\r
"On an iPhone the phone itself reads the text from the image:",\r
"No goods on issue forms on the selected day.",\r
"there is no recipient account on the statement",\r
"on the cash register",\r
"At the register",\r
"Prices sent to the cash register: {0}.",\r
"Per how many paid (N)",\r
"the account has postings",\r
"There are postings on the account. Deletion is not possible; the account can only be deactivated.",\r
"For use",\r
"At the end of the shift prints an X report and hands in the daily takings with the daily report.",\r
"On the list",\r
"Indefinite term",\r
"The same employee is in both slots. The swap is not possible.",\r
"waiting to be processed: {0}",\r
"Fixed-term until (empty = indefinite)",\r
"Fixed term",\r
"Pursuant to Article 7 of the Accounting Law (Official Gazette of Montenegro no. 84/25), and based on data as at 31.12.{0}:",\r
"to the rest of the month {0} {1}",\r
"on this computer",\r
"on this computer and downloads attachments: bank statements, supplier ledger cards, invoices and scans.",\r
"On this device the document is sent through system sharing. The SMTP server is used in the Windows program.",\r
"There are no companies on this device. A company is created by entering the name of a new company or by importing an existing database.",\r
"No camera was found on this device.",\r
"A database \\"{0}\\" with a different PIB ({1}) already exists on this device. The database was not changed. Rename that database or contact support.",\r
"A connection to the server already exists on this device. If this company is in",\r
"No payment has been linked to this invoice yet.",\r
"On trial",\r
"On the office computer:",\r
"prescription-only",\r
"On equipment issue form",\r
"There are no goods with the recipient on the issue form.",\r
"The decision states",\r
"the server has {0} accommodation units",\r
"There are no sales outlets of this company on the server. Only the empty company data fields are filled in.",\r
"For service",\r
"To room",\r
"What the percentage is applied to: the store's turnover in the month (takings excl. VAT) or purchases posted to that store",\r
"At a station, airport or port",\r
"the entered discount percentage is applied to the line",\r
"for every N paid pieces, the customer gets the entered number of pieces free (2+1: N = 2, value = 1)",\r
"online",\r
"Connected · up to date · {0}",\r
"Connected · up to date",\r
"Purch.",\r
"Purch. price",\r
"Purch. price excl. VAT",\r
"purch. qty",\r
"Purch. value",\r
"Purchase",\r
"Procurement · OA · PD",\r
"Purchases · items marked as EXPENSE",\r
"Purchases (net)",\r
"Procurement and expenses",\r
"Procurement and expenses · OA · PD",\r
"purchases posted to the store",\r
"Purchase of materials",\r
"Purchase of FA",\r
"Purchase of FA / expense",\r
"Purchase of goods",\r
"Purchase of goods (excluding VAT)",\r
"store purchases in the month ({0} EUR)",\r
"purchases marked \\"without right to deduction\\" + manual addition",\r
"Purchased (pcs)",\r
"purchase",\r
"Purchase",\r
"Purchase (excl. VAT)",\r
"Purchase price excl. VAT",\r
"Purchase price",\r
"purchase price 0, RUC is the entire selling price",\r
"the purchase price is negative",\r
"The purchase price cannot be negative.",\r
"Purchase price of a receipt: invoice price excl. VAT reduced by the discount, increased by allocated dependent costs.",\r
"Purch. val.",\r
"Purchase value",\r
"cost value (EUR)",\r
"Cost of goods sold",\r
"COST OF GOODS SOLD",\r
"Purchase value of goods sold (COGS)",\r
"Cost of goods sold (stock reduction)",\r
"Cost of goods sold in retail",\r
"Cost of goods sold in wholesale",\r
"Cost of real estate sold that was acquired for sale",\r
"Cost of goods sold",\r
"Cost of goods sold = quantity sold × purchase price of the item's last receipt into the outlet up to the date of sale (costing sheet, transfer receipt, opening balance).",\r
"Cost of goods sold = quantity sold × moving weighted average purchase price of the item in the outlet on the date of sale (every receipt — costing sheet, transfer receipt, opening balance — changes the average in proportion to the quantity on hand; issues do not change it).",\r
"Purchase/unit",\r
"Method",\r
"Method",\r
"How the tax is shown on the checkout receipt.",\r
"Limit method (ZPDFL Art. 5a)",\r
"Payment method",\r
"The payment method \\"{0}\\" produces a cash receipt. Cash and card sales go through the cash register (which reports the deposit). An invoice is issued only for non-cash payment: {1}.",\r
"Payment method \\"{0}\\" is not allowed on an invoice: cash and card sales go through the cash register. Non-cash methods are allowed ({1}).",\r
"Type of business",\r
"Refund method",\r
"Registration method",\r
"Draft — the report is not closed.",\r
"Invoice draft {0} has been created (Issue invoice / quote).",\r
"Invoice draft for the selected delivery notes of the same customer and unit (uninvoiced quantities, same prices).",\r
"Invoice draft for the goods with the recipient, at the retail price (MPC) from the issue form. The invoice does not book out stock a second time.",\r
"The draft has been deleted.",\r
"draft message",\r
"The draft message with an attachment has been opened in the mail program.",\r
"drafts awaiting approval",\r
"drafts",\r
"{0} Z reports found: imported {1}, already existed {2}.",\r
"Found {0} records from other companies' packages ({1}) in this database. The list is below.",\r
"Parent group",\r
"The parent group was not found.",\r
"Find",\r
"Find item by name",\r
"Superior",\r
"Oversees financial operations, collections and payments; approves purchases and investments.",\r
"Reward days",\r
"Closest possible: {0} EUR (target {1}).",\r
"Longest late (days)",\r
"At least one rate must remain enabled.",\r
"minimum nights",\r
"Minimum nights",\r
"Lowest base for contributions — minimum gross earnings (EUR)",\r
"Lowest in 30 days",\r
"newest",\r
"oldest",\r
"Highest price",\r
"Maximum deduction from net pay (%) — Art. 106 Labour Law (1/3; maintenance up to 50)",\r
"Maximum stock",\r
"The maximum stock cannot be less than zero.",\r
"The maximum credit note on this invoice is {0} EUR.",\r
"The maximum credit note at rate {0} % is {1} EUR.",\r
"the largest number in the row",\r
"Most of the database is the raw response of the Tax Administration, which is kept with every invoice (for audit). It is not needed on the phone, so it can be deleted for older invoices;",\r
"Maximum debt per room",\r
"Maximum debt per room (EUR)",\r
"The maximum deduction is {0} EUR.",\r
"Maximum price",\r
"The maximum price was taken from the CInMED report.",\r
"The maximum retail price is {0}; the price at the registers is {1}.",\r
"Najviša MP",\r
"Max retail ≈ wholesale ×",\r
"Max retail ≈ wholesale × {0} × {1}",\r
"Najviša VP",\r
"Maximum hours per week",\r
"Maximum total",\r
"Maximum consecutive days",\r
"Fee",\r
"NAKNADA",\r
"Fee (gross)",\r
"Fee (EUR) *",\r
"Bank fee",\r
"The compensation has been entered. Regular work: {0} h.{1}",\r
"Fee on the receipt",\r
"Collection fee",\r
"Fee per prescription",\r
"Sick leave compensation — base:",\r
"Allowance for an employee's newborn child (up to 1,000 EUR)",\r
"Allowance for living apart from family (up to 100 EUR per month)",\r
"Holiday allowance",\r
"Holiday pay (non-working day)",\r
"NAKNADE",\r
"Bank fees",\r
"Business travel expense reimbursements",\r
"Fees for issued licences and permits",\r
"Subsequent discount (rebate, bonus)",\r
"Subsequently posted receipts (earlier month)",\r
"Value added tax refunded afterwards to customers - foreign nationals",\r
"Finding saved ({0} disputed items). It is shown in Suppliers, on the supplier card and when entering payments until marked as resolved.",\r
"Finding saved (no disputed items).",\r
"Paste interim report",\r
"Pasted text",\r
"Voucher",\r
"NALOG",\r
"Instruction \\"{0}\\"",\r
"The order \\"{0}\\" is not supported in this version of the program ({1} {2}).",\r
"The order \\"{0}\\" with these parameters requires the issuer's signature. The order was not executed.",\r
"The \\"poruka\\" order has no text.",\r
"Voucher {0} · {1}",\r
"Instruction {0} was not executed: {1}. {2}",\r
"Voucher {0} of {1}: {2}",\r
"order {0}: amounts were not read clearly",\r
"order {0}: no date",\r
"The order is waiting for the next exchange ({0}).",\r
"An instruction to the main computer is sent from a computer in the administrator role.",\r
"The instruction has expired (older than {0} days).",\r
"The voucher has been changed.",\r
"The voucher has been deleted.",\r
"the order has been cancelled.",\r
"the order has been sent — waiting for the main computer",\r
"the order has been sent again.",\r
"The order has been handed to the exchange.",\r
"the voucher is in a locked month",\r
"Order to the kitchen / bar for items not yet sent",\r
"The instruction carries no item database file.",\r
"The instruction carries no selection from the preview.",\r
"The instruction carries no point of sale.",\r
"The instruction carries no preview summary; comparison with the preview on the sender's computer is not possible.",\r
"The voucher does not exist.",\r
"The voucher does not have a valid date.",\r
"The voucher has no line items.",\r
"The voucher is not balanced: debit {0} ≠ credit {1} (difference {2}).",\r
"An order with this signature has already been executed on this device (repeated signature) — it was not executed again.",\r
"Task from the administrator's computer",\r
"The order requests a PIN reset for the role \\"{0}\\", but this program only has a device PIN at the admin/owner level — the role does not match, the PIN was not touched.",\r
"Voucher in GL",\r
"The voucher already exists in the locked month {0}/{1}. Moving it is not possible.",\r
"E-banking order: code 128, account 820-15111-24, model 18, reference number PIB-municipality code, amount from field 28",\r
"Journal voucher",\r
"JOURNAL VOUCHER {0}",\r
"VAT payment order: {0}",\r
"The order to remove the link of the outlet \\"{0}\\" has been written.{1}",\r
"The vouchers need to be reposted manually (Finance → Post month): {0}",\r
"Journal vouchers in Finance need to be posted again ({0}).",\r
"Vouchers",\r
"VOUCHERS",\r
"Orders sent to the main computer",\r
"Orders from the administrator's computer",\r
"Orders from the administrator's computer: executed {0}{1}.",\r
"The orders have been written ({0}).",\r
"The orders have been written ({0}). The main computer performs the linking.{1}",\r
"The vouchers in Finance have been reposted for {0}.",\r
"Vouchers in GL",\r
"Vouchers in the month where debit ≠ credit",\r
"Journal vouchers from documents · account ledger card · trial balance · journal · chart of accounts (Montenegro, Rulebook 11/20)",\r
"vouchers, general ledger, trial balance",\r
"orders: executed {0}, errors {1}, signature rejected {2}",\r
"note",\r
"NAP",\r
"Rent collected",\r
"Collected invoice",\r
"Collected written-off receivables",\r
"Collected doubtful receivables not previously recognised as an expense",\r
"collected",\r
"Collected",\r
"Collects payment for goods on the fiscal cash register in cash and by card and issues fiscal receipts.",\r
"Collection",\r
"Payment — room {0}",\r
"\\"Charge to room\\" payment",\r
"Collection (bank statement)",\r
"The payment has been released.",\r
"Payment is in progress at register {0}.",\r
"The payment has been entered.",\r
"Collection from",\r
"Collection from customers",\r
"Payment in progress at register {0}",\r
"Charge",\r
"Charge and issue receipt",\r
"Charge all nights",\r
"Note",\r
"Note (Art. 7–11)",\r
"Note / reference number",\r
"Note / reason (optional)",\r
"Note number",\r
"The note was saved.",\r
"The note must be text (it may be empty).",\r
"Note to the books for",\r
"Note for internal records (not printed)",\r
"Note: {0}",\r
"NOTE: the receipt is not fiscalised — there is no IKOF/JIKR or QR code.",\r
"Note: in {0}, in the sequence of document numbers (costing sheets) the numbers {1} were not assigned (total {2}). No document corresponds to these numbers — no document has been omitted from the ledger. The numbers of already issued costing sheets were not changed afterwards, in order to preserve the chronological order of entries (Accounting Act, Art. 13).",\r
"Notes",\r
"NOTES",\r
"The notes have been saved.",\r
"NOTES TO THE FINANCIAL STATEMENTS FOR THE YEAR {0} — {1}",\r
"Create item",\r
"Create costing sheet",\r
"Create code",\r
"Create new code",\r
"Create property and rooms",\r
"Create decision",\r
"Created by",\r
"Create an invoice draft for the goods with the recipient?",\r
"Create a schedule proposal for {0} {1} for all stores?\\n\\n• shifts rotate weekly (continuing from the previous week)\\n• everyone has one day off per week (the permanent day off from the employee card is respected)\\n• employees without a store are substitutes for days off\\n\\nManually entered slots and confirmed weeks are left untouched; the previous automatic proposal for the month is replaced.",\r
"Created",\r
"Created",\r
"Created: {0}",\r
"created",\r
"Write-off documents created: {0}.",\r
"Costing sheets created from scans: {0}{1}.",\r
"Advanced",\r
"Forward ›",\r
"Discard changes",\r
"Order on the method of payment of public revenues, Art. 4: model 18; credit reference number = PIB-municipality code of the registered office; debit reference number = period and number of employees",\r
"next day",\r
"Next 30 days · red = expired/≤7 days. The expiry date is entered on the item in \\"Costing sheets and invoices\\".",\r
"Order {0} — {1} ({2})",\r
"Orders",\r
"orders late with delivery",\r
"Our document",\r
"our debt — without partner stores",\r
"OUR DEBT — without partner stores",\r
"Our store",\r
"our account",\r
"Our account",\r
"our invoices and pro forma invoices",\r
"our",\r
"our",\r
"Violent, insulting or improper behaviour towards customers, colleagues or superiors",\r
"Title",\r
"Subject / attachment",\r
"naSobu.limit",\r
"naSobu.potpis",\r
"naSobu.ukljuceno",\r
"Continue counting",\r
"Continue working",\r
"Learned",\r
"nav",\r
"Back",\r
"name",\r
"Name",\r
"The customer's name is required.",\r
"Name (click to rename)",\r
"Name (optional)",\r
"Name (who the device is for)",\r
"Promotion name (visible on the register)",\r
"The promotion name is required.",\r
"Item name",\r
"Item name is required.",\r
"item name…",\r
"Company name",\r
"Company name is required.",\r
"The company name from the server cannot be used as a database name.",\r
"Group name",\r
"The group name is required.",\r
"Group name by language",\r
"Name and description by language (* required; empty = base name / English)",\r
"Supplier name and registered office",\r
"Customer name and address",\r
"Name and value are required.",\r
"name or code",\r
"The name is longer than 120 characters.",\r
"Name is required.",\r
"Cash register name",\r
"Cash register name is longer than 120 characters.",\r
"Cash register name is required.",\r
"Kiosk name",\r
"Kiosk name is longer than 120 characters.",\r
"Kiosk name is required.",\r
"Account name",\r
"The account name is required.",\r
"Store name",\r
"Store name is required.",\r
"Name of the new company",\r
"Name of the new expense type:",\r
"Name of the new item",\r
"Name of the new store",\r
"Property name",\r
"The business unit name is required.",\r
"Property name, municipality and number of rooms by type. Rooms can be changed later in Settings.",\r
"Deduction name",\r
"Name of this device",\r
"Period name",\r
"The rule name is required.",\r
"Holiday name",\r
"Name of the holiday (e.g. New Year, Independence Day):",\r
"The holiday name is required.",\r
"The holiday name has been changed.",\r
"Holiday name in the decision",\r
"Position name *",\r
"The job title is required.",\r
"The name is repeated among the new items in the file.",\r
"Asset name",\r
"Name of the asset/expense",\r
"The foreign entity's name is required.",\r
"Device name (visible on scans)",\r
"name of service or goods",\r
"name, code or barcode",\r
"name, code, barcode",\r
"Position titles used in the masculine gender apply equally to female and male persons (cashier, warehouse worker).",\r
"no",\r
"No",\r
"NE",\r
"No (former)",\r
"not reporting",\r
"Non-deductible",\r
"not certified by a notary",\r
"Not subject to VAT",\r
"is not subject to VAT",\r
"does not exist (deleted)",\r
"not reported",\r
"Do not show on the guest menu (the register still sells it)",\r
"is not calculated here. Corporate income tax (from the general ledger):",\r
"off",\r
"not working (seasonally closed)",\r
"not assigned to shifts",\r
"not assigned to shifts ({0}) — the flag is on the employee card (Payroll → Employees)",\r
"Not assigned to shifts (office). To change: employee card → \\"not assigned to shifts\\".",\r
"not sent to registers",\r
"Not included in PR PDV-2.",\r
"not imported (error, duplicate, locked month)",\r
"inactive",\r
"inactive store",\r
"Inactive (",\r
"inactive",\r
"Sun",\r
"Sun",\r
"Sunday",\r
"Sunday",\r
"SUNDAY · store",\r
"Sunday (days)",\r
"Sunday (hours)",\r
"Sundays in the month · total",\r
"No-show on the day after arrival at (hour)",\r
"No-show: hour from 0 to 23",\r
"nedolazak.doSati",\r
"Missing",\r
"Date, store or employee is missing.",\r
"A date, store, shift or employee is missing.",\r
"margin missing",\r
"Margin missing: the scan from Manager has no margin, the supplier has no previous costing sheets, and the \\"Default margin for scans from Manager\\" (Settings → Device) is not entered. After the margin is entered (the \\"Margin\\" button), the scan goes back into processing.",\r
"Missing: {0}",\r
"Missing: {0}.",\r
"Missing",\r
"Work in progress",\r
"WORK IN PROGRESS",\r
"Unfinished services",\r
"Negative exchange rate differences",\r
"A negative opening balance (the supplier owes the company, or a prepayment from earlier years) reduces open invoices like a credit note.",\r
"Unused codes for cash register {0} will stop being valid. Continue?",\r
"Unused leave (working days)",\r
"Invalid number.",\r
"Invalid posting date.",\r
"Invalid disposal date.",\r
"Invalid month.",\r
"Invalid address: {0}",\r
"Invalid company or year for the archive.",\r
"Invalid year.",\r
"Invalid version label \\"{0}\\" — the update was refused.",\r
"Invalid company name \\"{0}\\".",\r
"Invalid redirect.",\r
"Failure to issue a fiscal receipt or collecting payment outside the register",\r
"Unclear {0}: {1}.",\r
"PROPERTY, PLANT, EQUIPMENT AND BIOLOGICAL ASSETS",\r
"Property, plant, equipment and biological assets in progress",\r
"none",\r
"No promotions.",\r
"No active stores. Stores are created in Settings → Stores.",\r
"There are no active employees to schedule.",\r
"No active employees.",\r
"No active employees. Employees are entered on the \\"Employees\\" tab.",\r
"No active employees. To add: \\"New employee\\".",\r
"There are no items without a barcode. The item is searched by name.",\r
"No items with a wrong check digit.",\r
"No items in the stocktakes and no movements in the period.",\r
"There are no items for this selection.",\r
"No item {0}",\r
"No register item for that search.",\r
"No item for \\"",\r
"No items for this view.",\r
"No item found for that search.",\r
"No item.",\r
"No advances in the period.",\r
"No advance receipts.",\r
"No customs declarations in the period.",\r
"no shifts defined",\r
"No shifts defined for this store.",\r
"no documents",\r
"No documents.",\r
"No document with that number.",\r
"No arrivals today.",\r
"No duplicate items.",\r
"No duplicate entries or empty takings.",\r
"no closing files",\r
"There are no invoices or takings in this year.",\r
"No invoices with a payment deadline in this selection.",\r
"There are no guests in the property.",\r
"There are no errors waiting to be sent.",\r
"There are no groups — groups come from the item code list (Accounting).",\r
"There is no valid package checksum — the update was refused.",\r
"No items selected. An item is added by searching on the left and using the + button.",\r
"There are no changes awaiting a decision. Changes to salaries, shifts and employees from other computers have been entered.",\r
"There are no changes to enter: the main computer's code list does not differ from the file (with the selection from the preview).",\r
"There are no changes to enter.",\r
"No changes.",\r
"there is no amount \\"UkupnoSaPDV\\"",\r
"No amount to deduct: the advance has been used or the receipt is closed.",\r
"There is no amount to apply (the note has been used or the invoice is closed).",\r
"No statements.",\r
"There are no costing sheets with a selling price. The initial price list was not created.",\r
"No costing sheets in the selected period.",\r
"No costing sheets for the selected period and outlet.",\r
"There are no costing sheets to generate in the selection.",\r
"No costing sheets to export in the selected period.",\r
"No costing sheets to print in the selected period.",\r
"No cash registers. Cash registers are entered from the initial price list or with the \\"Add cash register\\" button.",\r
"No cash registers. Cash registers are entered in Cash register price list → Cash registers and stores; a cash register that sends live status appears automatically.",\r
"No kiosks. A kiosk is opened next to a store (list of outlets below).",\r
"No postings on that account in the period.",\r
"No postings. Vouchers are created with the \\"Post month\\" button.",\r
"No credit notes.",\r
"not in our records",\r
"Not in our records",\r
"not on our side; a possibly missing invoice",\r
"Not in theirs",\r
"No control stocktakes in the selected period.",\r
"No movement of goods by item for this store.",\r
"No customers.",\r
"No customer matches that search.",\r
"No medicine for that search.",\r
"no purchase price up to the date of sale",\r
"No vouchers for the selected period. Vouchers are created with the \\"Post month\\" button.",\r
"No orders from the Manager.",\r
"No inactive employees.",\r
"No unpaid invoices. All customers have settled their obligations.",\r
"No unapplied discounts in the period (agreed discounts were honoured or not entered).",\r
"No unprocessed attachments. Check: \\"Check mail\\".",\r
"no tax-free part (everything is other income)",\r
"This customer has no unallocated payments. The payment must be entered first.",\r
"This supplier has no unlinked payments. A payment is entered through \\"Import statement\\" or at the supplier.",\r
"There are no business units. A business unit is added below.",\r
"No price revaluations in the selected year.",\r
"No new suggestions. All detected items are already in the group.",\r
"no new attachments",\r
"No new changes to send.",\r
"No property.",\r
"no payroll",\r
"no payroll in the Payroll module for this year; a payroll calculation or manual entry is required",\r
"There is no calculated or contracted net salary for this employee in that month.",\r
"No tax calculated and no payments this year.",\r
"No employees have been calculated. The payroll needs to be run first.",\r
"No deleted receipts or items in the period.",\r
"No response from the local server.",\r
"No departures today.",\r
"No fixed assets.",\r
"No fixed assets. Entry: the \\"Procurement and expenses\\" tab.",\r
"No write-offs in this year.",\r
"No write-offs in the period.",\r
"No delivery notes in the selected year.",\r
"none open",\r
"No open shift.",\r
"No open invoices in this selection.",\r
"There are no open invoices to link to; the payment is recorded as a prepayment.",\r
"No open items. All invoices are settled.",\r
"No items marked for entry.",\r
"No exchange packages.",\r
"There are no takings with cash without a payment 0–7 days before this payment. The payment is entered manually at the takings.",\r
"No payments to link automatically. The payments have already been allocated or there are no matching invoices.",\r
"There is no opening stocktake of goods for {0} (Trade ledger → opening balance).",\r
"There is no opening stock by items.",\r
"No data on cashiers.",\r
"No data for {0} (no ledger, no manual entry, no public statement)",\r
"No data for {0}.",\r
"no data for {0}.; the current year was used (newly established legal entity, Art. 7 para. 3), and the previous year's data is entered from the submitted statement",\r
"No data for the selected store/year.",\r
"No data for the selected period or search.",\r
"No data for the selected year.",\r
"No data for the period.",\r
"No data for the trade ledger.",\r
"no data; entered manually",\r
"No data.",\r
"no breakdown by rates",\r
"There are no item stocktakes.",\r
"No stocktakes in the period.",\r
"No completed checklists and visits in the period.",\r
"No messages.",\r
"No sent documents in the selected period.",\r
"No procedures this year.",\r
"No receipt confirmations from the Manager.",\r
"No linked barcodes.",\r
"No withdrawn batches.",\r
"No rules.",\r
"No holidays for",\r
"no suggestion",\r
"No transfers this year.",\r
"No transfers.",\r
"No fault reports.",\r
"No suggestion. The report row can be found with the manual search below.",\r
"No receipts in the period.",\r
"No attachments for this selection.",\r
"No sales with a purchase price for the selected period and filters.",\r
"No posted write-offs in {0}.",\r
"No turnover by item for this day.",\r
"No turnover by item.",\r
"No turnover in the selected period.",\r
"There is no turnover in this year.",\r
"No receipts by hour.",\r
"There are no job positions. A new job position is added above.",\r
"There are no positions. The starting job structure is created with the \\"Fill in the starting job structure\\" button.",\r
"No employees belong to this month.",\r
"No employees with a store that has shifts.",\r
"No schedule for that month.",\r
"No issue forms in the selected year.",\r
"No reservations for this selection.",\r
"There are no goods expiring in the next 30 days.",\r
"No manual entries this year.",\r
"There is no balance to transfer.",\r
"No item code.",\r
"No scans in this category.",\r
"There is no vacant room of this type in that period.",\r
"No vacant room for that period.",\r
"There is no free amount (the payment or the invoice is already closed).",\r
"There is no free amount to link (the payment or the invoice is already closed).",\r
"No shifts from the new cash register. Shifts are shown when the cash register writes closings to the folder.",\r
"No price reductions. A price reduction from the Manager also arrives as a price change in the Cash register price list.",\r
"No rooms to clean.",\r
"No disputed items.",\r
"no items to change",\r
"No items.",\r
"No items. Items are added below; \\"Recalculate\\" enters full regular work.",\r
"No rates to check.",\r
"No cancellations or exceptions.",\r
"no slots.",\r
"No transactions in the period.",\r
"No transactions for this selection.",\r
"There is no trade ledger for the year {0}.",\r
"No expenses in the period (or they are not classified by type).",\r
"No goods receipts in the period.",\r
"No incoming invoices in the period.",\r
"No absences entered for",\r
"No takings entered.",\r
"No employees entered (\\"Employees\\" tab).",\r
"No employees have been entered. Employees are entered on the \\"Employee payroll\\" screen, and the schedule is then created with the \\"Auto-schedule\\" button.",\r
"No items entered.",\r
"No lessors have been entered.",\r
"No entries.",\r
"No periods entered — \\"flat\\" applies to all months (",\r
"No accounts have been entered.",\r
"No payments with a free amount.",\r
"No payments.",\r
"No services of foreign entities in the period.",\r
"No imported sales by item.",\r
"No imported statements in",\r
"No statements imported. Import: \\"Import all statements from mail\\" or Payables → Statement import.",\r
"There is no import to undo.",\r
"There is no valid unused code for Manager.",\r
"No linked codes. They are added automatically at the next import of this item.",\r
"No connection to the server ({0}).",\r
"No connection to the server.",\r
"No tasks.",\r
"No requests or absences.",\r
"No requests.",\r
"No scheduled prices.",\r
"No recorded links to other documents.",\r
"There are no dependent costs marked \\"into purchase value\\". Only costs that enter the purchase value of the goods are allocated.",\r
"INTANGIBLE ASSETS",\r
"Intangible assets held for sale",\r
"Intangible assets in progress",\r
"NON-PRODUCTION COSTS",\r
"intangible (software, licences) — accounting rate",\r
"Uncollected of restored",\r
"Total uncollected",\r
"Not wearing work clothes / untidy appearance at the workplace",\r
"NEO",\r
"NEO STICK",\r
"Optional. Entered only for goods with an expiry date.",\r
"Unapplied discounts",\r
"UNAPPLIED DISCOUNTS",\r
"Unhandled promise: {0}",\r
"Unhandled rejection",\r
"total unprocessed:",\r
"Unexpected request format — the signature cannot be inserted.",\r
"Failure to keep the workplace tidy and clean",\r
"non-tax. up to",\r
"non-tax. up to {0}",\r
"Non-taxable receipts",\r
"The tax-free amount by the method below (not used for per diems — the limit is days × per diem). The excess is other income.",\r
"Non-taxable amount for this case (empty = limit of the type)",\r
"Tax-free threshold of gross earnings (EUR)",\r
"tax-free",\r
"Tax-free",\r
"Tax-free up to · method · excess",\r
"Tax-free up to (amount) · limit method · excess above the tax-free amount (\\"other income\\", tax 15 %): IOPPD basis and whether contributions are paid",\r
"Unjustified absence from work (one or more working days)",\r
"Unjustified failure to carry out a superior's order without harmful consequences",\r
"Not written off (2+3−4)",\r
"Not written off at the end",\r
"Unpaid — care of a family member (Art. 88 para. 1 ZOR, up to 5 days)",\r
"Unpaid absence",\r
"unfilled",\r
"Unfilled: {0} shifts (red), not enough free employees.",\r
"Unfilled: {0} shifts (days marked in red).",\r
"Unfilled: {0} shifts. There are not enough available employees (absences, days off or weekly maximum hours).",\r
"Violation of occupational safety rules that endangered life and health",\r
"INCOMPLETE — DO NOT SUBMIT: {0}",\r
"unknown item",\r
"Unknown barcode {barkod}",\r
"Unknown store.",\r
"Unknown basis for 0 %.",\r
"unknown (generic)",\r
"Unknown error",\r
"Unknown service error.",\r
"Unknown VAT rate: {0}; the amount was not classified.",\r
"Unknown municipality code.",\r
"Unknown licence version.",\r
"unknown type",\r
"unknown type {0}",\r
"Unknown promotion type.",\r
"Unknown kiosk type.",\r
"Unknown instruction type \\"{0}\\".",\r
"Unknown partner type.",\r
"Unknown data type.",\r
"Unknown connection security type.",\r
"unknown (choice below)",\r
"unknown",\r
"Unknown item field \\"{0}\\".",\r
"Late submission of the daily report or X report",\r
"Not counted",\r
"Non-working",\r
"Unallocated payments of this customer",\r
"RETAINED EARNINGS",\r
"Retained earnings from previous years",\r
"Retained earnings of the current year",\r
"Unclassified bank transactions in",\r
"Unclassified bank transactions in {0}: {1}{2}. They are not in the general ledger; they must be classified (Bank → Transactions, column \\"Type\\") and that month re-posted (Finance → Post month).",\r
"Unclassified statement transactions (",\r
"Unclassified transactions from statements (type \\"other\\") — not posted",\r
"unclassified ·",\r
"Unrealised gains and losses from translation of financial statements presented in another presentation currency",\r
"Unrealised gains and losses from measuring financial assets at fair value",\r
"Shortage {0} — {1}",\r
"net =",\r
"net",\r
"Net",\r
"Net (EUR)",\r
"net (the contractor receives that amount)",\r
"net (take-home)",\r
"NET (inflow − outflow)",\r
"net (of all",\r
"net (the lessor receives that amount)",\r
"net {0}",\r
"Net = the amount the employee receives in hand. The gross is calculated so that exactly that amount remains after contributions and tax (the surtax is charged to the employer).",\r
"Net price",\r
"Net profit",\r
"NET PROFIT",\r
"Net invoice value",\r
"Net quantity",\r
"The net quantity must be greater than zero.",\r
"Net purch. price",\r
"Net purch./unit",\r
"NET RESULT",\r
"Net earnings to employees' bank accounts, tax and contributions, surtax per municipality and the contribution for persons with disabilities — model, reference number and purpose for e-banking",\r
"Unpaid subscribed shares",\r
"Unpaid earlier days of the same outlet: {0} (cash {1} EUR, with this day {2} EUR){3}.",\r
"UNPAID SUBSCRIBED CAPITAL",\r
"UNPAID SUBSCRIBED CAPITAL AND FIXED ASSETS",\r
"Unpaid subscribed stakes",\r
"Unlinked payment",\r
"NEW",\r
"Unemployment contribution borne by the employer (%)",\r
"Unemployment contribution borne by the employee (%)",\r
"NFC",\r
"NFD",\r
"nor the cash register price list",\r
"not",\r
"none.",\r
"Not due",\r
"not a duplicate",\r
"not a Manager record file",\r
"not fiscalised",\r
"not the main computer",\r
"not the main computer / no module",\r
"not selected",\r
"Not selected",\r
"Not changed: {0} ({1})",\r
"Not copied",\r
"not on the registers",\r
"not on the List",\r
"NOT connected (orders are not received)",\r
"not ours",\r
"was not even set",\r
"is not mandatory",\r
"Not deleted {0}: {1}{2}",\r
"not a PDF; manual import required (Obligations → Statement import)",\r
"Not a payment to a supplier or from a customer (salary, tax, fee…). Stays in the overview without posting.",\r
"not set up (Connection)",\r
"Not undone: {0}. {1}",\r
"not sent",\r
"Not sent: {0}",\r
"not confirmed — the municipality's decision has not been published online (27.10.2026); default = statutory maximum {0} %",\r
"not linked to the register",\r
"Not connected to the server",\r
"not linked to an item",\r
"No row was recognised. The date and amount must be in the same line of text.",\r
"Not downloaded — repeating",\r
"The initial cash deposit has not been reported for today.",\r
"no items were read",\r
"Not read: {0}",\r
"Not a sale within the VAT system",\r
"No \\"PORESKA STOPA\\" block was found. The image is probably unclear or part of the receipt is cut off.",\r
"No printer was found. The printer must be switched on and installed in Windows.",\r
"Not found",\r
"is not an employment relationship and the fee is not earnings — it is calculated here, not through payroll. The contracted fee is gross: base = gross − standardised costs (",\r
"did not respond within {0} s",\r
"Not OK",\r
"Not loaded (another company): {0}. These files are loaded in their own company.",\r
"The software maintainer code has not been entered.",\r
"The business premises code has not been entered.",\r
"The software code has not been entered. Without it the Tax Administration does not accept the ENU registration.",\r
"The company PIB has not been entered.",\r
"not paired",\r
"not paired",\r
"not entered",\r
"The date of the written warning has not been entered (Art. 174). Dismissal without a prior warning is unlawful. Continue?",\r
"the municipality of residence is not entered",\r
"not entered",\r
"not a requirement",\r
"not required; experience with cash registers is an advantage",\r
"Statements not imported: {0}. The account is not confirmed as this company's account ({1}); the label \\"our account\\" or \\"other company\\" is required (bar at the top or Obligations → Mail).",\r
"None",\r
"No item has the rate {0}.",\r
"No item is allowed on Sundays and holidays. The kiosk's cash register works like a store on Sundays: a warning without blocking the sale.",\r
"No item selected.",\r
"No code list item matches the search.",\r
"No store has defined shifts. The working hours of each store are entered on the \\"Store working hours\\" tab (e.g. I 08–16:30, II 16:30–01).",\r
"No store has both shifts and home employees. Scheduling is not possible.",\r
"No store is marked as a partner. Selection: the \\"Partner stores\\" button.",\r
"No store is selected.",\r
"No store has been entered (Settings).",\r
"No Manager has sent a file.",\r
"No Manager device has been paired.",\r
"No month changes its content.",\r
"No employee has this store as their home store. A store is assigned on the \\"Employees\\" tab (Payroll); the other option is to enable cover work.",\r
"No employee has this store as their home store. A store is assigned in \\"Employee payroll → Employees\\"; another option is automatic scheduling with help from other stores switched on.",\r
"No company matches the search \\"",\r
"No company is open.",\r
"No changes were applied. The registers have not yet been assigned to stores.",\r
"No line changes the price.",\r
"No line has a name and quantity.",\r
"No item was recognized in the code list. The item is created or linked in the list \\"Write-off items without an item in the code list\\" below.",\r
"No page has been selected.",\r
"No outlet is linked to a store.",\r
"No payment has been linked to this invoice yet.",\r
"No point of sale is waiting to be linked.",\r
"NIKSIC",\r
"Nikšić",\r
"none",\r
"nothing missing",\r
"nothing new",\r
"They are not part of accounting in the narrow sense. A company with the \\"Books\\" package does not see them; they are turned on automatically when the company has such data, the Store or Chain package, or Manager — and here they can be turned on or off manually. The data is not deleted and the exchange still transfers it.",\r
"Not saved (not selected): pages {0}.",\r
"Thread #",\r
"NIV",\r
"Price revaluation",\r
"Price revaluation — change of the selling price of goods in stock · stocktake report (Rulebook 34/12 Art. 11)",\r
"Price revaluation (selling price change)",\r
"Price revaluation {0}",\r
"Price revaluation {0} — {1}: {2} {3} (selling incl. VAT)",\r
"Revaluation {0} was numbered in {1}. The date must stay within that year.",\r
"Revaluation no. {0} of {1} (stocktake report)",\r
"The price revaluation was deleted.",\r
"The price revaluation was unlocked.",\r
"The revaluation is already closed.",\r
"The revaluation is closed. It cannot be changed.",\r
"The price revaluation is closed. It has been entered in the trade ledger, the stock list and the cash register price list.",\r
"The price revaluation is closed.{0}",\r
"The revaluation does not exist.",\r
"The revaluation has no lines.",\r
"The revaluation is not closed.",\r
"The revaluation is closed on the revaluation date ({0}) or later.",\r
"Price revaluation: selling value incl. VAT ({0} %)",\r
"Price revaluation: calculated margin",\r
"Price revaluation: calculated VAT ({0} %)",\r
"The revaluation is unlocked by the main computer.",\r
"The revaluation is closed by the main computer.",\r
"Level",\r
"The level of educational qualification is determined according to the National Qualifications Framework; for one position, a range of at most two adjacent levels may be required.",\r
"The document number sequence is unbroken — there are no gaps.",\r
"Njegoš Day",\r
"German",\r
"its",\r
"their",\r
"Theirs",\r
"NK — unskilled (I)",\r
"NLB banka",\r
"NLB Banka",\r
"NLB banka — fees",\r
"NLB banka (daily statement)",\r
"NLB banka (monthly)",\r
"NLB banka (transaction overview)",\r
"NLB banka (overview)",\r
"NLB daily statements are read by OCR (a few seconds per statement), so importing a whole year takes longer. The import can be interrupted and continued later.",\r
"NLB monthly report for personal accounts (private individual), not a company account statement.",\r
"NN",\r
"NO",\r
"Overnight stays",\r
"Overnight stay — {0}",\r
"Overnight stay and surcharges with accommodation that are not food.",\r
"nights",\r
"Nights",\r
"Night (+40 %)",\r
"Night h / shift",\r
"Night work",\r
"Night work 22–06 (supplement +40 % on top of the base)",\r
"Night work on a public holiday",\r
"Night work on a public holiday (supplement +190 % on top of the base)",\r
"NONCASH",\r
"noopener noreferrer",\r
"The norm has been set: {0} %.",\r
"Expense norm (% per month)",\r
"Expense norm (shrinkage, spillage, spoilage, breakage)",\r
"The norm is calculated from purchases posted to the store.",\r
"The norm is calculated from the store's turnover (takings excl. VAT).",\r
"Standard expenses",\r
"Reservation holder",\r
"Cost objects",\r
"COST OBJECTS",\r
"note",\r
"The note was not applied. The credit remains unused.",\r
"new",\r
"new item",\r
"New item",\r
"New item in the code list from cash register data:\\n\\nName: {0}\\nCode (cash register): {1}\\nBarcode: {2}\\nUnit: {3}\\nVAT: {4} %\\nSelling price on the cash register: {5} (remains in the Cash register price list)\\n\\nThe item is linked to the cash register item, and the write-off from the cash register is booked out of stock against that item. Continue?",\r
"New pairing code; the earlier unused code of this cash register stops being valid.",\r
"New customer for registers",\r
"New draft with today's date, the same customer and items",\r
"New outlet",\r
"New support reply",\r
"New reply from IRIS CORVINA support (More → Support)",\r
"A new row on the \\"Artikli\\" sheet with an empty \\"Šifra\\" column — the program assigns the code. Required: name, JM and PDV. The barcode of a new item is entered on the \\"Barkodovi\\" sheet; the item name then goes in the \\"Šifra\\" column.",\r
"A new row on the \\"Barkodovi\\" sheet: item code and barcode. The \\"Barkod\\" column is text.",\r
"New request",\r
"nova",\r
"New",\r
"New promotion",\r
"New price",\r
"New price excl. VAT is below the purchase price: {0}{1}",\r
"The new price excluding VAT is below the purchase price.",\r
"The new price must be greater than zero.",\r
"The new price is not entered: {0}.",\r
"A new price is entered in the \\"Opšta cijena\\" column or in a location column.",\r
"new company",\r
"New company — this computer is the main one",\r
"New global margin %",\r
"New Year",\r
"New group",\r
"New payout under work contract",\r
"New costing sheet",\r
"New costing sheet (QR scan)",\r
"New costing sheet (QR)",\r
"The new cash register sends its closings to the IRIS CORVINA server",\r
"The new cash register sends its closings to the IRIS CORVINA server (in transitional mode also to the Drive folder)",\r
"The new cash register writes its closings to the same exchange folder through which the price list goes",\r
"New margin %",\r
"The new margin as a percentage is required (e.g. 40).",\r
"New margin for the selected stores and period at once (except cigarettes), then producing all costing sheets in PDF/Excel and printing",\r
"New MPC",\r
"New thread instead of a reply",\r
"New price revaluation",\r
"New delivery note",\r
"New delivery note with today's date, the same customer and items",\r
"New message to support",\r
"New violation",\r
"New violation of work duty — initiating a procedure",\r
"new attachments",\r
"new prescribed retail price from {0} (confirmed on the costing sheet)",\r
"New reservation",\r
"New reservation: select the first and last night in the room's row.",\r
"New scheme applies from",\r
"New code",\r
"New shift",\r
"New rate",\r
"The new rate takes effect automatically on that day, in the program and on the registers.",\r
"The new rate applies immediately.",\r
"A new payment with the same details has been recorded in the bank register.",\r
"A new version has been downloaded.",\r
"The new version is applied the next time the program starts.",\r
"fine",\r
"Fine ({0})",\r
"fine (up to",\r
"The fine is deducted from the employee's salary starting with the first following salary payment, in {0} monthly instalment(s), so that total deductions in one month do not exceed one third of the salary ({2}). The measure is enforced once the decision becomes final, and cannot be enforced if {3} days have passed since it became final and enforcement has not begun ({4}).",\r
"Cash funds whose use is restricted or whose value is reduced",\r
"Fines and penalties",\r
"Fines for offences",\r
"CASH FLOW — {0}",\r
"New groups",\r
"November",\r
"November",\r
"November",\r
"new",\r
"NOVI",\r
"New analytical account",\r
"New item",\r
"New items",\r
"New barcode",\r
"New barcode {0}",\r
"New barcodes",\r
"The new date is not valid.",\r
"New guest",\r
"New ID",\r
"New code",\r
"New code for the cash register",\r
"New customer",\r
"The new name is required.",\r
"New property",\r
"New PIN (4–8 digits)",\r
"New data is visible after the view is refreshed. An entry in progress is saved first.",\r
"New stocktake",\r
"New holiday — date",\r
"new attachment",\r
"New employee",\r
"New issue form",\r
"New manual voucher",\r
"A new \\"into purchase cost\\" cost can be added only after the allocation is undone; the allocation is then repeated with all costs.",\r
"New entry",\r
"New lessor",\r
"new items",\r
"New items",\r
"new groups",\r
"New groups",\r
"New costing sheets that arrived after the review: {0}. They were not changed (they are visible in the table and can be changed separately).",\r
"new attachments",\r
"new attachments in Mail awaiting review",\r
"new transactions ·",\r
"novine; dnevni list; nedjeljnik; casopis; magazin; revija; ukrstenic; enigmat; skandi; zagonetk",\r
"new",\r
"New",\r
"New opening stock",\r
"New rule",\r
"New position",\r
"New balance",\r
"e.g. 1, 2, 3, 4, Bar, Terrace 1",\r
"e.g. 1001, 1002, 4475",\r
"e.g. 101-110, 201",\r
"e.g. 1234/26",\r
"e.g. 15 years of service = {0} %",\r
"e.g. 20 (must not coincide with the cash registers)",\r
"e.g. 2026-0001, customer name or note text",\r
"e.g. 2026-0007 (with the invoice number the payment is linked to it automatically)",\r
"e.g. 30",\r
"e.g. 4*",\r
"e.g. 40",\r
"e.g. 4331",\r
"e.g. 4711",\r
"e.g. 5",\r
"e.g. 510-0000000000000-11",\r
"e.g. 510-12345-67",\r
"e.g. Atlantic 2_00015, 2026061400002, OT-2026-00004, F8471C7C…",\r
"e.g. Art. 9 of the employment contract — night work",\r
"e.g. Crnogorska komercijalna banka",\r
"e.g. Independence Day",\r
"e.g. Municipality Day, non-working day by Government decision",\r
"e.g. Drina, Eva, IQOS…",\r
"e.g. Annual stocktake 2026",\r
"e.g. guest cancelled by phone",\r
"e.g. ibuprofen 400",\r
"E.g. We are still trying out the program, we need 30 more days.",\r
"e.g. CKB loan",\r
"e.g. mail.firma.me",\r
"e.g. Market Centar",\r
"e.g. Marko",\r
"e.g. meni.vasrestoran.me",\r
"e.g. MNE",\r
"E.g. On the Bank screen, the statement import reports an error …",\r
"e.g. order, statement",\r
"e.g. Company name d.o.o.",\r
"e.g. Njegoš Day",\r
"e.g. Premises X works shorter hours.",\r
"E.g. We are opening a new outlet — we need one more cash register.",\r
"e.g. Petar P., Ana A., Marko M.",\r
"e.g. Podgorica",\r
"e.g. repair of a refrigerated display case, making an advertisement. If it matches a job position from the job classification, a warning is shown.",\r
"e.g. business premises, warehouse, address of the outlet",\r
"e.g. reference number, job description…",\r
"e.g. temporarily increased workload",\r
"e.g. temporarily increased workload in the season / replacement of an absent employee",\r
"e.g. Salesperson, Warehouse worker, Driver…",\r
"e.g. First shift",\r
"e.g. Office computer",\r
"e.g. Phone Store 9",\r
"e.g. Owner",\r
"e.g. replacing absent colleagues in the season",\r
"e.g. replacing absent colleagues in the season, sales results, stocktake without shortage",\r
"E.g. We also want the Manager module for two phones.",\r
"Offered when entering a guest; one basis per row.",\r
"NULL",\r
"zero / exempt",\r
"Zero rate (Art. 25)",\r
"Zero rate (exports, international transport, diplomatic missions…)",\r
"Revaluation numbering: no free number was found.",\r
"Write-off numbering: no free number was found.",\r
"Delivery note numbering: no free number was found.",\r
"Transfer numbering: no free number found after 500 attempts.",\r
"Issue form numbering: no free number found.",\r
"Numbering: no free number found.",\r
"Numbering: no free number found.",\r
"NV-{0}-{1}",\r
"NZ:{0}",\r
"position",\r
"About the program",\r
"o.Broj",\r
"o.FIK",\r
"o.IIC",\r
"o.InvNum",\r
"o.MarketID",\r
"OA — depreciation",\r
"OA — DEPRECIATION CALCULATION",\r
"OA {0}",\r
"both",\r
"both computers changed the same data",\r
"OBAVEZA",\r
"Obligation \\"{0}\\" {1}",\r
"Liability on account 4340 \\"Suppliers abroad\\" (Chart of accounts 11/20, account 434); invoice for goods outside U-RAČ col. 8, VAT on import from the customs declaration (PR-PDV field 20). Cannot be changed while the supplier has invoices in a locked month.",\r
"Liability at month end",\r
"Liability for flat-rate compensation",\r
"VAT liability on import (customs)",\r
"VAT liability payable (PR-PDV field 28, reduced by overpayment)",\r
"Corporate income tax liability",\r
"amount due for payment",\r
"Required for the IOPPD return (13 digits)",\r
"Required for tax returns (IOPPD).",\r
"Liabilities to suppliers {0}{1} — KALK vouchers vs supplier specification (incl. VAT)",\r
"Liabilities and payments",\r
"OPERATING LIABILITIES",\r
"LIABILITIES FROM SPECIFIC TRANSACTIONS",\r
"Liabilities convertible into equity",\r
"Liabilities for securities issued for a period longer than one year",\r
"Liabilities for short-term securities",\r
"Liabilities from exports for third-party account",\r
"Liabilities for interest and financing costs",\r
"Liabilities from commission and consignment sales",\r
"Liabilities related to non-current assets and assets of discontinued operations held for sale",\r
"LIABILITIES FOR EARNINGS AND EARNINGS COMPENSATION",\r
"Liabilities under service contracts (net)",\r
"Liabilities for leased premises and equipment (off-balance)",\r
"Liabilities to members of the management and supervisory board",\r
"Liabilities to suppliers",\r
"Payables to suppliers (by partner)",\r
"Payables to foreign suppliers (supplier marked \\"Foreign\\"): invoice, payment and refund from the statement",\r
"Liabilities to natural persons under contracts (rent)",\r
"Liabilities to natural persons for fees under contracts",\r
"Liabilities to parent and subsidiary entities",\r
"Liabilities to other related entities",\r
"Liabilities to the importer",\r
"Liabilities to employees",\r
"Excise duty liabilities",\r
"Liabilities for dividends",\r
"Liabilities for contributions charged to costs",\r
"Liabilities for contributions to chambers and associations",\r
"Liabilities for contributions borne by the employee",\r
"Liabilities for contributions on earnings and earnings compensation borne by the employee",\r
"Liabilities for contributions under service contracts (contractor's PIO)",\r
"Liabilities for net compensation to be reimbursed",\r
"Liabilities for net earnings compensation that is refunded",\r
"Liabilities for net salaries and salary compensation",\r
"Liabilities for net earnings and earnings compensation, except compensation that is refunded",\r
"LIABILITIES FOR OTHER TAXES, CONTRIBUTIONS AND OTHER DUTIES",\r
"VAT liabilities — difference between output and input tax",\r
"Liabilities for VAT and customs duty on import",\r
"VAT liabilities on services from foreign persons (reverse charge)",\r
"VAT liabilities on issued invoices 15 %",\r
"VAT liabilities on issued invoices 21 %",\r
"VAT liabilities on issued invoices 7 %",\r
"VAT liabilities on cash sales 15 %",\r
"VAT liabilities on cash sales 21 %",\r
"VAT liabilities on cash sales 7 %",\r
"VAT liabilities on own consumption (shortage above norms)",\r
"VAT liabilities on advances received 15 %",\r
"VAT liabilities on advances received 21 %",\r
"VAT liabilities on advances received 7 %",\r
"Liabilities for tax on results",\r
"Corporate income tax liabilities",\r
"VALUE ADDED TAX LIABILITIES",\r
"Value added tax liabilities on invoices issued at the general rate (excluding advances received)",\r
"Value added tax liabilities on invoices issued at the reduced rate (excluding advances received)",\r
"Value added tax liabilities on cash sales",\r
"Value added tax liabilities from the difference between calculated value added tax and input tax",\r
"Value added tax liabilities on own consumption at the general rate",\r
"Value added tax liabilities on own consumption at the reduced rate",\r
"Value added tax liabilities on advances received at the general rate",\r
"Value added tax liabilities on advances received at the reduced rate",\r
"Liabilities for tax on salary compensation",\r
"Liabilities for salary tax (borne by the employee)",\r
"Liabilities for tax on earnings and earnings compensation borne by the employee",\r
"Liabilities for withholding tax and surtax (rent, service contracts) and other levies",\r
"Liabilities for taxes and contributions on earnings compensation borne by the employer that are refunded",\r
"Liabilities for taxes and contributions on earnings compensation borne by the employee that are refunded",\r
"Liabilities for taxes and contributions borne by the employer",\r
"Liabilities for taxes and contributions on earnings and earnings compensation borne by the employer",\r
"Liabilities for taxes charged to expenses (real estate, etc.)",\r
"Liabilities for taxes, customs duties and other duties from purchases or charged to costs",\r
"Liabilities for surtax on income tax",\r
"Liabilities for profit sharing",\r
"mandatory",\r
"mandatory (medium/large)",\r
"Mandatory statements",\r
"required",\r
"Notice",\r
"The notice has been removed.",\r
"notifications",\r
"notification",\r
"Notice",\r
"Notification \\"{0}\\" for {1}",\r
"Customer notification",\r
"The customer's notice has been recorded.",\r
"Customer notification for credit note {0} — {1}",\r
"Customer notification: {0} of {1}.",\r
"Notice of initiation of proceedings to establish a breach of work duty",\r
"Performs other financial and administrative tasks as instructed by the director.",\r
"Performs other auxiliary tasks as instructed.",\r
"Performs other tasks as instructed by the executive director.",\r
"Performs other tasks as instructed by the manager.",\r
"Meals provided (Decree Art. 7a: lunch and dinner −60 %, one meal −40 %)",\r
"Visits and checklists",\r
"store visits: {0}",\r
"Unit",\r
"Publishing the database is in progress…",\r
"Published",\r
"outlet",\r
"Outlet",\r
"Outlet \\"{0}\\" {1}.{2}",\r
"Outlet \\"{0}\\" is not active.",\r
"business unit \\"{0}\\" is not among the company's business units; select one of the company's business units",\r
"Outlet \\"{0}\\" is not linked to the company register on the server. Cash register {1} is not entered in the register.",\r
"Outlet \\"{0}\\" already exists.",\r
"Outlet \\"{0}\\": {1}.",\r
"outlet {0}",\r
"The business unit has documents ({0}). The trade type cannot be changed.",\r
"The property has been added.",\r
"An outlet is a place of sales (store, shop, office). Other outlets: Settings → Stores.",\r
"A business unit is a place of sale: store, shop, café, office. Costing sheets, daily takings, the trade ledger and stock are kept per business unit.",\r
"The property has been saved.",\r
"The property is in use",\r
"The property has been entered.",\r
"The property has not been entered yet. Entry is done by a user with settings authorisation.",\r
"The business unit does not exist.",\r
"The outlet has no sales by item — suggestion 100 %",\r
"The outlet has no sales per item. The book quantity is the sum of receipts. Enter the counted quantity.",\r
"The outlet has no rooms.",\r
"The property has no rooms. Rooms are entered in Settings.",\r
"The property has no room types. Types are entered in Settings.",\r
"Outlet not selected.",\r
"No outlet selected. The check is done per outlet.",\r
"The outlet is not a kiosk.",\r
"business unit is not entered",\r
"Register outlet",\r
"The register outlet is already linked to another outlet.",\r
"The business unit cannot be changed while the revaluation has lines.",\r
"The business unit cannot be changed while the delivery note has lines.",\r
"The outlet cannot be changed while the issue form has items.",\r
"Outlet in the company register on the server (issuer, IRIS Admin). The link is recognised by cash register, PJ or name.",\r
"Outlets",\r
"Outlets ({0}): {1}{2}.",\r
"Outlets (stores)",\r
"Premises (business units) that are open",\r
"Company outlets from the server",\r
"Outlets from the file that were not recognized",\r
"The units managed by the partner are selected in the \\"Units (stores)\\" field above; without a selection, all units with turnover are shown.",\r
"Accommodation outlets, rooms, price list and reports · tourist tax · reception shifts",\r
"Accommodation units, rooms, price list and reports · tourist tax (liability to the municipality) · advances and accommodation from reception",\r
"accommodation units, rooms, price list, reports and tourist tax",\r
"Accommodation outlets, rooms, price list and reports are kept on the company's server (Connecting → Server). Tourist tax and reception shifts are kept even without a connection.",\r
"outlets: {0}",\r
"Form",\r
"Calculation",\r
"Calculation {0} — {1} persons, gross {2}{3}",\r
"payroll {0} · refund amount = benefit × percentage, up to the limit (number of average salaries × {1} €)",\r
"Payroll or employee not found.",\r
"The payroll has been unlocked.",\r
"the payroll is open and the difference has already been added to another month; recalculating this month would pay it twice",\r
"the payroll is locked here",\r
"The payroll has been moved to {0} {1}. If the hour fund changed, the amounts are recalculated with the \\"Calculate all\\" button.",\r
"The calculation has been recorded.",\r
"The payroll is locked. Changes are not possible.",\r
"The payroll is locked.",\r
"The payroll is locked. Changes are not possible.",\r
"The payroll is locked. Changes are possible after unlocking.",\r
"Purchase accounting of goods",\r
"Purchase accounting of materials, spare parts, tools and small inventory",\r
"CALCULATION OF FEES UNDER CONTRACTS FOR WORK",\r
"The payroll has no results. \\"Calculate all\\" needs to be run first.",\r
"Payroll not found.",\r
"the payroll is not locked; seniority pay is corrected on recalculation (\\"Calculate all\\")",\r
"VAT calculation (output − deductible) — general ledger vs PR-PDV 24 − 27",\r
"VAT calculation (monthly)",\r
"VAT calculation {0}/{1}: output {2} − deductible {3}{4} = {5}",\r
"Payroll calculation",\r
"the payroll for {0} has not arrived yet",\r
"payroll not locked",\r
"The payroll for {0} exists only on this computer and downloading the database would delete it. Payroll is done on the main computer. A manual download is possible with confirmation (the payroll is then deleted).",\r
"payroll locked",\r
"Payroll (month)",\r
"Payroll by shifts: {0} h for {1} employees. Items have been entered and calculated.{2}{3}{4}",\r
"PROPERTY INCOME TAX CALCULATION — LEASE FROM INDIVIDUALS",\r
"Realised margin calculation (monthly)",\r
"Realised RUC calculation {0}/{1} ({2})",\r
"The payroll for that month is locked. The fine is deducted in an open payroll (e.g. next month).",\r
"COST AND OUTPUT ACCOUNTING",\r
"Calculation in progress…",\r
"Calculation for",\r
"The payroll for {0} {1} is closed (IOPPD for that month). A contract for work paid in that month cannot be changed until the payroll is unlocked.",\r
"The earnings calculation for {0} {1} is locked. The lease for that month cannot be changed until the calculation is unlocked.",\r
"The earnings calculation for this month is closed (the same IOPPD return). Payouts for that month cannot be changed until the calculation is unlocked.",\r
"The earnings calculation for this month is closed. The lease for that month cannot be changed until the calculation is unlocked.",\r
"Payroll calculation, surtax, IOPPD, benefit refunds (FZO, CSR), payment orders, contract for services, rent",\r
"calculation, IOPPD, payslips",\r
"Accrued income of a future period",\r
"Income calculated using \\"arm's length\\" prices",\r
"Income calculated using transfer prices",\r
"Costs calculated using \\"arm's length\\" prices",\r
"Costs calculated using transfer prices",\r
"Calculated",\r
"Calculated {0} employees with an entered IQOS amount for {1} {2}.{3}",\r
"Calculated {0} employees for {1} {2}.{3}",\r
"Calculated on cash registers",\r
"Calculated net",\r
"Calculated manually",\r
"total calculated",\r
"Total calculated",\r
"Processing invoices is not possible on a phone. Costing sheets and document numbers are created by the computer.",\r
"processing failed: {0}",\r
"Processing…",\r
"Processed database (reports on the phone)",\r
"Processed",\r
"processed",\r
"Processed {0}: {1} costing sheets created, {2} skipped, {3} errors.",\r
"Process",\r
"Process with confirmation",\r
"Form EV — records of the wholesale outlet. Debit and credit at wholesale prices excl. VAT (Rulebook 34/12 Art. 7 col. 4).",\r
"OA form",\r
"Form PD",\r
"Form PD (Rulebook, Official Gazette of Montenegro 8/09 … 20/25). It starts from the result in the income statement; fields the program can calculate itself (accounting vs OA depreciation, fines 5591, unpaid salaries 4500/4650, entertainment 1 %, membership fees 0.1 % of total revenue",\r
"Deleted on the main computer. It will not be processed.",\r
"deleted receipt",\r
"Deleted in the Manager before processing.",\r
"Deleted in the Manager before processing.",\r
"Deleted receipts",\r
"Deleted receipts, write-off of goods, price labels",\r
"Deleted receipts",\r
"Deleted receipts / items",\r
"Deleted {0} automatic slots.",\r
"Deleted {0} records.{1}{2}",\r
"Deleted from the records.",\r
"Manual payment {0} {1} deleted: {2} EUR. The payment from the statement remains.",\r
"Deleted here",\r
"Manually entered payments deleted: {0}. Payments from the bank statement remain.",\r
"Deleted.",\r
"Deleted by: {0}, {1}",\r
"Delete \\"{0}\\" from this computer?\\n\\nIt is a copy of a snapshot, not a company; the company data remains on the main computer.",\r
"Delete {0} records of other companies from this database?\\n\\nOnly documents that synchronization entered by mistake are deleted (they exist in their own company's database). Gaps may remain in the numbering, visible in the numbering check.\\n\\nBefore deleting, a backup copy is automatically made in the backup folder (if one is selected).",\r
"Delete the promotion \\"{0}\\"? The registers remove it with the next price list.",\r
"Delete advance receipt {0}? The payment stays.",\r
"Delete the entire stocktake with all entered quantities?",\r
"Delete declaration {0} from {1}?",\r
"Delete guest {0} {1}?",\r
"Also delete the {0} posted from this statement?\\n\\nOK: payments/collections are deleted too (the statement is wrong or belongs to another company).\\nCancel: payments and collections stay (the statement is imported again).",\r
"Delete the payout under the work contract — {0}?",\r
"Delete from the records? (the PDF file remains)",\r
"Delete costing sheet {0} with all lines and the invoice?",\r
"Delete credit note {0}?",\r
"Delete the price revaluation?",\r
"Delete the delivery note?",\r
"Delete this draft?",\r
"Delete this leave from the plan?",\r
"Delete this write-off?",\r
"Delete this transfer?",\r
"Delete this manual voucher?",\r
"Delete this scan?",\r
"Delete this entry?",\r
"Delete this tourist tax entry?",\r
"Delete this payment and all its links?",\r
"Delete takings {0} from {1} ({2} EUR)?\\n\\nDeletion also applies on the other computers.",\r
"Delete this supplier's opening balance ({0} EUR)?",\r
"Delete the opening stock with all items?",\r
"Delete the stocktake?",\r
"Delete the procedure and its documents from the records?",\r
"Delete the return?",\r
"Delete rule \\"{0}\\"?",\r
"Delete the issue form?",\r
"Delete the raw Tax Administration record for invoices older than 7 days?\\n\\nInvoice data remains untouched. A full copy remains on the computer.",\r
"Delete the shift \\"{0}\\"?",\r
"Delete all manually entered payments ({0}, {1} EUR)? Payments from the bank statement remain.",\r
"Delete all automatically generated shifts of this month? Manually entered and swapped ones remain.",\r
"Delete the entry?",\r
"Delete service {0} from {1}?",\r
"Delete the imported sales {0} for {1}?",\r
"Delete lessor {0}?",\r
"Delete bank account {0}?",\r
"Delete",\r
"Delete password",\r
"Delete stocktake",\r
"Delete rule {0}",\r
"delete the previous automatic schedule",\r
"Delete the old code from this item",\r
"Reverse calculation — fit to target net",\r
"Meals",\r
"Scope",\r
"Stocktake scope",\r
"The deduction of {0} EUR has been entered in the payroll and deducted from the employee's payout.",\r
"Deductions",\r
"Deductions from net (loans, fines, damages, administrative bans…)",\r
"Salary deductions",\r
"Stop the procedure",\r
"Discontinued: {0}",\r
"Discontinued.",\r
"VAT-registered",\r
"Expected",\r
"Expected",\r
"Expected in the drawer",\r
"Read document (machine-readable zone)",\r
"Scan the barcode from the product (the \\"Items and barcodes\\" screen or scanning at the register).",\r
"Scan the barcode from the product and add the correct one; the existing code remains until it is removed.",\r
"Scan a barcode with the camera",\r
"Rating",\r
"OCR from a scanned report (page {0}){1}",\r
"of",\r
"From",\r
"OD",\r
"of {0}",\r
"from {0} pcs {1}",\r
"from 07:00 to 14:00",\r
"From date",\r
"From date (empty = since last check)",\r
"from the date: the program reads Outlook and sorts all bank statements (daily, monthly, overviews) in \\"Mail\\".",\r
"From when the room is ready for the guest.",\r
"From what date does the new price apply? (YYYY-MM-DD)",\r
"From how many pieces (N)",\r
"From October 2026 the Tax Administration ex officio changes the VAT number to ME + PIB (Art. 72c VAT Act)",\r
"The registration deadline runs from this time.",\r
"From this date the employee is no longer included in the calculations of subsequent months; in the month of termination they receive proportional hours.",\r
"From this date the years of service with us (seniority bonus) are counted automatically.",\r
"From hour (happy hour)",\r
"Of which without right to deduction",\r
"Of which late",\r
"Of which test receipts",\r
"Of which services",\r
"Of which services (EUR)",\r
"Of which services (takings {0}{1}) (not goods)",\r
"Of which services from the register {0} (not goods)",\r
"of the three criteria is exceeded (exceeding two of three → next category). Recategorization only after two consecutive years of deviation. Obligation:",\r
"Source",\r
"Where it comes from",\r
"Disclosure of a trade secret (purchase prices, supplier and turnover data)",\r
"Discard",\r
"Deductions on final receipts",\r
"Decline",\r
"Deduct advance",\r
"deduction of a fine from salary (minor: up to",\r
"denied",\r
"rejected price",\r
"Deducted",\r
"rejected — price amount",\r
"rejected — register without identifier",\r
"rejected — code conflict",\r
"Deducted on receipts: {0}. Unused: {1} EUR.",\r
"Deduction",\r
"Deduction (empty = maximum)",\r
"The advance deduction ({0}) is greater than the receipt amount ({1}).",\r
"Deduction of advance {0} on receipt {1}",\r
"The advance deduction has been cancelled.",\r
"The advance deduction does not exist.",\r
"Advance deduction:",\r
"Deduction: FZO software (€)",\r
"Reports to",\r
"Reports to (superior position)",\r
"Is responsible for goods in transit and for the accuracy of accompanying documents.",\r
"Publisher's reply",\r
"The response is too large.",\r
"reply to IOS",\r
"Reply to the statement of open items",\r
"The server response is too large.",\r
"The server response is not valid (compression).",\r
"Reply in thread #{0}",\r
"Replies in this thread",\r
"Responsible person",\r
"Checkout",\r
"Deregistration with the police",\r
"Deregistration with the police {0}",\r
"odjava.vrijemeDolaska",\r
"odjava.vrijemeOdlaska",\r
"Check out",\r
"Check out with debt",\r
"Check out the guest? The room changes to the \\"to be cleaned\\" state.",\r
"Checked out",\r
"Deregistered with the police",\r
"Deregistered with the tourist organisation",\r
"Mark the guests' deregistration with the police in the Guests tab.",\r
"Departures",\r
"Departure",\r
"departure {0}",\r
"Departure today",\r
"Departure by",\r
"Departure by (hour)",\r
"Departure is planned for {0} Shorten the stay to {1}?",\r
"Departure must be after arrival.",\r
"Departure: {0}",\r
"outflow",\r
"Outflow",\r
"OUTFLOW",\r
"OUTFLOWS",\r
"outflows to suppliers awaiting posting",\r
"OUTFLOWS BY RECIPIENT",\r
"Deferred tax assets",\r
"Deferred tax liabilities",\r
"Deferred tax expenses and income for the period",\r
"Deferred income and donations received",\r
"Decides on establishing and terminating employment, scheduling and employees' salaries.",\r
"Decision",\r
"DECISION",\r
"decision made",\r
"The decision is final. Within {0} days of delivery the employee may initiate proceedings before the Agency for Peaceful Resolution of Labour Disputes ({2}); initiating proceedings does not suspend enforcement of the decision. The decision is delivered to the employee, the defender and the trade union representative who took part in the procedure within {3} days of its adoption.",\r
"The decision has not been saved.",\r
"Surtax decision (public consultation 15.10.2019), Art. 3",\r
"Surtax decision (Official Gazette of the Republic of Montenegro – general regulations 037/03, 008/04; Official Gazette of Montenegro 006/20), Art. 3",\r
"Surtax decision (Official Gazette of the Republic of Montenegro – general regulations 05/07) — DRI, audit of the Budva final account for 2014; accountant 30.09.2026 (2.49 on 24.99)",\r
"Surtax decision of the Municipality of Bijelo Polje (2003, amended 2016), Art. 3",\r
"Decision on work on a public holiday",\r
"Decision on work during a holiday",\r
"Decision on work during a holiday: choosing and editing holidays (adding, changing dates), premises, working hours, decision number and date",\r
"DECISION ON CLASSIFICATION OF THE LEGAL ENTITY FOR THE YEAR {0}",\r
"Classification decision for",\r
"The classification decision for {0} has been saved.",\r
"employer's decision",\r
"The decision is posted on the notice board of each outlet and delivered to employees who work on the holiday ({0}).",\r
"The decision is disclosed in the notes to the financial statements (Art. 7 para. 6 of the Law).",\r
"Decision of the Capital City Assembly, Art. 3 — law for the Capital City up to 15 %",\r
"Decision of the Royal Capital Assembly (2019), Art. 3 — law for the Royal Capital up to 15 %",\r
"Decision saved {0}.",\r
"Decision of the Bar Municipal Assembly of 28.10.2019 (Official Gazette of Montenegro – general regulations 044/19), Art. 4",\r
"Decision of the Danilovgrad Municipal Assembly of 07.02.2020, Art. 4",\r
"Decision of the Kolašin Municipal Assembly 2020 (draft 06.05.2020), Art. 4",\r
"Decision of the Kotor Municipal Assembly (Official Gazette of Montenegro – general regulations 045/22 of 16.09.2022), Art. 3; DRI 2024",\r
"Decision of the Mojkovac Municipal Assembly of 19.12.2019, Art. 3",\r
"Decision of the Plav Municipal Assembly of 29.03.2021 (Official Gazette of Montenegro – general regulations 009/21), Art. 3",\r
"Decision of the Plužine Municipal Assembly (Official Gazette of Montenegro – general regulations 44/20 of 24.12.2020), Art. 5",\r
"Decision of the Žabljak Municipal Assembly (Official Gazette of Montenegro – general regulations 16/18, 17/20), Art. 3",\r
"Decision of the Zeta Municipal Assembly of 30.03.2023 (Official Gazette of Montenegro – general regulations 017/23), Art. 4",\r
"Decision delivered",\r
"for a decision",\r
"The decision to discontinue the proceedings, release from liability or impose a measure shall be made by the executive director within {0} days of the expiry of the deadline for a statement or of the hearing held (30 days if an inspection or expert examination is required), and shall be delivered within {1} days of its adoption.",\r
"immediately post reliably recognised payments (PIB / remembered account)",\r
"Allocate immediately to open invoices (exact amount → reference number → oldest first)",\r
"Leave",\r
"approved",\r
"Credit notes (pcs)",\r
"Credit notes awaiting the customer's notification: {0}.",\r
"The credit note awaits the customer's notice.",\r
"Supplier credit (negative invoice) — reduces the debt; the unused part is negative",\r
"Supplier credit applied to this invoice",\r
"The credit note has an IKOF and is not deleted.",\r
"The credit note has been fiscalized.",\r
"The credit note has been cancelled.",\r
"The credit note does not exist.",\r
"A credit note is not issued against a corrective receipt.",\r
"Approved",\r
"APPROVED",\r
"Grant access…",\r
"Approved by",\r
"odojcad; adaptirano mlijeko; pocetna formula",\r
"Worked in the month — days by shifts",\r
"Adults",\r
"Set by the municipality, from 0.10 to 1.00 EUR.",\r
"Determines the surtax for employees and the reference number for tax payment.",\r
"Determines the basis code in the IOPPD return",\r
"Keeps shelves, storage space and refrigeration units clean.",\r
"Keeps the sales area, warehouse, restrooms and surroundings of the outlet clean.",\r
"Keeps the workplace tidy and clean and observes hygiene rules.",\r
"Maintains order, cleanliness and storage conditions (temperature, expiry) in the warehouse.",\r
"Maintains code lists (suppliers, items, employees) and the document archive.",\r
"Keeps the vehicle in working and clean condition, keeps the travel order and fuel records.",\r
"Maintenance and repairs",\r
"Pregnancy maintenance",\r
"printed: {0}",\r
"discrepancies",\r
"Cost variances of finished products",\r
"Cost variances of cost objects",\r
"Balance discrepancy: at the supplier {0}, in the records {1}. Difference: {2} EUR.",\r
"Absences",\r
"Absences and holidays",\r
"Employee absences",\r
"absence",\r
"Absence",\r
"Absence — {0} {1}–{2}",\r
"The absence has been deleted.",\r
"The absence has been entered. It is taken into account in automatic scheduling.",\r
"the absence to which the decision refers has not arrived yet",\r
"The absence is not annual leave.",\r
"absence: {0}",\r
"Cancel",\r
"Separate this company",\r
"Separate this company from the shared connection?\\n\\nThe other companies of the connection remain paired; this company has no exchange through the server until it is paired again.",\r
"offlineDana: 1–365.",\r
"ok",\r
"October",\r
"October",\r
"October",\r
"ol",\r
"OLD",\r
"as it arrives from the bank (Hipotekarna, Prva banka and NLB are read automatically; NLB",\r
"disabled",\r
"what is written here. Without the checkmark, the seniority bonus (by the scheme from the \\"Rates\\" tab) goes",\r
"OP",\r
"Optional",\r
"Optional (rent, monthly services); printed on the document.",\r
"Operator",\r
"operator code",\r
"Operator code",\r
"Description",\r
"description (ingredients, weight…)",\r
"Description (purpose)",\r
"Description of the event (what happened, where, who was present) — goes into the notice and the decision",\r
"the error description, the program version, the screen name and the latest actions",\r
"Description from the statement",\r
"Description on the receipt",\r
"Voucher description",\r
"Job description — each item on a new line (goes into the employment contract)",\r
"A description of the violation is required.",\r
"A problem description is required.",\r
"Description from the statement",\r
"Purpose description",\r
"Description of the request or problem: screen, action performed and result obtained. Personal data (JMBG, bank accounts, phone numbers, names of employees and customers) are removed from the text and attachments before sending.",\r
"Request description.",\r
"description, supplier, customer",\r
"Describe the request.",\r
"narcotic drug / psychotropic substance (special prescription)",\r
"Narcotic drugs and psychotropic substances are dispensed on prescription only (Rx).",\r
"reprimand",\r
"Taxable",\r
"Taxable profit (1−3+4+5−6+7…24−25+28+29+30+31+34−35−36−37) > 0",\r
"Taxable turnover at 0% rate (Art. 25 of the VAT Act)",\r
"Taxable supplies at the 0% rate (Art. 25 of the VAT Act) (takings by item basis + invoices with Art. 25 basis + manual)",\r
"Taxable turnover at 15% rate — base",\r
"Taxable supplies at the 15% rate — base (takings + issued invoices)",\r
"Taxable turnover at 21% rate — base",\r
"Taxable supplies at the 21% rate — base (takings + issued invoices)",\r
"Taxable turnover at 7% rate — base",\r
"Taxable supplies at the 7% rate — base (takings + issued invoices)",\r
"taxable",\r
"OPREMA",\r
"OPREME",\r
"standard",\r
"General",\r
"GENERAL",\r
"general price",\r
"General price",\r
"General price {0}",\r
"A general price without a previous value cannot be reverted.",\r
"General company price",\r
"The general price must be greater than zero (empty field = the price is not changed).",\r
"The general price is not a number.",\r
"The general price applies at {n} locations that have no price of their own. Change the general price?",\r
"The general price applies at all places that have no price of their own for the item. A new price is entered in the field and confirmed with the Enter key; every change requires a PIN and confirmation.",\r
"General price: {0}",\r
"General prices",\r
"General Collective Agreement (\\"Official Gazette of Montenegro\\", no. 150/22) — valid until 30.04.2026",\r
"General Collective Agreement Art. 26 and 27 (valid until 30.04.2026)",\r
"general prices",\r
"General prices",\r
"general and",\r
"Municipality",\r
"Municipality",\r
"the municipality \\"{0}\\" is not recognised as a municipality of Montenegro",\r
"Municipality (for surtax)",\r
"Municipality {0} (code {1}): surtax and reference number {2}-{3}",\r
"municipality not entered",\r
"municipalities the decision has not been published online). When a municipality changes its rate, the new rate is entered in the \\"Rate\\" column (empty = starting rate). The change applies to new employees and to calculation checks; for existing employees the rate stays on the employee card. The code of the company's seat municipality (",\r
"Municipality of residence — the surtax is determined by it",\r
"The contractor's municipality of residence — the surtax and the payment account are determined by it",\r
"The contractor's municipality of residence is required. The surtax is determined by it.",\r
"The employee's municipality of residence has not been entered. The surtax is determined by it (the rate is entered automatically). The company's registered seat is unknown (Settings → Company data → City).",\r
"The lessor's municipality of residence — the surtax and the payment account are determined by it",\r
"Municipality of the seat — its code goes into the reference number when paying tax and contributions (model 18, PIB code)",\r
"Municipality of the seat:",\r
"Municipality of Tivat, Budget page: \\"The surtax rate is 13% of the tax liability\\"",\r
"The general price can be changed by the administrator and the director.",\r
"optgroup",\r
"option",\r
"Walnuts, almonds, hazelnuts, chestnuts, carob",\r
"Tree nuts",\r
"Org. unit",\r
"authority that issued the document",\r
"An organisational unit is a part of the Employer in which a related group of tasks is performed under unified management.",\r
"Organizational and managerial skills; knowledge of labour, trade and tax regulations.",\r
"Organizes and manages operations, makes decisions within the executive director's remit.",\r
"Organizes procurement of office supplies and equipment and keeps the fixed assets register.",\r
"original dok",\r
"Indicative global norm. Under the Rulebook the percentage depends on the type of goods (table \\"Norm (Rulebook)\\").",\r
"General partnership",\r
"OS",\r
"FA {0}",\r
"sensitive actions, especially when the program is used by several people; it is not protection against a malicious user (the database is a file on disk).",\r
"Exempt 0%",\r
"Exempt",\r
"Exempt under an international agreement",\r
"VAT exempt",\r
"Exempt up to",\r
"Exempt up to (years)",\r
"Exempt turnover — supplies (Art. 26 and 27)",\r
"Exempt supplies — deliveries (Art. 26 and 27) (takings by item basis + invoices with that basis + manual)",\r
"Exempted",\r
"Exempt — in the public interest",\r
"Exempt — other exemptions",\r
"Exempt (Art. 26–27)",\r
"Release payment",\r
"Exempt",\r
"Exempt",\r
"Base input 15",\r
"Base taxpayers 15",\r
"Base taxp. NS",\r
"Osn0",\r
"Osn15",\r
"Osn21",\r
"Osn7",\r
"Founder / company assembly",\r
"Basis",\r
"Basis (article of the employment contract)",\r
"Legal basis (regulation)",\r
"basis {0} days: {1}",\r
"The 0 % basis has been saved.",\r
"Base purch. NS",\r
"The basis is not determined. The sales go to the field set in the company settings (PR-PDV).",\r
"Basis for exemption, if any.",\r
"Basis for turnover at the 0 % rate. {0} VAT Act Art. 71e: Art. 25 para. 1 point 12d (bread, flour, oil at 0 %) ceased to apply on 31.12.2022.",\r
"Basis for fixed-term work (mandatory element of the contract,",\r
"Basis for items with 0 % VAT (written on the invoice)",\r
"Basis for concluding a fixed-term contract: {0} ({1}). The total duration of one or more fixed-term contracts with the Employee may not exceed {2} months, whereby an interruption shorter than {3} days is not considered an interruption; if the Employee continues to work after the agreed period expires, the employment relationship is considered established for an indefinite period ({4}). A fixed-term employee has the same rights and obligations as an indefinite-term employee ({5}).",\r
"Basis on which the fixed-term contract was concluded (goes into the explanation)",\r
"Basis: {0}{1}.",\r
"Basis",\r
"Bases and percentages of salary increases ({0}): length of service — {1} (total service on the day of conclusion: {2} years, increase {3} %); overtime work {4} %; night work {5} %; work on a state or religious holiday {6} %; Sunday work {7} %, except when Sunday is a regular working day according to the shift schedule (rotating work) for which another day of weekly rest is provided. Increases on several bases are added together.",\r
"Exemption bases",\r
"Tax base",\r
"The base is required (invoice amount without VAT, in euros).",\r
"Base final cons.",\r
"Base lower rate",\r
"Norm basis",\r
"Base, taxpayers",\r
"Base general rate",\r
"VAT base",\r
"The VAT base on import must be greater than zero.",\r
"Base reduced rate",\r
"osnovica21%",\r
"Bases + VAT + exempt = {0} (total turnover: {1})",\r
"Basic gross",\r
"Base price per night (EUR incl. VAT)",\r
"basic list",\r
"Basic net",\r
"basic salary",\r
"Basic salary GROSS (EUR)",\r
"Basic salary NET (EUR) *",\r
"Primary school (I–II)",\r
"Fixed assets up to",\r
"Fixed assets and expenses (input VAT is deducted in PR-PDV) · depreciation · corporate income tax",\r
"Fixed assets and expenses, depreciation (OA), corporate income tax (PD)",\r
"Fixed assets: buildings (group I)",\r
"Fixed assets: equipment (groups II–V)",\r
"Fixed assets: software and licences",\r
"The basic items already give {0} EUR (net {1} + tax-free {2}), which is more than the target {3}. The basic salary, hours or tax-free income need to be reduced.",\r
"The basic items already give exactly the requested amount.",\r
"SHARE CAPITAL",\r
"Basic",\r
"Basic days",\r
"Basic beds",\r
"Fixed asset (>300 EUR, >1 year)",\r
"Fixed asset {0}",\r
"Basic herd",\r
"OSO",\r
"person",\r
"Person",\r
"Person-nights",\r
"persons",\r
"IOS dispute",\r
"The partner's debt of {0} EUR remains for invoicing. Check out the guest?",\r
"stays: only cigarettes",\r
"remain by invoice date, as kept until the changeover — submitted months do not change.",\r
"keep their own margin (only the other goods on the same invoice are changed), as do costing sheets in",\r
"Other prepaid expenses and accrued income",\r
"Other intangible assets",\r
"Other cash funds",\r
"Other taxable income",\r
"Other accrued expenses and deferred income",\r
"Other receivables",\r
"Other receivables from specific transactions",\r
"Other provisions",\r
"Other non-current assets held for sale",\r
"Other textile goods / footwear",\r
"other {0} %",\r
"Other long-term liabilities",\r
"Other short-term financial liabilities",\r
"Other short-term financial liabilities — loans from owners and related parties",\r
"Other property, plant and equipment",\r
"Other liabilities",\r
"Other operating liabilities",\r
"Other liabilities from specific transactions",\r
"Other liabilities for taxes, contributions and other duties",\r
"Other changes in unrealised gains and losses",\r
"Other long-term financial investments",\r
"Other financial income",\r
"Other financial expenses",\r
"Other chemical products",\r
"Other short-term financial investments",\r
"Other personnel expenses and compensation",\r
"Other intangible costs",\r
"Other unspecified income",\r
"Other unspecified expenses",\r
"Other share capital",\r
"Other operating income",\r
"Other operating expenses",\r
"Other food products",\r
"Other income",\r
"OTHER INCOME",\r
"Other expenses",\r
"OTHER EXPENSES",\r
"Other expenses (Type=TROSAK + dependent costs outside purchase value)",\r
"Other expenses (Type=TROSAK)",\r
"other",\r
"Other",\r
"Other / unclassified",\r
"Other unspecified",\r
"Other vegetables",\r
"Other fruit",\r
"Remainder",\r
"Remainder by",\r
"Remainder of capital gain (44 − 46) ≥ 0",\r
"Remainder of taxable profit (38 − 40) > 0",\r
"ACHIEVED GROSS MARGIN — {0}",\r
"Realized price difference (RUC)",\r
"Price difference realised on sales for the period: by item, group and outlet · purchase value of goods sold · export",\r
"Refreshing…",\r
"Refresh",\r
"Reload program",\r
"Refresh from server",\r
"Refresh list",\r
"OT",\r
"OT-{0}-{1}",\r
"OTC",\r
"OTC — without prescription",\r
"CA fingerprint (SHA-256)",\r
"The CA fingerprint from the certificate differs from the fingerprint the server announced on the network. Pairing is not secure.",\r
"The CA fingerprint is not valid (SHA-256, 32 pairs of hex characters).",\r
"The CA fingerprint is not valid.",\r
"The fingerprint is the same as on the Overview screen of the IRIS Server program (or on the list of codes from IRIS Admin)",\r
"The fingerprint cannot be read: {0}",\r
"The SHA-256 fingerprint proves that the file has not been changed: the recalculated fingerprint must be the same as the one here.",\r
"Dismissal by the employer requires",\r
"Dismissal by the employer…",\r
"Reservation cancellation",\r
"otkaz.stopaNaknade",\r
"otkaz.zadrzaniAvans",\r
"cancelled",\r
"Cancelled",\r
"cancelled",\r
"Cancelled",\r
"cancelled {0}",\r
"Cancelled on computer \\"{0}\\"{1}.",\r
"cancelled in Manager",\r
"Cancel the order \\"{0}\\"?\\n\\nAn order that the main computer has meanwhile executed remains executed.",\r
"Only an instruction that is waiting for the main computer can be cancelled.",\r
"Cancel the scheduled price {0} for \\"{1}\\" ({2})?",\r
"Cancel",\r
"Cancel price",\r
"Cancel order",\r
"Cancel reservation",\r
"The notice period is {0} days from the date of delivery of the notice or decision ({1}); in the cases referred to in {2} para. 2 (unjustified absence, violent behaviour, a criminal offence at work and other serious breaches) the employment relationship ends without a notice period. During the notice period the Employee is entitled to at least {3} hours of leave per week to look for a job. When the employment relationship ends, the Employer pays all unpaid salaries and allowances no later than {4} days ({5}), enables the use of unused annual leave or pays compensation for damages ({6}) and returns the employment record book on the termination date ({7}); the Employee returns work equipment, keys and documentation.",\r
"Unlock",\r
"Unlocked",\r
"Unlock {0}?\\n\\nAfter unlocking, the costing sheets and invoices of that month can be changed and deleted, so the books already handed to the accountant can also change.",\r
"Unlock the price revaluation? The revaluation leaves the trade ledger and the cash register price returns to the previous one.",\r
"Unlock the delivery note for correction? Until it is issued again the goods are not removed from stock.",\r
"Unlock the issue form for correction? The goods return to stock until the issue form is issued again.",\r
"OTKUP",\r
"Repurchased own shares and own stakes held for sale or cancellation",\r
"OTP",\r
"write-off",\r
"Write-off",\r
"WRITE-OFF",\r
"Write-off (qty)",\r
"Write-off (negative costing sheet)",\r
"Write-off (disposal) of goods and journal voucher",\r
"Write-off (record) to which this posting belongs",\r
"Write-off {0}",\r
"Write-off {0} — {1}, {2}, {3} €",\r
"Write-off {0} from cash register {1}: {2}",\r
"Write-off recorded at the cash register",\r
"The write-off was numbered in year {0}. The date must stay within that year; for another year a new write-off is needed.",\r
"The write-off has been unlocked.",\r
"The write-off is empty.",\r
"The write-off has been posted (it has a negative costing sheet). Unlocking is possible after the posting is cancelled.",\r
"The write-off has been posted. It can be changed after the posting is cancelled.",\r
"The write-off has already been sent to the main computer. {0}",\r
"The write-off has already been posted (the negative costing sheet exists).",\r
"The write-off has been locked.",\r
"The write-off is locked. It can be changed after unlocking.",\r
"The write-off is posted by the main computer. {0}",\r
"The write-off has no lines. Posting is not possible.",\r
"The write-off was not found.",\r
"The write-off has not been posted.",\r
"Write-off from cash register {0}{1}{2}{3}",\r
"The write-off is booked out of stock with the next reading of closings.",\r
"write-off",\r
"Write-offs",\r
"Write-offs from the cash register",\r
"Written-off value and impairment of doubtful receivables that are not recognised (a+b)",\r
"written off",\r
"Written off",\r
"written off ({0} documents, purchase value)",\r
"Write-offs",\r
"Write-offs (numbers)",\r
"Write-offs and shortages of output inventories",\r
"Write-offs of materials and goods",\r
"Write-offs from the cash register",\r
"Write-offs from the cash register: {0}",\r
"Write off item",\r
"OTPR",\r
"Delivery note",\r
"Delivery note (PDF)",\r
"Delivery note (invoice not issued)",\r
"Delivery note {0}",\r
"Delivery note {0} was numbered in {1}. The date must stay within that year.",\r
"Delivery note {0} has not been issued.",\r
"Delivery note no. {0} of {1}{2} (invoice not issued)",\r
"The delivery note has an invoice. Unlocking is not possible.",\r
"Delivery note from which the invoice was created",\r
"The delivery note has been issued (",\r
"The delivery note has been issued.",\r
"The delivery note has been issued. It can be changed after unlocking.",\r
"The delivery note has been deleted.",\r
"The delivery note has been unlocked.",\r
"The delivery note has already been issued.",\r
"The delivery note does not exist.",\r
"The delivery note has no customer.",\r
"The delivery note has no lines.",\r
"A delivery note is not a fiscal receipt. A receipt for the delivered goods is issued afterwards.",\r
"The delivery note is not selected.",\r
"The delivery note has not been issued.",\r
"The delivery note is issued on the delivery date ({0}) or later.",\r
"Delivery notes",\r
"Delivery notes without invoice",\r
"DELIVERY NOTES WITHOUT AN INVOICE",\r
"Delivery notes without an invoice with a VAT liability by {0} (the eighth day from delivery, Art. 18 para. 3 of the VAT Act): {1}. The VAT on them is not in the return until an invoice is issued.",\r
"Delivery notes without an invoice older than",\r
"Delivery notes without an invoice older than 8 days: {0}",\r
"The delivery notes on the invoice belong to different VAT periods ({0}). A separate invoice is required for each period.",\r
"The delivery notes belong to different VAT periods; a separate invoice is needed for each period.",\r
"The delivery notes are from different business units. A separate invoice is needed for each business unit.",\r
"The delivery notes are for different customers. An invoice is created for one customer.",\r
"Severance pay — termination by agreement (entire amount is other income, tax 15 %)",\r
"Severance pay — redundancy due to technological change (tax-free up to the minimum under the Labour Law; enter the amount for the case)",\r
"Severance pay on retirement (up to 1,500 EUR)",\r
"Theft or deliberate damage to the employer's property or goods",\r
"Disposal of FA (sale / write-off)",\r
"Disposal of FA: {0} ({1}; accumulated depreciation {2})",\r
"Disposal of FA: gain on sale",\r
"Disposal of FA: loss (write-off, sale below carrying value)",\r
"Disposal of fixed asset",\r
"Disposed",\r
"disposed {0}",\r
"Dispose",\r
"opens together with editing the item",\r
"OPENING AND CLOSING OF BALANCE SHEET AND INCOME STATEMENT ACCOUNTS",\r
"Opening kiosk \\"{0}\\" with store \\"{1}\\" for point of sale \\"{2}\\"",\r
"Opening store \\"{0}\\" for point of sale \\"{1}\\"",\r
"opening the PDF",\r
"Opening the PDF",\r
"opening payroll, HR and shifts (JMBG, earnings, employee contracts)",\r
"Opening the existing company \\"{0}\\"…",\r
"Opening of general ledger accounts of financial accounting",\r
"OPENING OF GENERAL LEDGER ACCOUNTS OF FINANCIAL ACCOUNTING",\r
"open",\r
"No open payroll calculation has been selected for the difference.",\r
"open",\r
"Opened",\r
"The open company has no PIB entered. According to the server data, this device belongs to the company \\"{0}\\" (PIB {1}).\\n\\nEnter this data into the open company (empty fields only)?",\r
"A different company is open. File {0} of company \\"{1}\\" was not written (it will be repeated in the next round).",\r
"A different company is open. File {0} was not written.",\r
"Opened existing",\r
"open since {0}",\r
"Open shift",\r
"open",\r
"Open invoices",\r
"Open items",\r
"OPEN ITEMS OF SUPPLIERS",\r
"Open calculations are aligned during \\"Calculate all\\"; here the view is informational.",\r
"Open invoices",\r
"open faults",\r
"open orders · {0}",\r
"open tasks · {0} late",\r
"open",\r
"Open",\r
"Open",\r
"Open update",\r
"Open Bank",\r
"Open Suppliers",\r
"Open document",\r
"Open HR",\r
"Open costing sheet",\r
"Open kiosk",\r
"Open a kiosk next to \\"{0}\\"",\r
"Open KO",\r
"Open draft message",\r
"Open a new store…",\r
"Open Obligations → Mail",\r
"Open Support",\r
"Reopen",\r
"Open existing",\r
"Open list",\r
"Outlook has several mailboxes ({0}). Mail is not read until this company's mailbox is selected (Obligations → Mail → Mailbox).",\r
"Outlook did not respond (probably not running). Classic Outlook needs to be started and the check repeated after the mail has loaded.",\r
"Outlook did not respond in time. Open Outlook, wait for it to load your mail and try again.",\r
"Outlook is not running.",\r
"Outlook is not running. Mail cannot be read until Outlook is running.",\r
"Outlook is not running. Start classic Outlook and wait for it to load your mail — the program will read the messages itself.",\r
"Outlook cannot be started: {0}",\r
"Outlook is starting. Mail reading will repeat automatically in about 40 seconds.",\r
"Outlook is starting. Loading mail takes about half a minute; then run \\"Check mail\\".",\r
"This database is an exchange snapshot, not a company. Publishing is not allowed; the snapshot must be deleted from the start screen.",\r
"This database is an exchange snapshot. The Manager file is created from the company database.",\r
"this company",\r
"This company exchanges through the connection of the company \\"",\r
"This company already has a main computer (its database is on the server), so this computer is an additional one: \\"Secondary\\" or \\"Administrator\\". Only one can be the main one.",\r
"This year",\r
"This year ({0})",\r
"This program installation keeps one certificate for all companies on the computer. For several companies with their own certificates, Setup 1.0.90 or newer is required; until then, receipts are not signed with a certificate that does not carry the company's PIB.",\r
"This sale is not included in RUC. Solution: link the cash register item or the import row to a code list item, or enter a costing sheet or opening balance with a purchase price.",\r
"This change has already been reverted.",\r
"This action is not allowed on this device.",\r
"This week",\r
"This version of the application does not have built-in receipt signing. Fiscalization is available with a new installation of the program (Setup), not with an ordinary update.",\r
"This version of the program ({0}) is no longer supported on the server. An update to version {1} or newer is required — writing to the server is waiting for the update.",\r
"This document type cannot be copied.",\r
"this one",\r
"This quarter (Q{0})",\r
"this store",\r
"This month",\r
"This month ({0})",\r
"This month is before the switch to date of receipt ({0}/{1}) and remains by invoice date, as it was kept.",\r
"This receipt has been fiscalized. Cancellation is done with a corrective receipt (button \\"Cancellation (corrective receipt)\\").",\r
"This invoice has already been scanned and is waiting to be processed on the computer.",\r
"This invoice has already been scanned and is waiting to be processed.",\r
"This invoice has already been scanned and processed into a costing sheet.",\r
"This invoice goes into the books for",\r
"This computer is",\r
"This computer is an admin. Changes are sent to the main computer; when the main one publishes a newer snapshot, the database here is replaced (entries already sent remain saved).",\r
"This computer is the main one and publishes the snapshot; re-receiving would replace its database with an older snapshot. The order was not executed.",\r
"This computer is now an admin: it has the main computer's authority (processing, numbers, books, settings), does not publish the database and automatically follows the main database.",\r
"This computer is now the main one: it processes scans, assigns numbers and publishes the database.",\r
"This computer is now a secondary one: it enters documents and automatically follows the main database.",\r
"This computer is not connected to the IRIS CORVINA server (Connection → Data exchange). The Manager connects via the database file.",\r
"This computer is not paired with the server as Accounting. Cash registers are kept locally.",\r
"This computer is not paired with the server as Accounting. The Manager connects via the database file.",\r
"This employee has no shifts in that month.",\r
"This device",\r
"This device is set up as a scanner and does not create costing sheets. For the office computer, the mode is changed in Settings → Device.",\r
"This device is set up as a scanner. This action is performed on the computer in the office.",\r
"This device is set up for scanning only. Costing sheets are created by the computer.",\r
"This device is a phone: it scans and sends invoices. Costing sheets and document numbers are made by the computer in the office; this cannot be switched on on the phone.",\r
"This device is already paired with the company \\"{0}\\" (PIB {1}).\\n\\nA new code pairs the device with another company: data exchange for \\"{2}\\" via the server on this device is then stopped (the database remains).\\n\\nContinue?",\r
"This device does not exchange data",\r
"This device does not exchange data with cash registers. A connection to the server or an exchange folder is required (Connecting).",\r
"This device does not exchange data. A connection to the IRIS CORVINA server is required (Connecting).",\r
"This device is not connected to the IRIS CORVINA server. Connecting is done with a code provided by the administrator (Connection → Server).",\r
"This device is not paired with the IRIS CORVINA server. Messages, requests and error reports are sent through the server. Pairing: Connection → \\"Server (IRIS CORVINA)\\" (the code is provided by the publisher).",\r
"This device now makes costing sheets and assigns numbers.",\r
"This device now only scans. Costing sheets are made by the computer.",\r
"Here",\r
"this data was changed here after the state from which the other computer started",\r
"this data was changed here, and the change has not been sent yet",\r
"this data was deleted here",\r
"another store named \\"{0}\\" already exists here",\r
"These changes from other computers have not been entered automatically, because they could overwrite newer work. For each change, choose:",\r
"These receipts were issued in",\r
"This leave fully uses up the annual leave for the current year.",\r
"This Rulebook regulates the length of annual leave, criteria for its extension, the manner and procedure of its use, the leave plan, salary compensation during leave, and paid and unpaid absence of employees at the Employer. Since the General Collective Agreement has not been in force since 30.04.2026, the rights it established are regulated by this Rulebook and the employment contract ({0}).",\r
"This Rulebook establishes the work duties of employees, lesser and more serious breaches of work duty, the measures imposed for them, the procedure for establishing responsibility, temporary removal from work and material liability. An employee is liable only for a breach that at the time of commission was defined by law, a collective agreement or the employment contract (Art. 144 para. 4 ZOR), so the list of breaches from this Rulebook is also built into each employee's employment contract.",\r
"This Rulebook establishes the internal organisation of {0} (hereinafter: the Employer), organisational units and their scope, positions with job descriptions, conditions for establishing employment and performing duties in each position (level of educational qualification or professional qualification, work experience, special knowledge, skills and competences), the number of post-holders, responsibility and management, as well as the way employees are assigned ({1}). The Employer has more than {2} employees and is obliged to have this act ({3}).",\r
"By this contract the Employee establishes an employment relationship with the Employer for {0}, with {1}. The start date is {2}; the rights and obligations arising from the employment relationship arise on that day.",\r
"Authorised person",\r
"This is the admin computer. Its database may lag behind the main one by a few minutes, and the registers take every newer price list. Publish the price list from this computer?",\r
"This is the admin computer. Cash register closings are picked up by the main computer; picking them up here creates write-off documents with this computer's numbers.\\n\\nContinue?",\r
"This is an interim report up to {0}; turnover after that is not included.\\n\\nThe interim report is saved only if the day has ended by then. The daily (Z) report of the same day replaces it later.\\n\\nSave the interim report?",\r
"This is the company's first Manager: the Manager administrator (name and PIN) is created on it.",\r
"This is an exchange snapshot, not a company database. On a secondary computer, data is downloaded through Connection → \\"Download the complete main database\\". This item can be deleted.",\r
"This is a secondary computer: vouchers created here stay only on this computer and the main computer's snapshot overwrites them. Finance is kept on the main (or admin) computer.",\r
"This is not a fiscal receipt.",\r
"This is not a quote.",\r
"This is not the QR code of a fiscal receipt. Point the camera at the QR code on the receipt.",\r
"This is not an official balance form. Payroll costs are taken from the Payroll module (without a payroll calculation for the year they stay at zero); other operating expenses are not kept in the application and stay at zero, so they need to be added before submission. The balance sheet requires a chart of accounts and is not available in this form.",\r
"This setting is available only on an Android phone.",\r
"These are two real, separate payments",\r
"this company",\r
"or",\r
"or s",\r
"Labels goods with prices and declarations, changes prices on instruction.",\r
"Mark the document as annulled (it stays in the records, the number is used up)",\r
"Marked as auxiliary.",\r
"Marked as a foreign supplier (account 4340).",\r
"marked as duplicate",\r
"marked ones keep the old margin",\r
"marked in the view",\r
"For selected (",\r
"Marked \\"into purchase cost\\":",\r
"Marked as paid.",\r
"marked for import",\r
"Selected:",\r
"Select {0}",\r
"Select active",\r
"select all",\r
"Select all",\r
"Select all shown",\r
"Select all rows without risk",\r
"Tick at least one holiday day.",\r
"Tick at least one premises (or \\"all premises\\").",\r
"Mark the guest as a no-show? The room is released.",\r
"Code",\r
"Exemption code of the tax item",\r
"Label of location {0}",\r
"The location label has at most 4 characters.",\r
"Auxiliary mark removed.",\r
"Code of the business premises the property belongs to; empty = not linked.",\r
"The batch label is too long (at most 40 characters).",\r
"Foreign supplier mark removed (account 4330).",\r
"The version label is not valid. The update was rejected.",\r
"Flags",\r
"Menu labels",\r
"Room codes",\r
"p.Broj",\r
"p.DatumPazara>=? AND p.DatumPazara<=?",\r
"p.IzMarketID",\r
"p.MarketID",\r
"p.UMarketID",\r
"pa.MarketID",\r
"page",\r
"PAK",\r
"The package from the feed is not signed with the publisher's key — the update was refused.",\r
"Cash register package",\r
"Cash register package without a 0 % base.",\r
"The cash register package carries a 0 % base (fiscal code EX).",\r
"The package must be: {0}.",\r
"The package does not contain index.html and all its files — it is not a valid application package.",\r
"The package has no items.",\r
"The package is not signed with the publisher's key — the update was refused.",\r
"Package of",\r
"Filing package: {0} and {1}",\r
"Packages",\r
"Package",\r
"PALL MALL",\r
"Guesthouse",\r
"paper on a flat, light surface, phone parallel above the paper, the strip fills the frame. Faded print reads better from a picture taken with the phone's regular camera (with flash) and chosen from the gallery.",\r
"The paper interim report from the register is photographed, and the app reads the amounts and fills in the takings; the amounts are checked before saving.",\r
"PAR",\r
"PARLIAMENT",\r
"Co-payment",\r
"Partner",\r
"Partner / store",\r
"The partner has no e-mail address entered.",\r
"partner:",\r
"Partner: {0}{1}{2}.",\r
"Partners",\r
"Partners (companies and agencies)",\r
"partner",\r
"Partner",\r
"Partner stores",\r
"Partner stores: {0}. Their invoices stay in the books and tax forms; here only whose debt it is is separated. A payment linked to an invoice goes where the invoice is; unlinked payments and opening balances are ours.",\r
"partner",\r
"ACCRUED EXPENSES AND DEFERRED INCOME",\r
"Passport",\r
"passport (PASS)",\r
"PASS",\r
"pastet; kobasic; salam; sunk; prsut; slanin; suho; dimljen; pecen; marinir; zacinj; cevap; pljeskavic; hrenovk; virsl; konzerv; narezak; panir; supa; kocka",\r
"Beans",\r
"PAUŠAL",\r
"Flat-rate compensation paid to a farmer at 8% rate",\r
"Flat-rate compensation paid to a farmer at the 8% rate (manual)",\r
"Flat-rate compensation to farmers (PR-PDV field 22)",\r
"Flat-rate payment",\r
"Flat-rate tax payment",\r
"Break",\r
"Break (min)",\r
"Pauses: an array of {od, do} dates.",\r
"PAZ",\r
"daily takings",\r
"Daily takings",\r
"Takings (no split by payment method)",\r
"Daily takings (total with VAT)",\r
"Daily takings {0} {1}",\r
"Daily takings {0} {1} (cash register {2}, shift #{3}) were corrected manually, and the cash register now sends a different amount ({4} €). The manual correction was kept; verification is required.",\r
"Daily takings {0} {1} (cash register {2}, shift #{3}) are in a locked month. The change from the cash register was not entered.",\r
"Daily takings {0} {1}{2}",\r
"takings {0}{1}",\r
"Takings {0}{1} (excl. VAT)",\r
"Daily takings without cash/card split",\r
"Takings without a Z number (in KIF \\"Z-0000\\"), a Z number out of the store's sequence, or a missing daily report",\r
"Daily takings cash",\r
"daily takings from the trade ledger",\r
"takings from the cash register closing",\r
"The takings have been corrected: {0} EUR.",\r
"Takings saved from the image: {0} EUR.",\r
"The takings have been saved: {0} EUR.{1}",\r
"Daily takings cards",\r
"The daily takings do not exist.",\r
"The takings were not saved. {0}",\r
"The takings were not saved. The amounts do not match: {0}.",\r
"The takings were not saved. Possible duplicate entry: {0}.",\r
"The takings were not saved. An X report has been entered for that day.",\r
"The takings were not saved. Takings already exist for that store and date.",\r
"The takings of {0} already have a recorded payment.",\r
"daily takings of 0.00 EUR",\r
"Daily takings with a refund or without sales cannot have services. The \\"of which services\\" field must stay empty.",\r
"The takings no longer exist (deleted, possibly on another computer).",\r
"No takings selected for the payment.",\r
"Takings – cash",\r
"Takings – card",\r
"Takings – bank transfer and other",\r
"Daily takings: part without cash/card split (not a bank transfer)",\r
"Daily takings: cash (cash desk per store)",\r
"Daily takings: cards pending collection (POS)",\r
"Daily takings: revenue from sale of goods in retail",\r
"takings",\r
"takings with cash have no recorded payment (statement or manual entry):",\r
"takings in",\r
"Takings in {0}. without a split by VAT rates: {1} ({2} EUR gross). \\"Sold\\" and earnings also include VAT until the split is entered from the Z report.",\r
"Daily takings",\r
"takings + issued invoices",\r
"Takings without a correct split by rates (",\r
"Takings and turnover already entered stay in the parent store.",\r
"takings by item basis + invoices with Art. 25 basis + manual",\r
"takings by item basis + invoices with that basis + manual",\r
"Takings with cash for which there is no bank statement or manual entry of the payment. They are not in the \\"Payment date\\" and \\"Payment amount\\" columns nor in the payment total, because only actually paid-in takings are entered there (Rulebook Art. 7, col. 6–7).",\r
"Cash takings for which there is no bank statement or manual payment entry. They are not in the \\"Takings deposit\\" columns nor in the total of deposits (Rulebook 34/12 Art. 7: column 7 is \\"amount of daily takings deposited\\").",\r
"Takings marked \\"Cash register",\r
"Takings for the day {0}",\r
"takings: total − VAT by rate",\r
"PD",\r
"PD — corporate income tax",\r
"PD calculation, return not saved",\r
"PD return",\r
"PD return {0} has been saved. The tax in the income statement is taken from the saved return.",\r
"PDF",\r
"PDF {0}/{1}: {2}",\r
"The PDF document was not created.",\r
"The PDF has {0} pages without readable text. OCR is performed only for the NLB daily statement (up to {1} pages), and this is not such a statement (POS report, scanned document…). Payments from the account statement are entered manually or by copying text from e-banking.",\r
"PDF statement",\r
"PDF created: {0}",\r
"The PDF has been downloaded.",\r
"PDF saved ({0} costing sheets, each on its own page): {1}",\r
"PDF saved: {0}",\r
"The PDF has no readable text (embedded font without a character map, typically an NLB/ibank statement), and OCR reading produced no items. Payments are entered by copying the statement text from e-banking or manually.",\r
"The PDF has no readable text. {0}…",\r
"The PDF has no readable text. OCR reading, page {0}/{1} ({2})…",\r
"The PDF has no pages.",\r
"The PDF has no text layer (scan). The table is entered by copying, or as an Excel file from the supplier.",\r
"The PDF cannot be read: {0}",\r
"A PDF with scanned \\"DAILY REPORT\\" strips from the register (several pages at once). Each page is read twice (two OCR engines) and confirmed by the report's arithmetic; unconfirmed pages are marked and checked against the image. The first reading prepares about 19 MB of data and takes longer.",\r
"The PDF contains {0} statements ({1}).\\n\\nEnter the statements in the bank register and post the payments recognised by PIB or a remembered account?\\n\\nA statement whose arithmetic check does not match is not entered; existing statements are skipped.",\r
"The PDF cannot be read: {0}",\r
"The PDF is created and opened immediately for preview before printing.",\r
"The PDF of all costing sheets is created and opened immediately for review before printing.",\r
"PDF: {0}",\r
"PDF: {0} pp., header: {1}{2}",\r
"PDobracun",\r
"VAT",\r
"VAT (field 20)",\r
"VAT (field 21)",\r
"VAT (from the declaration)",\r
"VAT {0} %",\r
"VAT {0} % — awaiting customer notification",\r
"VAT {0} does not match rate {1} % on the base {2} (expected {3}). VAT paid on import is entered as a customs declaration (Forms → Import and foreign services; the register is enabled in Settings → Company) and goes to PR-PDV field 20, not 19.",\r
"VAT {0} does not match the rate of {1} % on the base {2} (expected {3}). The base and VAT on the declaration must be checked; the amount from the declaration is entered.",\r
"VAT {0}% ({1}) does not match the base {2} (should be about {3})",\r
"VAT 15 % in daily takings",\r
"VAT 21 % in daily takings",\r
"VAT 7 % in daily takings",\r
"VAT without the right of deduction",\r
"VAT without the right of deduction: in purchase value, not in PR-PDV field 19",\r
"VAT number",\r
"VAT No.",\r
"VAT number (VAT)",\r
"VAT and customs duty on import",\r
"Output VAT",\r
"VAT amount",\r
"VAT was calculated on the day the advance was received, from the amount received (VAT Act Art. 18 para. 4, VAT Rulebook Art. 76 para. 2). The advance receipt is cancelled by the delivery receipt (VAT Rulebook Art. 76 para. 3).",\r
"VAT credit",\r
"VAT CREDIT (27−24)",\r
"VAT on advance {0} %",\r
"VAT on domestic turnover at 15% rate",\r
"VAT on domestic supplies at the 15% rate (takings + issued invoices)",\r
"VAT on domestic turnover at 21% rate",\r
"VAT on domestic supplies at the 21% rate (takings + issued invoices)",\r
"VAT on domestic turnover at 7% rate",\r
"VAT on domestic supplies at the 7% rate (takings + issued invoices)",\r
"VAT on shortage {0} (4740) is in the ledger, but the return does not show it yet",\r
"VAT on shortage above norms",\r
"VAT on turnover of gas, electricity and heating/cooling (transfer of liability)",\r
"VAT on supply of gas, electricity and heating/cooling (reverse charge) (manual)",\r
"VAT on services of foreign entities",\r
"VAT on services of foreign persons — liability (PR-PDV field 21)",\r
"VAT on services of foreign persons — input tax (PR-PDV field 21)",\r
"VAT on services by foreign persons (services of foreign persons (Imports and foreign services) + manual)",\r
"VAT cannot be negative.",\r
"Net VAT",\r
"VAT was not calculated on the basis of Article {0} of the Value Added Tax Act.",\r
"VAT is not split by rates; import is possible only with a selected VAT rate",\r
"The VAT liability arose on {0} (VAT Act Art. 18 para. 3).",\r
"The VAT liability for this invoice arises on {0} (the eighth day from delivery, Art. 18 para. 3 of the VAT Act) and belongs to the locked month {1}. An amended VAT return for {2} is required; issuing is possible after that month is unlocked.",\r
"VAT calculated on services from foreign persons (input tax)",\r
"VAT paid on import",\r
"VAT paid on imports (customs declarations (Imports and foreign services) + manual)",\r
"VAT paid on import (PR-PDV field 20)",\r
"VAT paid on import (input tax)",\r
"VAT by stores",\r
"VAT BY UNITS — STATEMENT FOR THE PARTNER",\r
"VAT on advances received 15 %",\r
"VAT on advances received 21 %",\r
"VAT on advances received 7 %",\r
"VAT rules for a hospitality outlet",\r
"VAT return and payment for {0}/{1}",\r
"VAT return, KPR, KIF, I-RAČ and U-RAČ, VAT without the right of deduction, import (customs declaration) and services of foreign persons",\r
"VAT registration number",\r
"VAT from the cash register receipts (same as the X report); the 0 % rate with an exemption basis is a separate row.",\r
"VAT from the invoice goes into the purchase value and allocation, not into PR-PDV field 19 (Chart of accounts 11/20, Art. 12 para. 2)",\r
"VAT cannot be deducted",\r
"Accommodation VAT",\r
"VAT status",\r
"The company's VAT status does not match what was sent on the receipt.",\r
"VAT rate changed.{0}",\r
"The VAT rate must be a number from 0 to 100.",\r
"VAT in daily takings 15 %",\r
"VAT in daily takings 21 %",\r
"VAT in daily takings 7 %",\r
"VAT in daily takings 476x — PAZ vouchers vs daily takings (VAT 21+15+7)",\r
"VAT on received invoices at the lower rate of 7 %",\r
"VAT on received invoices at the standard rate of 21 %",\r
"VAT on received invoices at the reduced rate of 15 %",\r
"VAT in selling value",\r
"VAT goes into the purchase value and allocation, not into PR-PDV field 19",\r
"Input VAT",\r
"VAT reduced",\r
"VAT valid from (empty = immediately)",\r
"Pdv134002",\r
"Pdv15",\r
"Pdv21",\r
"Pdv7",\r
"PDVIzvor",\r
"PDVIzvorVrijeme",\r
"PDVMKT",\r
"PDVProc",\r
"PDVStopa",\r
"Bakery products of all kinds",\r
"Mushrooms, fresh champignons",\r
"Nappies",\r
"pelene; pelena",\r
"Period",\r
"The period (from – to) has not been selected.",\r
"Period {0} is locked. Changes are not possible.",\r
"The period has been removed.",\r
"The period has been entered, but the salaries have not been changed. In the employee calculation, a bar offers entry for that month.",\r
"The period is not valid.",\r
"Period from",\r
"The absence period (from–to) is required.",\r
"Period by date",\r
"The period is on the same basis as the ledger above. Invoice amounts (excl. VAT, input VAT by rates, incl. VAT) come from the supplier invoices; purchase, RUC and selling value come from the costing sheet (outlet debit). Clicking a row opens the costing sheet.",\r
"The repeat period is not valid.",\r
"The supply period was moved to the next month.",\r
"Supply period from",\r
"Supply period: the \\"from\\" date is after the \\"to\\" date.",\r
"Supply period: the date is not valid.",\r
"Supply period: both dates (from and to) are required.",\r
"Work period",\r
"Period of work in the month:",\r
"The period refers to",\r
"The period overlaps with one already entered ({0} – {1}). The \\"to\\" date needs to be entered on the previous period.",\r
"The request period is not valid (from–to).",\r
"period: {0} - {1}",\r
"period: {0} - {1} · import VAT = PR-PDV field 20",\r
"period: {0} - {1} · VAT Act Implementing Rules Art. 121 para. 4",\r
"period: {0} - {1}{2}",\r
"Periodic analytical overview of issued invoices with IKOF, JIKR and ENU / business premises / operator marks, for the period selected above.",\r
"Fri",\r
"Fri",\r
"Friday",\r
"Friday",\r
"Petnjica",\r
"PGO",\r
"PHILIP MORRIS",\r
"PHOTOS",\r
"PI",\r
"PIB",\r
"PIB (company; empty = natural person)",\r
"PIB (TIN)",\r
"PIB {0}",\r
"PIB {0} · {1} · activity code {2}",\r
"PIB / JMB",\r
"PIB / registration number",\r
"The supplier PIB was not found in the response.",\r
"The company PIB (8 digits) is required. The PIB identifies the company in the books, the licence and data exchange.",\r
"Company PIB (Settings → Company)",\r
"the company PIB is not entered",\r
"The company PIB is not entered (Settings → Company). Manager files cannot be assigned to the company.",\r
"The company PIB is not entered (Settings → Company). Ownership of cash register closings cannot be determined.",\r
"The company's PIB is not entered (Settings → Company). Price exchange is not possible without a PIB.",\r
"The company PIB is not entered (Settings → Company details). The licence is loaded after the PIB is entered.",\r
"PIB has 8 digits (13 for natural persons).",\r
"Issuer PIB",\r
"Customer PIB",\r
"The PIB must have 8 or 13 digits.",\r
"The PIB on the report ({0}) is not the PIB of the open company ({1}). This is another company's report.",\r
"PIB unknown",\r
"Partner PIB",\r
"A legal entity's PIB has 8 digits.",\r
"The PIB in the certificate does not match the company PIB on the receipt.",\r
"The PIB of the account owner on the statement is not the PIB of this company",\r
"PIB-{0}",\r
"PIB, registered office town (municipality), at least one outlet (store, premises, office)",\r
"PIB: {0}",\r
"Drinks",\r
"Drinks (alcoholic and non-alcoholic) — in bottles and other packaging",\r
"PIN",\r
"PIN (4–8 digits)",\r
"The PIN and the PIN confirmation do not match.",\r
"The PIN and the confirmation do not match.",\r
"PIN is active",\r
"The PIN has been set.",\r
"The PIN has been removed.",\r
"A PIN has already been set.",\r
"The PIN must have 4 to 8 digits.",\r
"The device PIN has been removed. A new PIN is set in Settings → Protection.",\r
"PIN for sensitive actions",\r
"PIN for sensitive actions (optional)",\r
"Pio",\r
"PIO",\r
"PIO (contractor)",\r
"PIO borne by the employee (%)",\r
"Written decision on work on a public holiday (Art. 89): outlets, employees by schedule, 150 % increase, notice 3 days earlier",\r
"Written warning",\r
"The written warning about the initiation of proceedings has not been delivered. The employee must be given a deadline to respond (Art. 147).",\r
"Written warning delivered",\r
"Written warning to employee",\r
"Asking about screen access is not possible on this device. The order was not executed.",\r
"pivo; vino; rakija; viski; votka; dzin; rum; liker; konjak; tekila; vinjak; loza; sampanjac; koktel",\r
"Unit",\r
"PK — semi-skilled (II)",\r
"pl.DobavljacID IS NOT NULL",\r
"PLAC",\r
"Pays",\r
"Pays (by years)",\r
"Pays by bank transfer",\r
"PLACANJA",\r
"supplier payments awaiting posting (Bank → Transactions)",\r
"Supplier payments recognised by PIB or a remembered account are posted immediately; the rest waits for review.",\r
"payments have an unallocated part (",\r
"Payments were not posted automatically for accounts that are not among the company's accounts: {0} (Settings → Company).",\r
"payments posted (",\r
"Payments from statements (mail and manual import) are posted automatically only from these accounts. An account is entered by confirming \\"Our account\\" or when the statement carries this company's PIB.",\r
"PLACANJE",\r
"payment",\r
"Payment",\r
"Payment (bank statement)",\r
"Payment {0} (utilities)",\r
"Payment {0} {1} ({2} EUR)",\r
"payment {0} of {1} EUR is not linked to a transaction, and the same payment on the statement is waiting under a different recipient ({2})",\r
"The payment was posted from a bank statement and is not deleted here. The posting is cancelled in Bank.",\r
"The payment has been saved.{0}",\r
"The payment does not exist (it may already have been deleted).",\r
"Payment is not advisable without verification. The supplier claims {0}{1}{2}. A deviation from the records may be a supplier error, an invoice that has not been entered yet (including scans awaiting processing) or an attempted fraud. Before payment, a physical check of the original invoices/delivery notes and costing sheets for these items is required, as well as copies signed by the person who received the goods, requested from the supplier.",\r
"payment is not linked to an invoice",\r
"A payment can always be entered manually too, at the supplier.",\r
"Advance paid",\r
"Rent paid {0}",\r
"Rent paid to a natural person",\r
"paid",\r
"Paid supplier invoice",\r
"paid",\r
"Paid",\r
"Paid / used",\r
"Paid absence",\r
"paid absence on request",\r
"Plan by",\r
"Usage plan —",\r
"ANNUAL LEAVE USAGE PLAN {0}",\r
"Annual leave plan for {0} (deadline {1}, {2}): {3} employees have no leave entered: {4}{5}.",\r
"Plans procurement, monitors stock, prices, margins and goods expiry dates.",\r
"Planned departure",\r
"Planned, evenly across the week",\r
"PLAT",\r
"salary",\r
"Salary",\r
"Salary (regular earnings)",\r
"Salary = regular monthly pay. IQOS = a separate calculation of IQOS sales fees: its own summary, payslips and payout; tax is calculated on the sum with the salary, and it enters the IOPPD XML together with the salary (one return per month).",\r
"the salary includes seniority pay (total); the total amount stays the same, the contract needs to be checked",\r
"Payroll {0}.{1}.{2}",\r
"Payroll {0}/{1}{2}",\r
"Payroll / HR",\r
"Employee salaries",\r
"Salaries have been entered for: {0}.{1}",\r
"Payroll, HR and shifts (JMBG, earnings, employee contracts) are not opened on the scanning device, but on the computer in the office.",\r
"Payroll, shifts, employees, absences and rent",\r
"Payroll: gross salaries (net + tax + employee contributions)",\r
"Payroll: employer contributions (unemployment, Labour Fund)",\r
"Payroll: employer contributions + surtax (accountant's rule: the employer pays the surtax)",\r
"Payroll: employee contributions (PIO, unemployment)",\r
"Payroll: compensation reimbursed by the Health Fund (FZO) or the Social Work Centre (CSR) — a receivable, not an expense",\r
"Payroll: non-taxable receipts (per diems, severance pay, assistance…)",\r
"Payroll: liability for payout to employees (net + non-taxable − deductions)",\r
"Payroll: salary deductions (loans, administrative bans)",\r
"Payroll: income tax",\r
"Payroll: income tax surtax",\r
"plate.doprinosiPos",\r
"plate.doprinosiZap",\r
"PLATILAC",\r
"Plav",\r
"Pljevlja",\r
"PLJEVLJA",\r
"PLT",\r
"Plužine",\r
"PNG",\r
"By",\r
"PO",\r
"by item",\r
"By item",\r
"by item and outlet",\r
"By item and outlet",\r
"by phone number",\r
"by number in the name",\r
"per price list",\r
"By days",\r
"by day",\r
"per day (per diems: days × per diem, reduced for meals)",\r
"By supplier",\r
"Per supplier. A subsequent discount through a financial credit note is, in accounting terms, the same as a discount on the invoice. If the contract says the discount is given by credit note, \\"shortage after credit notes\\" applies; if the discount is on the invoice and the credit note is a separate bonus, \\"shortage on invoices\\" applies. Returned goods are not counted.",\r
"By invoice",\r
"by years of service (long-service award)",\r
"By group",\r
"by item group",\r
"After the period from checkout expires, the guest's personal data is deleted.",\r
"Per costing sheet",\r
"by cash register",\r
"By cashier",\r
"by premises code",\r
"by quantity",\r
"By which date the books are kept",\r
"By customer",\r
"By months",\r
"by month",\r
"By payment method",\r
"by order",\r
"by name",\r
"By name they look like cigarettes (not in the \\"Cigarettes\\" group and have the same margin as other goods);",\r
"by name does not look like a cigarette — check",\r
"per night",\r
"By outlets —",\r
"by outlet",\r
"By outlet",\r
"The tourist tax amount is offered by municipality.",\r
"per person per night",\r
"Per delivery notes {0}.",\r
"Per delivery note {0}.",\r
"based on data as at 31.12.{0}. ({1}) — Art. 7 para. 1 of Law 84/25",\r
"Per quote {0}.{1}",\r
"per stocktake",\r
"Works at the register when needed and performs other tasks as instructed by the manager.",\r
"by estimate",\r
"at selling price incl. VAT",\r
"Per receipt",\r
"for receipt {0}",\r
"On receipt: {0} of {1}",\r
"By length of service",\r
"Per issue form {0} of {1}.",\r
"By hour",\r
"per case (each item separately)",\r
"By VAT rate",\r
"by weight",\r
"per contract",\r
"by import",\r
"at wholesale price excl. VAT",\r
"by value",\r
"By type of turnover —",\r
"Under the Labour Law, earnings are due in proportion to the time spent working",\r
"Op. debit",\r
"Op. credit",\r
"opening stock {0} + purchases {1} − closing {2}",\r
"start",\r
"The start of the period is after the end of the period.",\r
"Start of work",\r
"Shift start (24 h, e.g. 16:30)",\r
"Home",\r
"Opening stocks",\r
"initial prices",\r
"Initial prices",\r
"initial prices from costing sheets",\r
"Initial prices from costing sheets: {0} items, {1} general and {2} store prices.",\r
"Initial prices created from costing sheets",\r
"the initial price list has already been created",\r
"Initial price list: {0}",\r
"The initial cash deposit has already been reported for today.",\r
"Opening stocktake {0} {1}",\r
"Opening balance (not written off)",\r
"Opening (cost)",\r
"opening balance",\r
"Opening balance",\r
"Opening balance — stocktake of goods by item as of {0}",\r
"Opening balance (debt)",\r
"Opening balance (debt) — entered {0}",\r
"Opening balance (optional)",\r
"OPENING BALANCE (before the period)",\r
"Opening balance {0}",\r
"Opening balance {0} has been recorded again.",\r
"Opening balance {0} is not equal to the balance on 31.12.{1}. The voucher was not saved. Differences: {2}{3}. Possible cause: another opening balance voucher exists on 01.01.{4}.",\r
"Opening balance {0} has been recorded.",\r
"The opening balance for {0} cannot be entered: {1}. {2} revenues and expenses have not been transferred to the result (difference {3} EUR). Order: cancel the closing of {4}, close and open {5}, then close {6} again and open {7}.",\r
"The opening balance for {0} cannot be entered: after the closing, revenues or expenses were posted in {1} (e.g. account {2}), so the closing does not include them (difference {3} EUR). The closing of {4} must be cancelled, made again, and {5} opened.",\r
"The opening balance for {0} cannot be entered: account balances on 31.12.{1} are not in balance (difference {2} EUR). Manual vouchers and opening balances of earlier years must be checked.",\r
"Opening balance = all postings before \\"From\\"; turnover = within the period. The sum of debit balances must equal the sum of credit balances (general ledger in balance).",\r
"Opening balance 01.01.{0}: NOT ENTERED (no stocktake as of 31.12.{1})",\r
"Supplier's opening balance (debt from earlier years) — the oldest item; a negative one reduces invoices like a credit note",\r
"The opening balance has been {0}: {1} EUR as of {2} (first row of the card).",\r
"The opening balance has been deleted.",\r
"The opening stock has been reopened.",\r
"The opening balance is provisional: it is the ledger balance of the previous year, which has not been closed (Rulebook 34/12 Art. 15 para. 2: the final balance is carried over). After the previous year is closed, it is replaced by the final one.",\r
"The opening balance was saved as voucher {0}.{1}",\r
"The opening balance has been saved: {0} EUR (opening balance row 01.01.{1}).",\r
"The opening balance is already entered ({0} EUR). Replace it with the amount {1} EUR?",\r
"The opening balance is already locked.",\r
"The opening stock has been closed: purchase {0} EUR, selling {1} EUR.{2}",\r
"The opening stock is closed: a stocktake of the whole outlet in the Goods stocktake, trade ledger, stock list, stocks and PD. It can be edited after reopening.",\r
"The opening balance is locked. Changes are possible after it is reopened.",\r
"ledger opening balance",\r
"Opening balance of accounts as of",\r
"Opening balance as of {0}",\r
"Opening balance as of {0}-01-01 (from closing {1})",\r
"The opening balance does not exist.",\r
"The opening stock has no items.",\r
"The opening balance has no items.",\r
"The opening balance has not been entered: the ledger balance does not include goods found on 01.01. A stocktake as of 31.12 of the previous year is required.",\r
"No opening balance has been recorded. The general ledger starts from zero (shadow year).",\r
"The opening balance is not balanced: debit {0}, credit {1} (difference {2}). Capital/result must be supplemented or \\"balance the difference\\" must be enabled.",\r
"The opening balance is not locked.",\r
"The opening balance is opened by the main computer.",\r
"Opening balance of goods",\r
"OPENING BALANCE OF GOODS — STOCKTAKE LIST",\r
"Opening stock of goods (purchase value)",\r
"Opening balance of goods 01.01.{0} (stocktake 31.12.{1}){2}",\r
"Opening stock by items",\r
"Opening balance of goods by item ({0} items)",\r
"The opening balance is locked by the main computer.",\r
"Opening balance: balancing difference (capital / retained earnings from previous years)",\r
"Start",\r
"Data",\r
"Data → Import from Accounting",\r
"item data",\r
"invoice data, items and amounts remain untouched",\r
"Company details",\r
"Data of company \\"{0}\\" from the server: {1}{2}. Existing data was not changed.",\r
"Company data (used in report headers)",\r
"Company details go into the headers of books, forms, invoices and payment orders. Fields marked * are required; the others can be completed later (Settings → Company details).",\r
"The company data on the IRIS CORVINA server has been changed.",\r
"The company data on the server has changed since it was downloaded.",\r
"Company data has been saved.",\r
"Company data, outlets, fiscalization, printer, backup and protection · company:",\r
"Guest data — {0} {1}",\r
"The data from the document has been entered. Check and complete it.",\r
"The medicine data has changed in the meantime.",\r
"Data as at 31.12.{0} (decision for {1})",\r
"Data as at 31.12.{0}: {1}",\r
"Data as of 31.12.{0} has been recorded. Category for {1}: {2}.",\r
"New store data",\r
"Data of this invoice:",\r
"Data is exchanged via a Google Drive folder (the old way). Connecting to the IRIS CORVINA server is recommended: exchange is then almost instant, and Drive is used only for backup.",\r
"The data was changed on another device. Save or discard your changes, then refresh.",\r
"The contract data has been saved.",\r
"The registration data is complete.",\r
"Data for registration with the Police Administration and the tourist organisation.",\r
"Contract data —",\r
"Data",\r
"The data has changed in the meantime.",\r
"data (costing sheets with numbers, daily takings and all actions together). The processed database exists only on the computer: the computer publishes it and the phone downloads it.",\r
"Pharmacy data is changed by the computer in processing mode (main or admin).",\r
"The data was changed in the meantime by another user. The data has been refreshed; repeat the change.",\r
"Settings",\r
"E-mail settings have been saved.",\r
"Settings are complete. Environment: {0}.",\r
"The setting \\"{0}\\" cannot be changed from here.",\r
"Setting {0} = {1}",\r
"configuring the reader",\r
"Set up kiosk",\r
"Podgorica",\r
"PODGORICA",\r
"Subgroup",\r
"Share",\r
"Default discount (%)",\r
"The default margin has been deleted. A scan from the Manager without a margin and without supplier history waits on the Scans screen (error \\"margin missing\\").",\r
"Default margin for scans from the Manager (%)",\r
"default",\r
"Default",\r
"The default printer in Windows is \\"{0}\\", which does not print but asks where to save a file. Select a real printer in Settings → Printer.",\r
"The default printer in Windows is \\"{0}\\", which saves to a file instead of printing. For \\"Print all\\" you need to select a printer from the list and save the choice.",\r
"Windows default",\r
"The default bank account has been changed.",\r
"default",\r
"Default",\r
"Off by default: goods on an issue form have not been sold (VAT Act Art. 4 para. 1 — a supply is a transfer of the right to dispose), they remain the trader's property and are discharged only by an invoice; a return has no entry (Rulebook 34/12 Art. 7 col. 5). On: the recipient disposes of the goods, the delivery has been made (VAT no later than 8 days after handover, VAT Act Art. 18 para. 3) — discharge on the date of the issue form at retail price (MPC), a return as a negative discharge, and an invoice from the issue form does not discharge again. The regulation does not mention issue forms; the choice should be confirmed with the accountant.",\r
"Support",\r
"Support (publisher)",\r
"Support and requests",\r
"Support and requests in the program (with a connection to the server)",\r
"IRIS CORVINA Support is requesting access to this device's screen",\r
"Funeral equipment",\r
"wrong check digit",\r
"Wrong check digit",\r
"Wrong PIN.",\r
"Wrong PIN. A forgotten PIN is changed in Settings → Security.",\r
"Wrong certificate password (or the file is not .pfx/.p12).",\r
"Wrong canonicalization method.",\r
"Wrong signature method.",\r
"Wrong digest method.",\r
"Wrong posting (wrong supplier, someone else's account…): the payment is deleted and the transaction returns to \\"pending\\".",\r
"poIsteku must be \\"citanje\\".",\r
"Simplified notes",\r
"Simplified notes for micro and small legal entities — 11 points from Art. 27 para. 4 of the Rulebook on the content and form of forms. The program fills in the template from data; the text can be edited and is remembered per year.",\r
"Gift for employees' children up to 15 years (up to 50 EUR per year per child)",\r
"Gift for female employees on 8 March (up to 100 EUR per year)",\r
"starting the reader",\r
"starting reading",\r
"starting reading: the first start downloads about 17 MB (internet required; afterwards it works without it)",\r
"Starting the camera…",\r
"Starting Outlook requires a new installation of the program (Setup 1.0.68 or later).",\r
"Coverage of loss",\r
"Statement coverage by account —",\r
"Try again",\r
"Attempts",\r
"Sex",\r
"Starting %",\r
"Starting job structure: {0} positions added, {1} completed, {2} duplicates merged, number of post slots reconciled {3}.",\r
"Police",\r
"Fields 16–18 include the advance ledger (VAT",\r
"The item fields are not valid.",\r
"the company fields were already filled in",\r
"Fields marked",\r
"Field",\r
"POLJE",\r
"The \\"issued by\\" field is required.",\r
"The \\"issued on\\" field must be an ISO time.",\r
"field 13",\r
"Field 13: zero rate (VAT Act Art. 25). Field 14: exempt turnover (VAT Act Art. 26–27). Turnover outside the VAT system does not enter the return. The basis is set on the item (Items → Basis 0 %); takings of the IRIS cash register are split by item turnover.",\r
"field 14",\r
"Field 30 — only when there is a VAT credit (field 29)",\r
"The format field must be \\"iris-licenca\\".",\r
"The field must be 13 or 14.",\r
"PR PDV-2 field for 0 % turnover whose basis is unknown (manual takings, OCR of Z report, item without basis). Default is field 14. Locked months are not changed.",\r
"Float",\r
"Cash float (opening cash)",\r
"Semi-finished products of own production",\r
"Helps with loading, unloading and placing goods at outlets.",\r
"auxiliary",\r
"Auxiliary",\r
"auxiliary",\r
"Assistant accountant",\r
"auxiliary employee",\r
"Auxiliary employee — above the required number or from another store; shown on the payslip",\r
"Mon",\r
"Mon",\r
"PON-{0}-{1}",\r
"Repeated minor violation (third minor violation within 12 months)",\r
"Monday",\r
"Monday",\r
"reverses",\r
"Cancel the last receipt (customer did not pay, entry error); the items can be put on hold",\r
"Undoing the last import",\r
"Annulling a termination: the employee returns as active, the document stays marked",\r
"Cancellation of closing",\r
"cancelled",\r
"ANNULLED",\r
"undone",\r
"Changes undone: {0}.{1}",\r
"Codes cancelled for cash register {0}: {1}.",\r
"Manager codes cancelled: {0}.",\r
"Pairing codes cancelled: {0}.",\r
"annulled from the employee card",\r
"annulled from the list of terminations",\r
"Undone: {0} items on {1} costing sheets restored to the old margin.{2}{3}{4}",\r
"Undo",\r
"Clear selection",\r
"Cancel code",\r
"Cancel codes",\r
"Cancel the last import",\r
"Undo all",\r
"Cancel entry",\r
"Cancel import",\r
"Cancel posting? The minus costing sheet is deleted (if the month is not locked), and the write-off remains.",\r
"Undo the posting? The supplier payment is deleted and the transaction returns to \\"pending\\".",\r
"Cancel the last import ({0})?\\n\\nPrices and data are returned to the state before the import, new items become inactive, and new barcode links are removed. An item that was changed after the import is not restored.",\r
"Cancel the confirmation of this week? The schedule can be changed again, and the hours are excluded from the shift-based calculation until the week is confirmed again.",\r
"Cancel the confirmation of week {0}? The schedule of that week can be changed again, and its hours are excluded from the shift-based calculation until it is confirmed again.",\r
"Cancel the week confirmation for {0}?",\r
"Annul the termination of {0} for {1} {2}? The employee returns as active, and the agreement/decision stays in the records marked ANNULLED.",\r
"Annul the termination of {0} for {1}?",\r
"Annul the termination of employment ({0})? The employee returns as active. Reason:",\r
"Undo the margin change ({0})?\\n\\nItems get the margin and selling price they had before that change. Items edited manually after that change and locked periods remain unchanged.",\r
"Undo the allocation of related costs? The purchase price and RUC of the lines return to the amounts from the invoice (selling prices stay the same).",\r
"Undo all of today's changes from this device ({0})?",\r
"Undo the year-end closing (deletes the closing voucher)?",\r
"Cancel the closing of the trade ledger for {0}? The certified book will no longer match the program until it is closed again.",\r
"Undo closing of the estimate? The invoice is deleted from the books and the estimate remains open.",\r
"Repeat PIN",\r
"Retry saving to the server",\r
"Repeated",\r
"Repeated: {0} slots in {1} stores ({2} days){3}.{4}",\r
"re-receiving the snapshot per order #{0}{1}",\r
"Reallocate…",\r
"Reopen the opening stock? Until it is closed again it is not in the Goods stocktake, trade ledger or stock list.",\r
"Reopen the stocktake? The value entered in Goods stocktake will be deleted.",\r
"Restart",\r
"Restart now",\r
"Only an instruction that is waiting for the main computer can be sent again.",\r
"Record opening balance {0} again from the balance on 31.12.{1}?",\r
"quote",\r
"Quote",\r
"Quote from which the invoice was created",\r
"The quote has been issued.",\r
"The quote does not exist.",\r
"A quote is not a tax document. An invoice is issued upon acceptance.",\r
"Quote valid until",\r
"Quotes",\r
"Quotes (pro forma invoices) and invoices for our services and sales",\r
"POP",\r
"stocktake",\r
"Stocktake",\r
"Stocktake — no difference ({0})",\r
"Stocktake \\"{0}\\" {1} {2}: {3} items ({4})",\r
"Stocktake (cost)",\r
"Stocktake {0}",\r
"Stocktake {0} {1}",\r
"Stocktake {0} {1}: {2} items, difference {3} €",\r
"Stocktake of the whole store",\r
"A stocktake of the whole outlet enters the trade ledger (surplus/shortage), stock and corporate income tax; a control stocktake of part of the goods does not affect the books.",\r
"Stocktake from the Manager \\"{0}\\": {1} The stocktake is waiting.",\r
"Stocktake from the Manager \\"{0}\\": store {1} does not exist in Accounting. The stocktake waits until the store is entered in Accounting or linked in the Manager.",\r
"Stocktake from the Manager ({0}): {1}",\r
"Stocktake from Manager: counting is in progress on Manager devices. Each new version from a device replaces its rows until the stocktake is finalised here.",\r
"The stocktake equals the book balance. There is no difference to post.",\r
"The stocktake is empty.",\r
"The stocktake has been posted (shortage/surplus against the 134000 balance).",\r
"The stocktake has been saved: {0} EUR.",\r
"The stocktake is already locked.",\r
"The stocktake is locked.",\r
"The stocktake is locked. Changes are possible after the stocktake is reopened.",\r
"The stocktake has been finalised. {0} EUR (purchase) has been entered in Goods stocktake.",\r
"The stocktake has been finalised. {0} EUR (selling) has been entered in Goods stocktake.",\r
"Stocktake does not exist.",\r
"The stocktake has no items.",\r
"stocktake not entered",\r
"stocktake of {0}: {1} {2}, ledger {3}",\r
"Fixed assets list",\r
"Stocktake by item: {0} ({1} items)",\r
"Stocktake",\r
"Stocktake (shortage / surplus)",\r
"Stocktake compiled by",\r
"The stocktake is opened for a store; the barcode is scanned",\r
"The stocktake is compared with the balance of account 134000 of the store on the stocktake date (selling value incl. VAT); the difference goes to shortage (5741) or surplus (6741). Posting is manual and makes sense only once the opening stock of goods has been entered; without it the whole stocktake looks like a shortage.",\r
"Stocktake by scanner — barcode, then quantity",\r
"stocktake entered",\r
"Stocktake: goods shortage (cost value)",\r
"Stocktake: goods surplus (cost value)",\r
"stocktakes · shortage {0}",\r
"stocktakes {0} new, {1} updated",\r
"Counted (found) quantity — basis for the revaluation amount",\r
"Counted quantity",\r
"Counted",\r
"Counted {0} of {1} items with a receipt in {2}.",\r
"Stocktakes",\r
"Stocktakes in the month (",\r
"Stocktake committee",\r
"Stocktake sheet",\r
"STOCKTAKE LIST",\r
"STOCKTAKE LIST — GOODS ON ISSUE FORMS",\r
"FIXED ASSETS STOCKTAKE LIST",\r
"Stocktake difference",\r
"Stocktake difference — shortage ({0})",\r
"Stocktake difference — surplus ({0})",\r
"Filled",\r
"Only empty fields are filled in; outlets are linked to stores in the review.",\r
"Filled in",\r
"Filled in: added {0}, completed {1}, merged {2}, reconciled {3}.",\r
"Occupancy",\r
"Occupancy and revenue",\r
"Discount",\r
"POPUST",\r
"The discount must be a percentage from 0 to 100.",\r
"The discount must be greater than zero.",\r
"Discount on the price per night (%)",\r
"Discount at the register (%)",\r
"Discount charged to the margin",\r
"The discount cannot exceed 100 %.",\r
"Discount in %",\r
"Discount in percent: a number, then %",\r
"Discount: between 0 and 100 %.",\r
"Discounts",\r
"discounts {0}",\r
"discounts from the cash register",\r
"Discounts from the cash register — goods stock reduction (excl. VAT)",\r
"Discounts from the cash register — goods stock reduction at selling price",\r
"Discounts from the register (takings {0}{1}){2}",\r
"Discounts from the tape (EUR)",\r
"PORCIJA",\r
"next to the database itself",\r
"comparison with our books",\r
"Comparison with the code list",\r
"Tax Administration / accountant",\r
"tax documents",\r
"The Tax Administration did not return the ENU code: {0}",\r
"Tax base — taxable profit (48 − 49) > 0",\r
"Tax base (41 + 100 % of 47) > 0",\r
"The Tax Administration (MAPR) returned an empty response for this receipt. The server currently has no data about the receipt; a retry is possible later.",\r
"The Tax Administration returned an empty response for this receipt.",\r
"Tax ledgers",\r
"Tax ledgers and forms",\r
"tax document",\r
"tax period 01.01.–31.12.{0}.",\r
"Tax expense for the period",\r
"Tax expense of the period (corporate income tax)",\r
"Tax treatment",\r
"The tax treatment of the fee should be checked with the Tax Administration.",\r
"tax documents",\r
"Tax",\r
"POREZ",\r
"Tax — lower rate (%)",\r
"Tax — higher rate (%)",\r
"Tax and surtax are paid on the same day the rent is paid",\r
"Tax final cons.",\r
"Input tax 15",\r
"Input tax NS",\r
"corporate income tax",\r
"Corporate income tax",\r
"Corporate income tax — estimate (9/12/15% progressive)",\r
"Corporate income tax (estimate)",\r
"Corporate income tax (line 246): {0}. For a year that is not closed, the result goes into the balance sheet as profit/loss of the current year.",\r
"Corporate income tax charged to the result",\r
"Value added tax",\r
"VALUE ADDED TAX",\r
"Value added tax calculated on services of foreign persons",\r
"Value added tax paid on import of goods at the general rate",\r
"Value added tax paid on import of goods at the reduced rate",\r
"Value added tax in advances paid at the general rate",\r
"Value added tax in advances paid at the reduced rate",\r
"Value added tax in received invoices at the general rate (excluding advances paid)",\r
"Value added tax in received invoices at the reduced rate (excluding advances paid)",\r
"Income tax",\r
"Tax on other income — excess above the tax-free amount (%) — ZPDFL Art. 37n and 50d",\r
"salary tax",\r
"Tax lower rate",\r
"Tax taxpayers 15",\r
"Tax taxp. NS",\r
"Tax, taxpayers",\r
"Tax general rate",\r
"withholding tax and other levies",\r
"Withholding tax and surtax",\r
"Withholding tax and surtax (IOPPD 065)",\r
"Withholding tax on dividends paid by a non-resident branch",\r
"Tax reduced rate",\r
"POREZA",\r
"POREZI",\r
"Taxes and contributions",\r
"Maternity / parental leave",\r
"Maternity / parental leave",\r
"Port",\r
"The SMTP server port must be a number from 1 to 65535.",\r
"The SMTP server port is not valid.",\r
"Portal",\r
"message",\r
"Message",\r
"Message from the issuer (IRIS CORVINA)",\r
"issuer message #{0} displayed",\r
"issuer message #{0} closed",\r
"The message was sent (thread #{0}). The publisher's reply arrives on this screen, with a \\"New support reply\\" banner.",\r
"Message sent: {0}.",\r
"The message is too large — 150 kB at most. Split the invoice or reduce the number of line items.",\r
"The message could not be read (size check).",\r
"The message could not be read during XSD schema validation.",\r
"The message was not accepted.",\r
"The message failed schema validation — a field has the wrong format.",\r
"message to support #{0} (thread {1})",\r
"The message for the Tax Administration is {0} kB, and 150 kB is the maximum allowed. The invoice has too many line items. Split it into two.",\r
"Messages to support",\r
"Messages to the publisher's support (IRIS CORVINA), company requests and error reports, through the server from this device",\r
"Messages cannot be read at the moment: {0}",\r
"POS",\r
"POS / cards",\r
"POS report",\r
"POS report (card payments), not an account statement. It serves to check the daily takings, not for payments.",\r
"POS report (card payments), not an account statement. There are no payments to enter.",\r
"POS reports",\r
"POS commission (monthly)",\r
"POS commission {0}: card payments from daily takings not covered by inflows from the statement {1}",\r
"Bank POS commission: cards from daily takings that the statement inflow did not cover",\r
"Send",\r
"Send document",\r
"Send by e-mail",\r
"Send to the main computer",\r
"Send order",\r
"Send to support",\r
"Send again",\r
"Send request",\r
"Send pending",\r
"Job",\r
"The job \\"{0}\\" is a position from the job classification. For permanent tasks of a position, this is not a contract for work but an employment relationship or temporary and occasional work (IOPPD 098, full contributions). A check with the accountant is required.",\r
"A special contribution for not employing persons with disabilities. It is entered in the IOPPD return (block at the bottom). An employed person with a disability is marked on the employee (\\"Employees\\" tab); the average salary is changed on the \\"Rates and types of income\\" tab.",\r
"Separate calculation of IQOS fees",\r
"Separate stocktake list of goods not located at the outlet (Stocktake Rulebook, Art. 2)",\r
"Separate stocktake list: goods issued on an issue form that are with the recipient on the stocktake day (issued − returned − sold).",\r
"Separate item without VAT",\r
"Special conditions (permits, health card, shift work…)",\r
"custom:",\r
"special margin",\r
"Sender",\r
"sender, subject, file",\r
"A greyed-out employee is already in some shift that day or on absence (the reason is shown when you hover). Actual hours are entered only when they differ from the shift.",\r
"Business premises (PJ)",\r
"Kiosk business premises (PJ)",\r
"Kiosk business premises (PJ) — required",\r
"Sent by",\r
"sent — waiting for the main computer",\r
"sent",\r
"Send the main computer an order to cancel the last import ({0})?\\n\\nThe main computer executes the order only if it is also its last import. Prices and data are returned to the state before the import, new items become inactive, and new barcode links are removed.",\r
"Sent",\r
"{0} changes sent ({1}).",\r
"{0} changes sent. {1} packages received: new records {2}, already existing {3}.{4}{5}{6}{7}",\r
"sent {0} times",\r
"errors sent: {0}",\r
"More key information was sent than needed.",\r
"More signatures were sent than allowed.",\r
"Sent to the printer: {0} costing sheets ({1}).",\r
"Sent: {0}.{1}",\r
"After this many consecutive nights the tax is not charged; 0 = not applied.",\r
"after the holiday",\r
"after the deadline or the response, decision on the measure within",\r
"After scanning, the entry of margins per item opens.",\r
"After each scan the costing sheet is sent immediately to the printer selected in Settings → Printer (without a dialog). This also applies to processing scans from the phone.",\r
"next one right after entry",\r
"New codes were assigned after the import.",\r
"After the year is closed in",\r
"Last modified: {0}, {1}",\r
"Last purchase",\r
"last purchase price",\r
"Last exchange",\r
"Last read · {0}",\r
"Latest costing sheets",\r
"Last receipt number from the Z report (KIF)",\r
"Last day of work",\r
"Last fiscalized receipt",\r
"Latest receipts (",\r
"Latest entered",\r
"Latest entered takings",\r
"Last entry",\r
"The last import has already been undone.",\r
"The last import on the main computer ({0}{1}) is not the import named in the instruction ({2}{3}).",\r
"The last import on the main computer has already been undone.",\r
"Last import:",\r
"Last",\r
"The Employer will pay the Employee the salary, allowances and other payments up to and including the termination date no later than {0} days after termination ({1}), as well as compensation for damages for {2}unused annual leave ({3}). Severance pay {4}. By the termination date the Employee will return work equipment, keys and documentation; the Employer returns the employment record book on the termination date ({5}).",\r
"The Employer adopts the annual leave plan for the calendar year no later than {0} of the current year ({1}), after prior consultation with employees (wishes are submitted by 31.03.) and taking into account the needs of the work process (season, stocktake, number of employees per outlet). Based on the plan, a decision on taking leave is issued and delivered to the employee no later than {2} days before the leave begins ({3}); a shorter period only with the consent of the employee and the Employer. The date may be changed because of work process needs no later than {4} working days before the start and with the employee's consent, and without consent only in the case of force majeure ({5}); the Employer then compensates the actual costs the employee incurred as a result.",\r
"The Employer is obliged to provide the Employee with working conditions and occupational health and safety measures, to train him or her for safe work before starting work and to provide the means and equipment for work ({0} and the Law on Occupational Health and Safety). The Employee is obliged to comply with the prescribed protection measures, hygiene and sanitary regulations for the handling of food, to use protective equipment, to take care of the Employer's property and goods and to immediately notify his or her superior of any danger, malfunction or damage.",\r
"Before starting work, the Employer informed the Employee in writing of the rights, obligations and responsibilities relating to the prohibition of workplace mobbing and of the mediator for protection against mobbing ({0}). The Employer is obliged to register the Employee for compulsory social insurance on the day he or she starts work, to submit the registration within {1} days and to hand a copy to the Employee within {2} days ({3}). The Employee is obliged to report a change of residence address and e-address to the Employer within {4} days ({5}) and agrees that documents may also be delivered to his or her e-address ({6}).",\r
"The Employer keeps records of the use of leave and absences in the accounting program (per employee and year: entitled, used, remaining), which is the basis for decisions, payroll and compensation on termination of employment. For matters not regulated by this Rulebook, {0} applies; if a collective agreement binding the Employer sets more favourable rights, those apply. The Rulebook is published on the notice board and enters into force on the eighth day after publication.",\r
"The Employer is represented, and its work is managed, by the executive director, who is superior to all employees. The work of the organisational unit Retail and outlets is managed by the retail manager; in an outlet, in the manager's absence, work is coordinated by an employee designated by the manager (shift leader), without a change of position. Employees answer for their work to the direct superior established by this Rulebook (column \\"Reports to\\"), and managers answer for the work of the unit they manage. In the absence of the executive director, they are replaced by a person whom they authorise in writing.",\r
"The duties of the position are defined by the employment contract until this Rulebook is supplemented.",\r
"Work is organised so as to ensure lawful, efficient and economical operation, full use of working time, clear responsibility of each employee, and equal opportunities in hiring and advancement, without discrimination on any ground. Only those conditions that are actually necessary for performing the duties are set for positions.",\r
"Business card",\r
"Operating profit and loss",\r
"OPERATING INCOME",\r
"OPERATING EXPENSES",\r
"OPERATING RESULT (profit/loss)",\r
"The Employer's business secret, determined by a general act in accordance with {0}, includes data on purchase prices and terms with suppliers, turnover and daily takings, stock, business plans, data on customers and employees, and security measures at the outlets. The Employee is obliged to keep them confidential for the duration of the employment relationship and for {1} years after it ends; disclosure of a business secret is a ground for termination of the employment contract ({2}). The Employee's personal data is processed only for the purpose of exercising rights and obligations arising from the employment relationship; the Employee has been notified in writing of video surveillance at the outlets for the safety of persons and property.",\r
"The store manager in the Manager confirms the goods receipt against the costing sheet (\\"OK\\" or a difference per item). The costing sheet is not changed automatically; the accountant resolves the difference (return, credit note, correction). Click a row: detail and costing sheet.",\r
"shop supervisor",\r
"POST",\r
"Mail (statements, ledger cards, invoices) is read only while classic Outlook is open. After starting Outlook and loading the mail, reading is repeated with the \\"Try again\\" button.",\r
"Mail from Outlook",\r
"Mail has been read",\r
"mail has not yet been read on this computer",\r
"Mail read",\r
"Mail is not read automatically.",\r
"Mail is only read",\r
"Mail: \\"{0}\\" is an account statement ({1}, counter printout) — imported as a statement",\r
"Set",\r
"Set {0} EUR",\r
"Set PIN",\r
"The setting has been saved.",\r
"There are changes not yet published to the registers. They are published automatically in the next round on the main computer, or immediately with the button below.",\r
"the existing voucher is in a locked month",\r
"A more recent margin change exists. Changes are reverted in reverse order, starting from the newest.",\r
"An opening balance {0} exists. The closing can be cancelled after that opening balance is deleted (Finance → Opening balance).",\r
"Dear Sir or Madam,\\n\\n{0}\\n\\nKind regards,\\n{1}",\r
"Dear Sir or Madam,\\n\\nYour ledger card / IOS for {0} as of {1} contains items that are not covered by our records:\\n\\n{2}\\n\\nTotal disputed: {3} EUR.\\n\\nPlease send us, for these items, copies of invoices and delivery notes signed by the person who received the goods (first name, last name, outlet), or correct the card if it is an error. Until reconciled, we cannot consider these items due for payment nor certify the IOS.\\n\\nKind regards,\\n{4}",\r
"Plant and equipment",\r
"Plant and equipment held for sale",\r
"Observes sanitary and hygiene regulations for outlets that sell foodstuffs.",\r
"Procedure — {0} · {1}",\r
"The procedure was initiated by a written warning of {0}, delivered to the employee with a {1}-day period for a written statement and the right to an oral statement. {2} {3}it was established that the employee committed the breach described in the operative part, which at the time of commission was defined by the employment contract and the Rulebook (Art. 144 para. 4 ZOR).",\r
"The proceedings were not found.",\r
"Procedure under the law (",\r
"The procedure is initiated by the executive director upon learning of the breach or on the initiative of any employee, by a written warning to the employee within {0} days of learning of it. The warning contains the employee's personal data and position, a description and timeframe of the breach, evidence and a notice of the right to an oral statement. The employee gives a written statement within {1} days of delivery (silence is deemed consent with the allegations), and within {2} days may request an oral statement; the hearing is held within 15 days of delivery of the warning, with the employee's right to the presence of a trade union representative and a defender, and minutes are kept ({3}). The decision — to discontinue the procedure, release from liability or a measure — is made by the executive director within {4} days of the expiry of the deadline for a statement or of the hearing (30 days with an inspection or expert examination); the decision contains an introduction, operative part, reasoning and instructions on legal remedy, is final and is delivered within {5} days. The employee may challenge it within {6} days before the Agency for Peaceful Resolution of Labour Disputes, and in the case of termination and conditional termination also before a court ({7}).",\r
"The procedure may be initiated within {0} months of learning of the breach and the offender, and must be concluded within {1} months of initiation; if the breach has the features of a criminal offence, it may be initiated within 6 months of learning of it ({2}). A measure cannot be enforced if {3} days have passed since the decision became final and enforcement has not begun; a warning, fine and conditional termination are removed from the records if the employee does not commit a new breach within {4} years ({5}). A fine is deducted from salary under a final decision, so that total deductions without the employee's consent do not exceed one third of the salary ({6}).",\r
"Signature (at the end of the message)",\r
"The licence signature is not valid. The file has been modified or was not issued by IRIS CORVINA.",\r
"The order signature does not match the issuer's key. The order was not executed.",\r
"Signature of the responsible person (Rulebook 34/12 Art. 11). In the electronic record, the user who closes the report is stored along with the name.",\r
"The signature as a whole is not valid.",\r
"The wrong part of the message was signed.",\r
"The signed order is older than 7 days (or has no timestamp) — it was not executed; the issuer must issue a new one.",\r
"receipt signing (Windows application with built-in fiscalization; a new installation is required, not just an update)",\r
"By signing, the employee confirms that they have been made familiar with the Rulebook on Internal Organisation and Job Classification No. {0} of {1} and with the job description of their position.",\r
"Only the fiscal request is signed (IKOF or SignedInfo).",\r
"Receivables and collection from customers",\r
"Receivables from commission and consignment sales",\r
"RECEIVABLES FROM SPECIFIC TRANSACTIONS",\r
"Receivables from government bodies and organisations",\r
"Receivables from the Fund (reimbursement of compensation)",\r
"Receivables from exporters",\r
"Receivables from customers (by partner)",\r
"Receivables from employees",\r
"Receivables from issued invoices — who owes, how much and for how long",\r
"Receivables from prepaid other taxes and contributions",\r
"RECEIVABLES FROM SALES",\r
"Receivables from imports for third-party account",\r
"Receivables for interest and dividends",\r
"Receivables for uninvoiced income",\r
"Receivables for overpaid corporate income tax",\r
"Receivables for overpaid VAT",\r
"Receivables for overpaid value added tax",\r
"Credit",\r
"potražuje",\r
"Credit",\r
"At least one business unit is required. Costing sheets, daily takings and books are kept per business unit.",\r
"confirmation is required.",\r
"needs checking against the image",\r
"Two different slots must be selected.",\r
"A store must be selected and the QR code of the fiscal receipt scanned.",\r
"It is necessary to unlock the payroll and run",\r
"It is necessary to run",\r
"The delivery of the decision (3a) must be recorded first.",\r
"The months of {0} must be closed first: {1}",\r
"\\"Fixed-term until\\" must be entered and saved.",\r
"Consumption on the room",\r
"Confirmation",\r
"Certificate of employment",\r
"PIN confirmation",\r
"Confirmation by week:",\r
"receipt confirmations {0}",\r
"Receipt confirmation {0}: {1}",\r
"Receipt confirmation from the Manager ({0}): costing sheet not found. The confirmation was saved and is waiting.",\r
"Goods receipt confirmation (Manager)",\r
"This certificate is issued at the employee's personal request and may not be used for any other purpose.",\r
"Week confirmation",\r
"The confirmation of week {0} has been cancelled.",\r
"The confirmation of the week has been cancelled.",\r
"Confirmation of reconciliation",\r
"Balance confirmation (when it matches) or a dispute with a list of disputed items, for signature, stamp and reply to the supplier",\r
"The confirmation for {0} has been cancelled.",\r
"Receipt confirmations",\r
"Receipt confirmations from the Manager",\r
"confirmed",\r
"Confirmed",\r
"Confirmed (occupies the room)",\r
"Confirmed {0} — click to cancel the confirmation",\r
"Confirmed links (",\r
"confirmed",\r
"Confirmed",\r
"Confirm",\r
"Confirmed by",\r
"Confirm week {0} – {1} for all stores?\\n\\nA confirmed week is locked and its hours enter the shift-based payroll calculation.",\r
"Confirm week {0}?\\n\\nThe schedule of that week (the whole week Mon–Sun) is locked as worked and enters the shift-based payroll calculation. Swaps and actual hours are corrected before confirmation (click on a day).",\r
"Confirm the week for {0}?",\r
"confirmed",\r
"It is hereby confirmed that {0}, JMB {1}, residing at {2}{3}, has been employed at {4}, {5}, PIB {6}, since {7}, for {8}, in the position of {9}, with {10}.",\r
"We confirm that the balance of liabilities of {0} to {1} as of {2}, in the amount of {3} EUR, AGREES with your records (balance on your ledger card {4} EUR).",\r
"Reliability",\r
"increase",\r
"Increase (EUR)",\r
"Increase of the selling value:",\r
"Increase in the value of inventories of work in progress, finished products and unfinished services",\r
"linked",\r
"linked to register outlet {0}",\r
"Linked barcodes",\r
"Linked documents (",\r
"Linked medicines also found in the new report: {0}, of which price changed: {1}.",\r
"Linked",\r
"Linked to \\"{0}\\": {1} rows. The link is remembered for the next import.",\r
"Linked to the code list (by barcode): {0} items. VAT rate corrected according to invoices: {1}{2}.{3}",\r
"Link",\r
"Connect through this connection",\r
"Link points of sale to stores",\r
"Link to an item",\r
"link to an item…",\r
"Link to existing",\r
"Link to an existing item",\r
"Link to code list and align VAT",\r
"Connection",\r
"Connection → Publish database for phones",\r
"Linking register items to the code list by barcode and aligning VAT rates with supplier invoices.",\r
"Linking a medicine to the report",\r
"connecting Manager (pairing code, company database file)",\r
"Linking point of sale \\"{0}\\" to store \\"{1}\\"",\r
"Connecting the IRIS Manager program",\r
"The linking is sent from this computer to the company's main computer, which performs it at the next data exchange; the result arrives here with its snapshot.",\r
"Connecting…",\r
"Withdraws goods that have expired or are damaged and records them as write-off.",\r
"refund",\r
"Return",\r
"return (negative quantity)",\r
"VAT refund",\r
"Goods return (takings {0}{1})",\r
"Return of goods or services",\r
"return",\r
"Refund",\r
"Refund / credit — {0}",\r
"Refund / credit note from supplier",\r
"Advance refund",\r
"Return of all goods",\r
"return to supplier",\r
"The return was deleted.",\r
"The return was entered.",\r
"Refund from",\r
"goods return",\r
"Goods return",\r
"Goods return per issue form no. {0} of {1}",\r
"Return exceeds the goods held by the recipient: {0} ({1} {2}).",\r
"returns to suppliers · {0}",\r
"Rollback is available only on the Windows version.",\r
"Returning to \\"{0}\\" changes the locked months: {1}. The change is not possible; the basis remains \\"{2}\\". To change it, those months must be unlocked first.",\r
"Return to the built-in address",\r
"Roll back to version {0}",\r
"Revert failed: {0}",\r
"Returns",\r
"Vegetables",\r
"Violation",\r
"Breach \\"{0}\\"",\r
"Violation * (from the catalogue or free entry)",\r
"The violation has been recorded. Next step: delivering a written warning to the employee within {0} days of learning of it (the procedure is opened by clicking the row).",\r
"Breach of work duty (catalogue)",\r
"violation)",\r
"on top of",\r
"The withdrawn batch has been received into a store. The goods need to be set aside and the withdrawal decision followed.",\r
"Withdrawn batches",\r
"Taken from the stocktake: {0} EUR (purchase).",\r
"Taken from the stocktake: {0} EUR (purchase). The last stocktake is not from 31.12. for {1}. The closing stock needs to be checked.",\r
"PowerShell cannot be started: {0}",\r
"Loan (owner, related party)",\r
"Position",\r
"ITEM",\r
"Items per the Rulebook on the content of the statistical annex (Official Gazette of Montenegro 6/11, 9/12); employees = average by months from the payroll calculations.",\r
"Positive exchange rate differences",\r
"POZIV",\r
"reference {0}",\r
"payment reference number = PIB-code of the municipality of the seat (the seat's town is not entered: Settings → Company)",\r
"payment reference number = PIB-code of the municipality of the seat (company PIB is not entered: Settings → Company)",\r
"The call does not come from the program page — refused.",\r
"VAT Act Implementing Rules Art. 121 para. 4 and Art. 122 para. 3",\r
"PPZPDV Art. 121 para. 4 and Art. 122 para. 3: advance receipt by date of payment, cancellation by date of the final receipt",\r
"PPZPDV Art. 76 para. 3: an advance invoice is cancelled by the supply invoice",\r
"PR",\r
"PR-{0}-{1}",\r
"PR-PDV",\r
"PR-PDV {0}/{1}: incomplete — {2}.",\r
"PR-PDV field 20: VAT liability on import (customs), while the import has no document of its own",\r
"PR-PDV field 20: VAT paid on import (input tax)",\r
"PR-PDV field 21: VAT on services from foreign persons — liability (reverse charge)",\r
"PR-PDV field 21: VAT on services from foreign persons — input tax",\r
"PR-PDV field 22 (flat-rate compensation {0}) has not been posted. Accounts are determined by the accountant (Posting scheme: pdv.pausal and pdv.pausal.obaveza).",\r
"PR-PDV field 26 ({0}) is greater than the input VAT in the books ({1}). {2} was transferred to expense.",\r
"PR-PDV field 26: input VAT without the right to deduction → expense",\r
"Threshold for the higher tax rate (EUR)",\r
"Monitors expiry dates and condition of goods at the register and near it.",\r
"Makes a daily copy to the backup folder",\r
"Draws up the work schedule (shifts), monitors attendance, approves replacements and assistance between outlets.",\r
"A minus costing sheet is created that removes the goods from the books (134000/134001/134002; offset 5771).",\r
"Annual leave rules (company rulebook)",\r
"Rules and taxes",\r
"The property rules have been saved.",\r
"VAT rules for a hospitality outlet are switched off.",\r
"VAT rules for a hospitality outlet are switched on.",\r
"Classification rules",\r
"Rulebook 34/12 Art. 11: a change in the price of goods in stock is recorded on the basis of the stocktake report (price revaluation).",\r
"Rulebook 34/12 Art. 11: a change in the price of goods is entered in the trade records on the basis of the stocktake report. An increase is entered as a debit, a decrease as a red cancellation (col. 4). The new price applies from the day of the revaluation in the stock list and the cash register price list; the price history remains (Consumer Protection Act Art. 15).",\r
"Rulebook 34/12 Art. 3 para. 1: the records are kept separately for each wholesale point and shop. Wholesale: records EV, accounts 1320/1329, 5012, 6020. Retail: records EM, accounts 134000/134001/134002, 5013, 6021. The type can be changed only while the outlet has no documents.",\r
"Rulebook 34/12 Art. 3: trade records are kept separately for each point of sale. Sender: col. 4 red cancellation at its selling value; recipient: col. 4 charge per the internal costing sheet. PPZPDV Art. 80: internal receipts do not affect the tax liability.",\r
"Rulebook 34/12 Art. 7 col. 4: charge \\"for wholesale trade at wholesale prices\\". The regulation does not expressly state whether the wholesale price includes or excludes VAT; the price excluding VAT was applied (the same amount as account 1320). To be confirmed by the accountant.",\r
"The rulebook allows at most {0} reward days per year (to change: ⚙ Rules).",\r
"Discipline rulebook",\r
"Annual leave rulebook",\r
"The annual leave rulebook allows an incentive for contribution at work of up to {0} working days per year (to change: Annual leave → Rules).",\r
"Rulebook on annual leave and absences",\r
"IOPPD Rulebook — by the 15th of the month for the previous month",\r
"Rulebook on the quantity of expenses on which VAT is not paid — \\"Official Gazette of the Republic of Montenegro\\" no. 74/06",\r
"Rulebook on the chart of accounts of Montenegro (Official Gazette of Montenegro 11/20) and analytical accounts",\r
"Leave rulebook",\r
"Rulebook on the organization and job classification of positions",\r
"Stocktake Rulebook (2009) Art. 2: property that is not located at the legal entity is counted on separate stocktake lists.",\r
"Rulebook on work discipline and responsibility of employees",\r
"Rulebook on the content and form of FI forms (11/20), Art. 4: column 7 is filled in only for retrospective application of an accounting policy, retrospective restatement or reclassification of items — then the whole column, assets and liabilities.",\r
"Rulebook on job structure",\r
"Rulebook: basic",\r
"Rule",\r
"Rule \\"{0}\\"",\r
"Rule \\"{0}\\": {1}.",\r
"Rule \\"{0}\\" has been deleted.",\r
"Rule \\"{0}\\" has been saved.",\r
"the rule is enabled",\r
"The rule must have at least one expression in the \\"Words\\" field.",\r
"Rule not found.",\r
"rule removed",\r
"A rule applies to an item whose name contains at least one expression from the \\"Words\\" field (as the beginning of a word) and none from the \\"Exceptions\\" field; expressions are separated by semicolons. The first matching rule in order applies; without a rule the rate is 21 %. A manually entered rate and the rate from a supplier invoice take precedence over the rule. The rules for a restaurant & bar business unit are",\r
"Rule: a legal entity is in the category whose at most",\r
"Creating the company \\"{0}\\"…",\r
"Making a copy…",\r
"Legal form",\r
"Legal form: {0}",\r
"Legal basis (\\"Pursuant to …\\") — also enter the article of the company Statute; the last one entered is remembered",\r
"LEGAL ENTITY",\r
"Leave entitlement per employee —",\r
"Holidays",\r
"holiday",\r
"Holiday",\r
"Holiday \\"{0}\\" has been entered for {1}.",\r
"holiday {0}",\r
"Holiday {0} {1}",\r
"The holiday has been moved from {0} to {1}.{2}",\r
"The holiday has been removed.",\r
"The holiday has been entered.",\r
"The holiday has been restored.",\r
"There is no holiday on {0}.",\r
"Holiday at night (+190 %)",\r
"Labour Day",\r
"Holidays",\r
"empty",\r
"Empty = no visa.",\r
"empty = Cyrillic from Montenegrin",\r
"Empty = until further notice. After this date the lessor is not included in new months.",\r
"empty = general",\r
"Empty = per price list.",\r
"empty = a scan without a margin waits for manual entry",\r
"Empty = standard costs ({0} %). Another percentage is entered only when the law prescribes otherwise for that type of lease.",\r
"Empty = accommodation rate.",\r
"Empty = accommodation rate. The fee never carries the tourist tax.",\r
"Empty field = next number from the program; you can also enter the number from the register book (e.g. 216/2024).",\r
"PRD",\r
"of residence",\r
"employee's residence",\r
"place of residence",\r
"Residence",\r
"Counted",\r
"The filing version of the statements has been saved.",\r
"proposal",\r
"Proposal — click to confirm the week (locks the schedule and releases the hours into payroll)",\r
"Suggestion (closest amount)",\r
"Suggestion from stock on the invoice receipt date (sales by item from the register)",\r
"Schedule proposal",\r
"Proposal for {0} {1}: {2} slots in {3} stores.{4}{5}",\r
"Proposed measure: {0}.",\r
"Rows proposed from program data: {0}. It needs to be completed from the accountant's trial balance.",\r
"Suggest rates by rules",\r
"Suggest text",\r
"Subject",\r
"Subject of the advance",\r
"Subject of the advance: {0}",\r
"Subject of contract",\r
"Subject of the contract (the work)",\r
"Leased item",\r
"Pro forma from the receipt on screen (not a fiscal receipt); list of pro formas",\r
"Entrepreneur",\r
"Envisaged measure",\r
"Overview",\r
"Overview (day · month · year)",\r
"Overview (day/month/year) shows the entire cash flow; \\"Transactions → pending\\" contains items for review; \\"Statements and coverage\\" shows missing statements.",\r
"Preview + a sheet for each store with all costing sheets in the official form",\r
"Overview of prices by place. To edit: clicking a field (or Enter) opens the window for that place. A field without its own price follows the general price.",\r
"Daily overview, deadlines and quick access",\r
"INVOICE OVERVIEW",\r
"The folder view works only on an Android phone.",\r
"Overview and hours",\r
"Review and record",\r
"The preview was made on the data of this computer; the main computer performs the write, with a database backup. Nothing is written on this computer.",\r
"COSTING SHEETS REVIEW",\r
"COSTING SHEETS REVIEW — {0}",\r
"COSTING SHEET OVERVIEW BY LINE",\r
"The cash register overview is available on the accounting computer (processing mode).",\r
"The overview does not contain the recipient's name (only the purpose entered at payment, e.g. \\"placanje robe\\"), so the supplier is recognized only by the remembered purpose or by the amount of an open invoice. For reliable recognition, daily statements from NLB e-banking are needed (files \\"[…@ibank][account][number].pdf\\"), which contain the recipient's name and account.",\r
"the overview has not been published in this session",\r
"DAILY TAKINGS OVERVIEW",\r
"Business overview ·",\r
"OVERVIEW OF INCOME AND EXPENSES (estimate)",\r
"Review before entry",\r
"overview of the manager's work (orders, receipts, stocktakes)",\r
"Viewing is recorded in the access log (user, time, reason).",\r
"overview, margins, PDF",\r
"View only. Changes are made by a user with settings authorisation.",\r
"reviewed, no payments to enter",\r
"checked",\r
"Messages scanned: {0}. New attachments in Mail: {1}.",\r
"Messages reviewed: {0}. New attachments: {1}.",\r
"Messages checked: {0}. New attachments: {1}{2}.",\r
"Negotiates with suppliers on terms, discounts and complaints.",\r
"Renaming immediately changes the name for all employees with that job position as well.",\r
"Interrupted.",\r
"Overlaps with an already entered absence ({0}).",\r
"Over years of service",\r
"via the server",\r
"via the server and Drive folder (transitional mode)",\r
"via the IRIS CORVINA server",\r
"Overrun: {uredjaja, dana} whole numbers ≥ 0.",\r
"Limit exceeded: the entitlement for {0} is {1} working days, {2} already used, and this portion is {3}.",\r
"Night overtime (+80 %)",\r
"Overtime (+40 %)",\r
"Overtime night work",\r
"Overtime",\r
"Overtime of {0} h exceeds the legal limit of 10 h per week (≈ {1} h for this month; Labour Law, Art. 60).",\r
"Switching to the new codes is not possible: the code from the file already exists in table {0} ({1}).",\r
"Switch to new version",\r
"Go to date",\r
"transitional (a Google Drive folder is also used for exchange)",\r
"Transit account — cards pending collection (POS)",\r
"Transitional mode",\r
"Transitional mode is on: the program still writes and reads the Google Drive exchange folder. The mode needs to be switched off when all devices of the company are paired with the server.",\r
"PREMA",\r
"According to our records, as of {0} you have no debt: your claim against us (credited or paid more than invoiced) amounts to {1} EUR and consists of the following open items:",\r
"According to our records, our liability to you as of {0} amounts to {1} EUR and consists of the following open items:",\r
"According to our records, your debt as of {0} amounts to {1} EUR and consists of the following open items:",\r
"According to Settings, the company is not in the VAT system, but VAT is shown on the receipt. The Revenue Administration rejects such a receipt. Correct the rates on the line items or the VAT status in Settings.",\r
"vs. previous 7",\r
"According to the working hours, the kiosk does not work on Sundays.",\r
"is being moved from:",\r
"Move to another room",\r
"moved",\r
"Barcodes moved",\r
"Move",\r
"Move payroll ({0} {1})",\r
"Carry over from {0} to {1} (working days):",\r
"Carried-forward capital losses from earlier years up to the amount under 44 (PG 2)",\r
"carry-over",\r
"PRENOS",\r
"Transfer — issued",\r
"Transfer — received",\r
"Transfer (±)",\r
"Transfer {0}",\r
"Transfer {0} has already been sent to other computers, so the date must stay in {1}. A new transfer is needed for another year.",\r
"Transfer ±",\r
"Transfer of profit or loss",\r
"Carry-over and incentive for annual leave",\r
"Carried forward from {0} (provisional — ledger {1} is not closed)",\r
"Transfer from {0}: goods at the recipient's selling price incl. VAT",\r
"Transfer between company accounts",\r
"The transfer is unlocked.",\r
"The transfer is empty.",\r
"The transfer has already been sent to the main computer. {0}",\r
"The transfer is locked.",\r
"The transfer is locked. Changes are possible after it is unlocked.",\r
"Transfer to the profit and loss account",\r
"Carry-over of unused days from {0} (to be used until {1}{2}.)",\r
"Transfer of a payroll done under the wrong month (e.g. August salaries under September) to the correct period. Items and results are transferred together with the payroll.",\r
"Transfer of tax expense",\r
"Transfer of revenues",\r
"Transfer of revenues to the income statement account",\r
"Transfer of expenses",\r
"Transfer of expenses to the income statement account",\r
"Transfer of result",\r
"Transfer of result to 724",\r
"Goods transfer",\r
"Goods transfer between stores · internal delivery note and internal costing sheet · trade ledgers of both outlets",\r
"Transfer of goods between business units",\r
"Transfer to {0}: goods at the sender's selling price (cancellation)",\r
"Transfer of total result",\r
"Transfer: sender's calculated RUC (cancellation)",\r
"Transfer: recipient's calculated RUC (internal costing sheet)",\r
"Transfer: sender's calculated VAT (cancellation)",\r
"Transfer: recipient's calculated VAT",\r
"Leave carry-over/incentive — {0} {1}",\r
"transfers between stores in progress",\r
"Transfers (requisitions)",\r
"Transfer note",\r
"The remaining part of {0} working days will be taken no later than {1}{2} ({3}).",\r
"Remaining",\r
"Transcription into the authority's application",\r
"Transcription: the registration is prepared here and entered into the authority's application.",\r
"Copy week {0} – {1} {2}?\\n\\nThe same people, the same shifts and the same days off by day of the week ({3}). Confirmed weeks and manually entered slots are left untouched; the previous automatic proposal in that period is deleted. An employee on absence is skipped (the vacant place is filled by \\"Schedule automatically\\" or manual entry).",\r
"Correspondence",\r
"VAT overpayment / refundable (PR-PDV field 29)",\r
"Recommended",\r
"recognised by PIB",\r
"recognised by words of the name (check needed)",\r
"recognised by a bank account / name confirmed earlier",\r
"Recognised columns:",\r
"recognised items",\r
"Recognised",\r
"Recalculated {0} payouts at the current rates.",\r
"PRESJEK STANJA\\nMarket 9 - Jadranski put bb\\n…",\r
"Interim report until",\r
"The X report for that day has been removed.",\r
"skipped",\r
"Skipped (do not belong to the payroll month): {0}.",\r
"Skipped: {0}",\r
"Skipped {0}: {1}{2}",\r
"Packages of other companies skipped: {0} (applied when those companies are opened).",\r
"Packages of other companies skipped: {0}.",\r
"Trial shifts skipped (not daily takings): {0}",\r
"Rows skipped without a name or price: {0}.",\r
"Skip",\r
"Gaps now:",\r
"termination",\r
"Termination",\r
"Termination {0} has been annulled. {1} is an active employee again.",\r
"terminated {0}.{1}.",\r
"The termination has been annulled. {0} is an active employee again.",\r
"The termination has been annulled. The employee is active again.",\r
"termination annulled — entered by mistake",\r
"termination of employment",\r
"Termination entered by mistake: deletes the termination date, the employee returns to payroll and shifts; the document stays in the records as ANNULLED",\r
"Previous price (lowest in 30 days)",\r
"Previous price = lowest in the 30 days before the reduction (Consumer Protection Act, Art. 15)",\r
"Previous year",\r
"Previous year — closing balance",\r
"Previous year — closing balance 31.12.{0}",\r
"Previous year — opening balance",\r
"Previous year — opening balance 01.01.{0}",\r
"Previous year {0}",\r
"previous purchase {0}",\r
"Previous week",\r
"The previous version does not exist on this computer.",\r
"previous",\r
"The previous and the new stocktake must be different.",\r
"Previous period",\r
"Previous stocktake",\r
"The previous stocktake must be before the new stocktake.",\r
"previous entered: Z {0} of {1}",\r
"a prior written warning",\r
"the previous version",\r
"Input tax",\r
"Total input tax",\r
"Search",\r
"Search (number, customer or note)",\r
"Search (number, description)",\r
"Search (account or name)",\r
"Search (name or PIB)",\r
"Search (name or code)",\r
"Search (name, code, barcode, INN, ATC)",\r
"Search (name, code, barcode)",\r
"Search (name, code)",\r
"Search (name, phone, PIB)",\r
"Search {0} companies by name or PIB",\r
"Item search",\r
"Document search",\r
"Document search by number (Ctrl+K)",\r
"Document search by number: costing sheet, supplier invoice, sales invoice, quote, delivery note, credit note, IKOF/JIKR, transfer note, write-off, price revaluation",\r
"Company search",\r
"Search by supplier, number and source",\r
"Search by name",\r
"Search for the fiscal receipt QR code in the attachment and create a costing sheet",\r
"Searching for a QR code in \\"{0}\\"…",\r
"Search the cash register catalogue",\r
"Search in group",\r
"search: \\"{0}\\"",\r
"Search: name, room",\r
"Search: name, phone, room",\r
"search…",\r
"The main computer snapshot was also downloaded (published {0}, {1} MB). The screen is refreshing…",\r
"The downloaded and verified version is",\r
"Version {0} has been downloaded and verified. It is installed over the existing version; data is preserved.",\r
"Version {0} has been downloaded and verified. The new version is applied at the next start of the program.",\r
"Download the complete database of the main computer?\\n\\nThis database is replaced by the main computer's database. Kept: this device's settings, unprocessed scans and documents entered here in the last 7 days.",\r
"The latest data has been downloaded from the main computer (",\r
"Downloaded {0} MB (costing sheets: {1}). New data is visible after refreshing the screen (F5).",\r
"Collects goods from the warehouse and from suppliers and delivers them to outlets according to the schedule.",\r
"Downloading the main computer's database…",\r
"The download of the new version is not responding and was interrupted.",\r
"The package download is not responding and was interrupted. The download must be repeated.",\r
"Downloading company data from the server…",\r
"Downloading the receipt from the Tax Administration service (MAPR)…",\r
"Taking this employee's hours from the shift schedule",\r
"Download: Connection. Only empty fields are filled in, and missing stores and cash registers are added.",\r
"Download company \\"{0}\\"",\r
"Download new version",\r
"Download template (CSV)",\r
"Too many redirects of the update address.",\r
"Surname",\r
"Surname and first name",\r
"Contractor's surname and first name *",\r
"The contractor's surname and first name are required.",\r
"The lessor's surname and first name are required.",\r
"In imposing the measure, the seriousness and consequences of the breach, the employee's degree of responsibility, their previous work and conduct, previously imposed measures and other mitigating and aggravating circumstances ({1}) were taken into account, and the decision was made as stated in the operative part. The procedure was initiated within {2} months of learning of the breach and concluded within {3} months of initiation ({4}).",\r
"At next start",\r
"during the write (the write is retried automatically; the cause is listed in the table). The records remain saved.",\r
"Retail revenue 6021 — PAZ vouchers vs daily takings (incl. VAT − VAT)",\r
"Retail revenue 6021 vs daily takings \\"total excl. VAT\\" (informative)",\r
"Revenue from sale of goods",\r
"Revenue from wholesale of goods",\r
"Revenue from retail sale of goods",\r
"Revenue from services",\r
"Revenue by reservation source",\r
"Revenue per available room",\r
"Accommodation revenue",\r
"revenues",\r
"Income",\r
"INCOME",\r
"Income — issued invoices (excluding VAT)",\r
"Income — daily takings (total − VAT by rates)",\r
"Income (effects) from changes in accounting policies and corrections of errors from prior reporting periods",\r
"revenues and expenses have not been carried over to the result, so the closing",\r
"Income from prior reporting periods",\r
"Income from previous periods",\r
"Income from capitalising or consuming products and services for own needs",\r
"Income from capitalising or consuming goods for own needs",\r
"Revenue from capitalised own output and goods",\r
"INCOME FROM CAPITALISING OUTPUT AND GOODS",\r
"Income from membership fees",\r
"Income from issued invoices (services and wholesale)",\r
"Interest income",\r
"INCOME FROM PREMIUMS, SUBSIDIES, GRANTS, DONATIONS, ETC.",\r
"Income from premiums, subsidies, grants, regress payments, compensations and tax refunds",\r
"Revenue from sale of products and services",\r
"INCOME FROM SALES OF PRODUCTS AND SERVICES",\r
"Income from sales of products and services to parent and subsidiary entities",\r
"Income from sales of products and services on the domestic market",\r
"Income from sales of products and services on the foreign market",\r
"Income from sales of products and services to other related entities",\r
"Revenue from sale of goods",\r
"INCOME FROM SALES OF GOODS",\r
"Income from sales of goods to parent and subsidiary entities",\r
"Income from sales of goods on the domestic market",\r
"Income from sales of goods on the foreign market",\r
"Income from sales of goods to other related entities",\r
"Revenue from sale of goods by invoice",\r
"Revenue from sale of goods in retail",\r
"Revenue from sale of services on the domestic market",\r
"Income from reduction of liabilities",\r
"Revenue from subsidies, grants and donations",\r
"Income from royalties and licence fees",\r
"Income from the reversal of provisions",\r
"INCOME FROM ADJUSTING THE VALUE OF ASSETS",\r
"Rental income",\r
"Income from the effects of a change in accounting policy (first application of IAS/IFRS)",\r
"Income from the effects of contracted risk hedging",\r
"Income from the effects of the currency clause",\r
"Income from products and services",\r
"Income from goods (includes income from account groups 60, 61, 62, 64)",\r
"Income from adjusting the value of biological assets",\r
"Income from adjusting the value of property, plant and equipment",\r
"Income from adjusting the value of intangible assets",\r
"Income from adjusting the value of other assets",\r
"Income from adjusting the value of receivables and short-term financial investments",\r
"Income from adjusting the value of materials and goods inventories",\r
"Income from conditional donations",\r
"TOTAL INCOME",\r
"Income from adjusting the value of long-term financial investments and long-term securities",\r
"Accept",\r
"Accept theirs",\r
"Accept rate from invoice",\r
"Report",\r
"return {0}",\r
"Arrival registration",\r
"Guest registration — {0} {1}",\r
"Guest registration",\r
"error report: {0}",\r
"The registration has been copied.",\r
"The return has been saved: tax {0} EUR. The income statement and the year-end closing use this amount.",\r
"The report has been saved and is sent when the server becomes available (or when the device is paired).",\r
"Return not saved",\r
"The return is not ready for submission (checks did not pass). Create the XML anyway?",\r
"Report to the authorities",\r
"Registration with the police",\r
"Problem reports and requests",\r
"Registration with the tourist organisation",\r
"The return for {0}/{1} is not ready for submission: {2}. Fields 10–12 and 16–18 are therefore too low. The split by rates is entered from the Z report on the \\"Takings entry\\" screen (it is not estimated). The exported return is marked INCOMPLETE, and locking the month is not possible until the deficiency is removed.",\r
"Registration for transcription",\r
"CORPORATE INCOME TAX RETURN — FORM PD",\r
"prijava.cuvanjeGodina",\r
"prijava.rokPolicijaSati",\r
"prijava.rokToSati",\r
"prijava.turistickaOrganizacija",\r
"Guest registrations",\r
"Register",\r
"Register arrival",\r
"Report an error",\r
"Reported by",\r
"Registered with the police",\r
"Registered with the tourist organisation",\r
"Reports shortages, damage and discrepancies to the manager.",\r
"Reports to the manager any irregularity, shortage or equipment failure.",\r
"Before",\r
"{0} d ago",\r
"{0} h ago",\r
"{0} h {1} min ago",\r
"{0} min ago",\r
"{0} s ago",\r
"before + the rest from the employment date) · surtax",\r
"There are outlet documents before the opening balance date ({0}): {1}. The opening balance replaces the goods stock from those documents.",\r
"Before generating",\r
"Before the rulebook: {0}. \\"Fill in the starting job structure\\" resolves all findings except employees with a wrong position.",\r
"before sales",\r
"A database backup is made before writing.",\r
"before employment",\r
"Suggestion",\r
"Suggestion (INN, strength, name)",\r
"Suggested name: {naziv}",\r
"Goods receipt",\r
"Receipt from the Manager: {0}",\r
"Goods receipt confirmed",\r
"Receipt at outlet {0}",\r
"receipt in row",\r
"goods receipts in the period",\r
"Receipts and returns",\r
"Receipts, returns, write-offs and transfers from the Manager are only displayed here; they enter the books as before (costing sheet per invoice, write-off voucher, transfer note).",\r
"View",\r
"Debt view",\r
"Shows only hours from confirmed weeks, i.e. hours that enter the shift-based payroll calculation",\r
"View: {0} · total {1} EUR",\r
"shown",\r
"Showing 500 of {0} — narrow the search.",\r
"Showing the first",\r
"The first 300 rows are shown. Narrow the search to see the others.",\r
"The first 400 rows are shown. Narrow the search to see the others.",\r
"The first 500 rows are shown. Narrow the search to see the rest.",\r
"Shown first",\r
"show",\r
"Show",\r
"Show day",\r
"also show inactive",\r
"also show open calculations (informational)",\r
"Show data",\r
"Show difference",\r
"Show only mismatches",\r
"Show only rows with errors (",\r
"Show list",\r
"show all ({0})",\r
"inflow",\r
"Inflow",\r
"INFLOW",\r
"Inflow and outflow by",\r
"POS / card inflow",\r
"INFLOWS",\r
"Inflows from other companies (space rental, customers, POS, refunds) and outflows by recipient. The type is changed in \\"Transactions\\" and the program remembers it by the payer's account.",\r
"INFLOWS BY PAYER",\r
"The attachment \\"{0}\\" is not allowed (allowed: log, image, context).",\r
"Annex 1",\r
"Annex 2",\r
"The attachment must be an object.",\r
"The attachment cannot be opened: {0}",\r
"The attachment was marked as reviewed (no entry).",\r
"attachment:",\r
"Attachment:",\r
"The attached certificate is not X.509.",\r
"Contributions to political organisations + gifts and other transfers without compensation (a+b)",\r
"attach the last 200 lines of the program log",\r
"attach a screenshot",\r
"Attachments are larger than 20 MB.",\r
"Receives and sorts mail, bank statements, supplier invoices and incoming invoices.",\r
"Takes money, gives change, checks that banknotes are genuine and the cash register balance.",\r
"Receives goods from suppliers, checks quantity, quality, expiry dates and accompanying documents.",\r
"Receives goods at the outlet, checks quantities and expiry dates against the delivery note and invoice.",\r
"recipient",\r
"Recipient",\r
"RECIPIENT",\r
"Recipient (customer from the code list)",\r
"No recipient entered.",\r
"Payments to employees or other persons from the distribution of profit",\r
"Receiving via folder does not work:",\r
"Apply",\r
"Apply also to…",\r
"Apply margin to all lines",\r
"Apply to all rows",\r
"Apply note",\r
"Applied credit notes",\r
"Applied {0}, new items {1}, already received {2}, without a known register {3}.",\r
"Price changes that were waiting for the outlet were applied: {0}.",\r
"Applied to {0} invoices.",\r
"Applied to invoices",\r
"Applied: {0}.",\r
"Received by",\r
"Applying margins and entering prices from the costing sheet that differ from the cash register into the store's price list (sent to the cash registers).",\r
"It is applied to the invoice it refers to, then to open invoices of the same store, then of the same side (our / partner stores), automatically when allocating payments or immediately:",\r
"Example from statement",\r
"Received (registered)",\r
"Loan received",\r
"goods received today (EUR incl. VAT)",\r
"ADVANCE RECEIVED",\r
"Advance received excl. VAT",\r
"advances received (used {0}, refunded {1})",\r
"Advances received from customers",\r
"Advances, deposits and guarantees received",\r
"Amount received incl. VAT",\r
"Packages received",\r
"Received",\r
"Received (qty)",\r
"{0} packages received: new records {1}, already existing {2}.{3}{4}",\r
"Received / sent",\r
"was received only after that month (input tax",\r
"received into stores:",\r
"Priority",\r
"Due",\r
"Entitled to {0}",\r
"Belongs to month",\r
"Trainee",\r
"Preparing {0} costing sheets…",\r
"Prepares and issues goods for outlets by transfer notes; organizes delivery.",\r
"Prepares payroll, tax returns (IOPPD) and payment orders.",\r
"preparing PDF…",\r
"Preparing initial prices from costing sheets… 50 %",\r
"Prepares tax ledgers (KPR, KIF, PR-PDV) and data for the external accountant.",\r
"Preparing the image for reading failed.",\r
"preparing page {0}",\r
"Preparing…",\r
"{0} changes prepared ({1}). The file needs to be saved to the Google Drive folder that the office computer also follows.",\r
"{0} changes prepared. Select Google Drive in the dialog.",\r
"Prepared for sending to other devices: {0} documents out of {1}.",\r
"Surtax",\r
"PRIREZ",\r
"Surtax — {0} (%)",\r
"Surtax (payer)",\r
"Surtax (by municipality of residence):",\r
"Surtax (employer)",\r
"The surtax is paid by the employer to the municipality of the employee's residence: sum per municipality with the payment account",\r
"Surtax by municipality",\r
"Income tax surtax",\r
"The surtax on income tax belongs to the municipality",\r
"Surtax: 1 = 10 % (municipal rate) on the total payroll tax, distributed among employees; 0 = per employee",\r
"Surtax: 1 = truncate to the cent, 0 = round",\r
"PRIREZI",\r
"screen access per order #{0}: {1}",\r
"Camera access is not allowed. On an iPhone: Settings → Safari → Camera → \\"Ask\\" or \\"Allow\\", then restart the app. For an app added to the home screen, permission is requested at the first scan.",\r
"Access to guest data",\r
"Temporary and occasional jobs",\r
"PRN",\r
"test message",\r
"Test message",\r
"Test message sent: {0}.",\r
"Test message to address",\r
"Test message. Sending e-mail from the program is set up correctly.",\r
"Test shift #{0} of cash register {1} ({2}) was entered into the daily takings because \\"import test shifts too\\" is enabled; the receipts are not fiscal.",\r
"TEST PAGE",\r
"The test page has been sent to the printer.",\r
"Test shifts of the cash register have not been entered into takings:",\r
"trial",\r
"Trial",\r
"Probation (mo., 0 = none)",\r
"A probation period under a fixed-term contract may last at most 1/4 of the contracted duration ({0}), here at most {1} months.",\r
"Trial shifts waiting to be read: {0}",\r
"trial mode",\r
"Estimated dependent cost (invoice not received)",\r
"Estimated dependent cost included in purchase cost (invoice not received)",\r
"Read pasted text",\r
"Read fingerprint",\r
"text read",\r
"{0} EUR of outflows were read, while the statement shows {1} EUR. The list needs to be checked against the PDF.",\r
"{0} EUR of credits were read, while the statement shows {1} EUR; the amounts need to be checked against the PDF",\r
"{0} EUR of debits were read, while the statement shows {1} EUR; the amounts need to be checked against the PDF",\r
"Read {0} closing files, shifts {1}: new daily takings {2}, changed {3}, identical {4}{5}{6}; turnover rows {7}, new write-offs {8}{9}, new deleted receipts/items {10}{11}.{12}",\r
"Read {0} messages, {1} new attachments. Imported {2} statements: {3} new transactions, {4} payments posted ({5} EUR), {6} awaiting review in Bank → Transactions, {7} duplicates skipped.{9}",\r
"Read {0} pages; {1} fully confirmed by arithmetic. Rows marked ⚠ must be checked against the image before saving (click a row).",\r
"Read {0} records from {1} Manager devices.{2}",\r
"read {0}/{1} debit/credit orders, while the statement shows {2}/{3}",\r
"read until",\r
"read by OCR (the bank's font is unreadable, {0} pass); amount check required",\r
"estimate",\r
"Estimate",\r
"estimate (no invoice)",\r
"Estimate without invoice",\r
"The estimate has been closed by an invoice. Deletion is possible after the closure is cancelled.",\r
"The estimate has been closed by an invoice. It cannot be changed.",\r
"estimate by rates 9/12/15 % (the year has no vouchers)",\r
"tax estimate",\r
"Corporate income tax estimate",\r
"CORPORATE INCOME TAX ESTIMATE (without general ledger) — not a return",\r
"Corporate income tax estimate for a company without a general ledger. This is not a return; the return is prepared from the general ledger (Financial statements → PD).",\r
"Sales estimate from the difference of two stocktakes (inventory method)",\r
"Sales estimate from the stocktake difference (inventory method): previous stocktake + receipts and other movements − new stocktake, at the retail price on the date of the new stocktake. It is not a cash register record; nothing is entered in the books.",\r
"estimated sales at retail price (EUR)",\r
"result estimate",\r
"Result estimate",\r
"Estimate of dependent cost for costing sheet {0} — {1}",\r
"estimate, invoice not received",\r
"Sell.",\r
"Sell. excl. VAT",\r
"Sell. price",\r
"Sell. price excl. VAT",\r
"Sell. price incl. VAT",\r
"Sell. incl. VAT",\r
"Sell. val. with VAT new",\r
"Sell. val. with VAT now",\r
"Sell. value",\r
"selling value with VAT",\r
"Sale",\r
"Sales (register / import)",\r
"Sale (invoice draft)",\r
"Sales (import) — day",\r
"Sales (import) — period {0}–{1}",\r
"sale {0}",\r
"sales without a purchase price",\r
"Sales without a purchase price (a register item not linked to the code list, a sale before the first receipt, a line without an item) are on a separate list and are not included in the RUC.",\r
"Sales without a purchase price (without VAT, not in RUC)",\r
"sale above the group balance → taxable income {0} (Art. 7)",\r
"Sale at the cash register (day)",\r
"Register sales not linked to an item (",\r
"Sale of FA (excl. VAT) — {0}",\r
"Sales by item (import)",\r
"Sales by item from the file of another manufacturer's cash register",\r
"Sales by stocktake",\r
"Sales by stocktake — estimate (inventory method)",\r
"SALES BY STOCKTAKE — ESTIMATE (INVENTORY METHOD)",\r
"Selling goods past their expiry date or knowingly failing to withdraw defective goods",\r
"sale at a loss",\r
"Sales: register (amount collected incl. VAT), sales imported from a file, issued invoices and delivery notes on the delivery date; an invoice from a delivery note is not counted a second time. Selling value is excl. VAT.",\r
"Sold at cash registers",\r
"Selling",\r
"selling (with margin, excl. VAT)",\r
"Selling price excl. VAT",\r
"Selling price EXCL. VAT — needed for posting (134000/134001)",\r
"the selling price is negative",\r
"The selling price cannot be negative.",\r
"the selling price is not known",\r
"Selling price not entered: {0}{1}.",\r
"Selling price with VAT on the issue date",\r
"Sender's selling price with VAT (red cancellation in its ledger)",\r
"Recipient's selling price with VAT (internal costing sheet, charge in its ledger)",\r
"Points of sale",\r
"Points of sale not linked to a store",\r
"Sender's selling price",\r
"Recipient's selling price",\r
"retail incl. VAT",\r
"Selling price incl. VAT",\r
"selling INCL. VAT (shelf prices)",\r
"selling incl. VAT (EUR)",\r
"Selling value incl. VAT (debit)",\r
"Sell. value excl. VAT",\r
"Sell. value incl. VAT",\r
"Selling value",\r
"Selling value excl. VAT",\r
"Selling value excluding VAT (0 if scrapped):",\r
"Selling value without VAT, purchase value of goods sold and price difference for the period — by item, group and outlet.",\r
"Selling value incl. VAT",\r
"points of sale. A store must be selected for each point:",\r
"Point of sale",\r
"Company point of sale",\r
"Point of sale from the file",\r
"The point of sale is listed twice.",\r
"Point of sale is not selected.",\r
"Point of sale in the package",\r
"Sold",\r
"Sold (estimate)",\r
"sold {0}",\r
"production",\r
"PRODUCTION",\r
"Demo period extension",\r
"demo period extension, an additional module (Cash register, Accounting, Manager) or other. The publisher approves or rejects the request with a reply.",\r
"Extend by a night",\r
"The program automatically keeps copies of the database on this computer (on opening, during work and on closing; 14 days). For a copy outside the computer, a folder that is synchronised to the internet is needed (e.g. Google Drive).",\r
"The program reads messages in",\r
"Scheduled by the program (proposal)",\r
"From costing sheets, daily takings, statements, purchases, expenses and sales invoices, the program creates journal vouchers according to schemes (Chart of accounts → Schemes) and at the end of the month calculates the realised price difference. Re-posting the same month does not create duplicates: vouchers are created again from the documents, and vouchers without a document are removed. A locked month is not changed.",\r
"The program was automatically rolled back from version {0}: {1}.",\r
"The program has been updated to version",\r
"The program must be closed and opened again.",\r
"The program is already open in another window or is running in the background (bar at the bottom of the screen). Two open windows overwrite each other's entries. This window should be closed and work continued in the one already open.",\r
"The program was restored to: {0}. Data was not touched.",\r
"The program uses open-source libraries under their licences. The same list is in the file LICENCE-TRECIH-LICA.txt supplied with the program.",\r
"The program does not run executable files.",\r
"The program has no log to send.",\r
"The program is not connected to the server (Settings → Server).",\r
"The program is not connected to the server.",\r
"The program is not connected to the server. The option is not turned on.",\r
"The program is not connected to the server. Menu editing works with a server connection (Settings → Server).",\r
"The program shows the parts for the selected activities. With no selection, everything is shown. Books, payroll and settings are always available.",\r
"The program first shows an overview of differences; writing follows only after confirmation. A database backup is made before writing, and the last import can be undone.",\r
"The program already has a newer version of licence {0} (issued {1}). This file is older.",\r
"Loyalty programme: a customer marked \\"sent to registers\\" goes to the registers in the price list, the register recognises them",\r
"Cash register program",\r
"The cash register program is not responding (timed out).",\r
"remote access program",\r
"progressive 9 / 12 / 15%",\r
"Manufacturer",\r
"Products and goods in manufacturers' shops",\r
"Flour products (rusks, breadcrumbs, biscuits)",\r
"Manufacturer",\r
"Custom (From – To)",\r
"Posted (costing)",\r
"Posted {0}.{1}: {2}{3}{4}{5} ({6} s){7}",\r
"posted in the general ledger (year-end closing)",\r
"Posted: a minus costing sheet has been created and reduces the goods (accounts 134000/134001/134002, offset 5771). Items can be changed after \\"Cancel posting\\".",\r
"posted",\r
"posted transactions: the payee on the statement is not the supplier the payment was posted to (statement previously read with an incorrect merge) —",\r
"posted",\r
"Posted to the end of the month {0} {1}: {2} receipts.",\r
"Posted.",\r
"Posted. Minus costing sheet {0} has been created (Costing sheets and invoices).",\r
"Post",\r
"Post month",\r
"Post month — vouchers from documents",\r
"Post write-off {0}?\\n\\nA minus costing sheet (with its own number) will be created that reduces the goods in the trade ledger and accounts 134. The write-off is locked in the process.",\r
"Post to the ledger {0} {1} all receipts of that and earlier months that are not yet in the locked ledger (posting date = {2}.{3}.{4})?",\r
"Turnover",\r
"Turnover — daily takings incl. VAT (EUR)",\r
"Turnover (takings)",\r
"0 % turnover without basis:",\r
"0 % turnover without basis: {0} € — field {1}.",\r
"0 % turnover from takings:",\r
"Turnover today",\r
"turnover today · receipts",\r
"Turnover debit",\r
"Turnover of gas, electricity and heating/cooling with transfer of the tax liability",\r
"Supply of gas, electricity and heating/cooling with reverse charge (manual)",\r
"Turnover of selected",\r
"store turnover (takings excl. VAT)",\r
"Turnover by item",\r
"Turnover credit",\r
"Turnover of goods is a transfer of the right of disposal (VAT Act Art. 4 para. 1) and arises on delivery: the delivery note reduces stock and the trade ledger on the delivery date (Rulebook 34/12 Art. 7 col. 5). A delivery note is not a fiscal receipt and does not enter KIF or PR-PDV. If an invoice has not been issued, VAT is calculated eight days after the delivery date (VAT Act Art. 18 para. 3); an invoice issued later receives that date of the tax liability.",\r
"goods turnover",\r
"Turnover with VAT",\r
"Sales, customers and suppliers",\r
"store sales in the month (daily takings excluding VAT {0} EUR)",\r
"Change group",\r
"Change store",\r
"Change the general price",\r
"Change VAT",\r
"Change…",\r
"Change the margin to {0} % for {1} costing sheets ({2} items)?\\n\\n{3}\\nSelling value with VAT: {4} → {5} EUR\\n\\n{6}A backup of the database is made before the change, and the change can be undone.",\r
"Changed",\r
"Change date or name",\r
"Group change",\r
"Changing the margin changes the costing sheets of the open period and their debit in the trade ledger. A change in the selling price of goods in stock without changing the costing sheet is entered through price revaluation (Stock and stocktake → Price revaluation).",\r
"The margin change does not exist.",\r
"The change was not undone: {0}",\r
"Change of the selling price of goods in stock — report on the completed stocktake (Rulebook 34/12 Art. 11)",\r
"Rate change recorded for {0} items: {1} → {2} from {3}.",\r
"Rate change from a date",\r
"Changing the role \\"{0}\\" is not supported in this version of the program — the program only knows the computer role (main, secondary, admin).",\r
"A change applies to vouchers created after it (run \\"Post month\\" again). The account of an expense type is set with the type itself (Purchases · OA · PD → expense types).",\r
"change of more than three times",\r
"CHANGE IN THE VALUE OF OUTPUT INVENTORIES",\r
"Everything travels in changes: documents (costing sheets, daily takings, scans, invoices, payments, write-offs, transfers), code lists (stores, items, suppliers with discounts, customers, expense types, fixed assets), company data, employees and payroll calculations with rates, shifts, rent and locked periods. When two devices change a document or code list, the newer change wins; payroll, shifts and employees are then not written automatically, but wait for a decision (\\"Changes that are pending\\").",\r
"changes",\r
"Changes for accounting",\r
"changing the company",\r
"Google Drive was found. Suggested folder: {0}. The folder is confirmed with the \\"Select folder…\\" button.",\r
"Cash register database found: {0}",\r
"Found {0} groups of duplicate items ({1} surplus).",\r
"Printers found: {0}.",\r
"Found in",\r
"The regulation requires the date of receipt (VAT Act Art. 37 para. 7: input VAT is deducted \\"in the tax period in which the invoice was received\\").\\n\\n{0}Keep the books by invoice date anyway?",\r
"the prescribed retail price (MPC) of the cigarettes is {0}",\r
"Prescribed",\r
"Avg. employees",\r
"Average number of employees",\r
"Average number of employees (total number of employees at the end of each month / number of months)",\r
"Average price",\r
"weighted average purchase price",\r
"Last year ({0})",\r
"Last quarter (Q{0} {1})",\r
"Last month",\r
"Last month ({0})",\r
"Elapsed:",\r
"Against this decision, the employee may, within {0} days from the date of delivery, submit a proposal for peaceful resolution of the labour dispute to the Agency for Peaceful Resolution of Labour Disputes or initiate proceedings before the competent court ({1}). Initiating proceedings does not suspend the execution of the decision.",\r
"Proceedings have been initiated against the employee to establish responsibility for a serious breach of work obligations: {0}, committed on {1}. {2} A written warning describing the breach was delivered to him or her on {3}, with a deadline of {4} days for a written statement and the right to make an oral statement. By the decision of {6} the measure of termination of the employment relationship was imposed ({7} para. 2 point 3), because, considering the gravity and consequences of the breach, the degree of responsibility and the employee's earlier conduct ({8}), the conditions for continuing work are excluded. The proceedings were initiated and conducted within the deadlines set out in {9}.",\r
"Counter-account",\r
"Contra account",\r
"Contra account {0} does not exist.",\r
"Bank commission on card payments {0}",\r
"bank fees omitted: {0}",\r
"bank fees omitted: {0}{1}",\r
"Check",\r
"The update check is not responding (possible network interruption). The check must be repeated.",\r
"The update check failed: {0}",\r
"The folder check works only on an Android phone.",\r
"IKOF check (for tax inspection)",\r
"The check is complete. A new version, if there is one, is downloaded in the background and the \\"Refresh\\" button appears.",\r
"SUPPLIER CARD CHECK",\r
"Checking licence…",\r
"The check is not available (the application was not opened via an HTTPS address).",\r
"The check failed (a network interruption is possible): {0}",\r
"Numbering check",\r
"Data verification",\r
"Check after import",\r
"Check before saving",\r
"Checking the receipt with the Tax Administration…",\r
"checked every minute",\r
"Checking the connection to the server…",\r
"Z number check",\r
"Verified",\r
"check",\r
"Check licence",\r
"Check again",\r
"Check mail",\r
"Check now",\r
"Check connection",\r
"Check the quantity, price and rate.",\r
"Check whether it is the same item entered twice or different items with the same barcode.",\r
"the window crashed: {0}",\r
"PRPDV",\r
"First",\r
"Prva banka",\r
"Prva banka Crne Gore",\r
"Prva banka: {0}. The statement was not read reliably. Manual entry is required.",\r
"Prva banka: no order was recognized in the PDF.",\r
"The first exchange is still in progress and continues in the background.",\r
"First data exchange with the server…",\r
"First exchange: received from the server {0}{1}.",\r
"first shift",\r
"First shift",\r
"First receipt number from the Z report (KIF)",\r
"the first number in the row",\r
"The first part of annual leave must last at least {0} consecutive working days ({1}).",\r
"First part at least",\r
"First steps",\r
"First steps — new company",\r
"The first steps are not completed",\r
"First receipt",\r
"The first paired device becomes the Manager administrator's device",\r
"First \\"Check for updates\\", then apply the offered version.",\r
"first launch → Load database from Accounting",\r
"Enter the room types first.",\r
"PS",\r
"OB - stocktake of the whole outlet as of 31.12.{0}.",\r
"OB - stocktake as of 31.12.{0}.",\r
"OB - balance of the closed ledger for {0}.",\r
"Wheat, barley, oats, corn and other cereals",\r
"pulsing",\r
"Full amount",\r
"Full entitlement",\r
"Full working time is {0} hours per week ({1}). In retail outlets work is organised in shifts, including Saturdays, Sundays and holidays, in accordance with the outlet's working hours; the shift schedule is set by written decision and published to employees at least {2} days in advance ({3}). Positions that work in shifts are marked in the special conditions. Positions with part-time work are marked separately ({4}).",\r
"PUT",\r
"The database path goes outside the Podaci folder.",\r
"Path to the cash register database (kasa.db)",\r
"The path is not in the mail folder.",\r
"The version path goes outside the Verzije folder — the update was refused.",\r
"Passenger car — parts and service",\r
"PZ",\r
"QR address (https://mapr.tax.gov.me/…)",\r
"The QR code was read from the receipt \\"{0}\\". After checking the outlet and margin, processing is started with the Enter key in the QR code field or with the \\"Process\\" button.",\r
"The QR code in \\"{0}\\" is not the QR of a fiscal receipt (no IIC): {1}",\r
"The QR code in the frame is read automatically.",\r
"QR codes and domain",\r
"QR menu — menu content",\r
"QR menu for guests",\r
"The QR code is not valid. The iic/tin/crtd parameters are missing.",\r
"QRUrl",\r
"No.",\r
"No.",\r
"Line 16: on 31.12. there are unpaid salaries/compensation of {0} EUR (balance 4500 + 4650 + 4651). For amounts paid before the return is submitted, the accountant decides on recognition.",\r
"r.Broj",\r
"r.BrojRacuna",\r
"r.MarketID",\r
"Disc.",\r
"Discount %",\r
"discount derived from the invoice amount, invoice must be checked",\r
"The discount has been deleted.",\r
"Discount lower than agreed on {0} {1} (−{2} EUR)",\r
"The discount must be from 0 to 99.99 %.",\r
"Discount on invoice",\r
"The discount is not valid.",\r
"Discount per item",\r
"The per-item discount has been entered.",\r
"discount from the QR code was not verified against the amount, invoice must be checked",\r
"The discount is suggested on the line of the invoice, quote and delivery note for the item, from the stated date; for other items the customer's default discount applies. The discount on a line can be changed manually.",\r
"Racun",\r
"RACUN",\r
"račun",\r
"Account",\r
"invoice {0}",\r
"Invoice {0} {1}",\r
"Account {0} has been removed from the company accounts.",\r
"Invoice {0} from that supplier dated {1} has already been entered.",\r
"Remove account {0} from the company accounts \\"{1}\\"? Payments from statements of this account will not be posted automatically afterwards. Statements and payments already imported remain.",\r
"invoice without a number",\r
"Receipt no.",\r
"Invoice no.",\r
"Supplier invoice (fiscal QR)",\r
"PROFIT AND LOSS ACCOUNT",\r
"Profit and loss account of discontinued operations",\r
"Another company's account",\r
"An account of another company; its statements are not imported into this company",\r
"Company account",\r
"The receipt is issued to another customer",\r
"The guest's account has not been paid ({0} EUR). Collect payment before checkout.",\r
"The receipt has an IKOF and is waiting to be sent to the Tax Administration. It cannot be changed or deleted. To resend: Settings → Fiscalization → \\"Send pending\\"; after the JIKR is received, corrections are made with a corrective receipt.",\r
"The invoice has an IKOF, but the Tax Administration has not confirmed it (no JIKR). It cannot be changed; to resend: Settings → Fiscalization → \\"Send outstanding\\".",\r
"The receipt has a credit note — cancellation is not possible.",\r
"The receipt has an advance deduction — cancellation is not possible.",\r
"the statement account was not recognized; manual import required (Obligations → Statement import)",\r
"The invoice was issued after {0} and was posted on the invoice date, not in the previous month.",\r
"The invoice is already posted in a locked month. It cannot be moved.",\r
"The receipt has already been cancelled.",\r
"The receipt has not yet been confirmed by the Revenue Administration (no JIKR).",\r
"A receipt that received an IKOF but not a JIKR has been issued to the customer, but the Tax Administration has not confirmed it (most often because of an internet outage). This list must be empty.",\r
"An invoice received by email: the program finds the QR code in the PDF or image and creates the costing sheet.",\r
"The receipt that this corrective receipt corrects",\r
"Receipt on which the advance was deducted",\r
"The receipt does not contain customer data (PIB). Input VAT on this receipt has not been deducted.",\r
"The receipt has no line items.",\r
"The receipt has not been fiscalized. It is deleted or cancelled in the usual way.",\r
"the account is not among the company's accounts (Settings → Company); payments were not posted automatically and are waiting for review",\r
"The receipt has not been confirmed by the Revenue Administration (no JIKR).",\r
"The receipt has not been prepared for sending.",\r
"The invoice was not saved: the same supplier, date and amount already exist.",\r
"municipality account",\r
"An invoice from this supplier dated {0} for {1} EUR has already been entered (costing sheet {2}).\\n\\nEnter another invoice with the same supplier, date and amount?",\r
"The account of this statement ({0}) was not recognised. Automatic ownership check is not possible.\\n\\nImport as a statement of company {1}?",\r
"recipient account {0} is not a known public revenue account",\r
"recipient account {0}, but the payment was made for {1}",\r
"the recipient account is remembered for a different supplier",\r
"The account belongs to this company; its statements are imported into Bank",\r
"Surtax account",\r
"A receipt with this QR code has already been imported (costing sheet #",\r
"Room account",\r
"Room account {0}",\r
"invoice in the KPR without a costing sheet (e.g. dependent cost); not goods on account 134",\r
"Receipt being entered",\r
"The invoice goes into the month in which it was issued (regardless of when it was received). The regulation requires the date of receipt (VAT Act Art. 37 para. 7).",\r
"The invoice goes into the month in which both the goods and the invoice were received; input VAT is deducted then as well (VAT Act Art. 37 para. 7). Recommended.",\r
"Account for taking over purchases of materials and goods",\r
"Account for taking over income",\r
"Account for taking over costs",\r
"Account for taking over inventories",\r
"Accommodation receipt and summary receipt for room consumption",\r
"Invoice for services",\r
"Invoice",\r
"Account: {0}\\n\\nMark as another company's account (does not belong to company {1})? Statements of this account will not be imported into this company.{2}",\r
"Account: {0}\\nCompany: {1}\\n\\nRecord the account among this company's accounts? Statements of this account are imported into this company's Bank, and recognised payments are posted automatically.",\r
"Account: {0}\\nStatement issued to: {1}PIB {2}\\nOpen company: {3}\\n\\nThe PIB on the statement is not this company's PIB. Import the statements of this account into this company?",\r
"Receipt: {0}.",\r
"Account: {0}{1}\\n\\nMark as another company's account (does not belong to company {2})?{3}",\r
"receipt(s) dated in",\r
"RACUNA",\r
"invoices",\r
"Receipts",\r
"Receipts · turnover",\r
"receipts waiting for fiscalization",\r
"Receipts waiting to be sent for more than 48 hours: {0}. The prescribed deadline has been exceeded. The receipts must be sent immediately or the problem reported to the Tax Administration.",\r
"Invoices not entered: {0}. Last error: {1}",\r
"Invoices not entered: {0}. Last error: {1}\\n\\nThe invoices are kept on the “New costing sheet” screen: the “Try again” button repeats the entry.",\r
"Counted from the guest's time of arrival.",\r
"the computer is on an old version of the program; the change is not applied automatically",\r
"this company's computer",\r
"Computer in the office",\r
"computers",\r
"računi",\r
"\\"charge to room\\" receipts (collected via summary receipts {0})",\r
"PROFIT, LOSS AND CLOSING ACCOUNTS",\r
"Company accounts",\r
"Company accounts (bank statements)",\r
"ACCOUNTS OF MAIN PRODUCTION COST CENTRES",\r
"Receipts issued to companies from the cash register (last 60 days)",\r
"Invoices issued before",\r
"Receipts waiting to be sent (",\r
"ACCOUNTS OF COST CENTRES FOR PURCHASING, TECHNICAL MANAGEMENT AND AUXILIARY ACTIVITIES",\r
"ACCOUNTS OF COST CENTRES FOR ADMINISTRATION, SALES AND SIMILAR ACTIVITIES",\r
"Receipts on hold",\r
"receipts deleted and items removed before payment, last 48 h; older ones are visible to the manager",\r
"ACCOUNTS FOR RELATIONS WITH FINANCIAL ACCOUNTING",\r
"Accounts from statements",\r
"Accounts from which this partner's payment was recognised when posting statements.",\r
"bank account",\r
"Work",\r
"WORK",\r
"Operation and backup",\r
"Public holiday work",\r
"Public holiday work (supplement +150 % on top of the base)",\r
"Computer work (accounting program, e-banking, e-filings); independence and accuracy.",\r
"Sunday work",\r
"Sunday work (supplement +80 % on top of the base)",\r
"Work on Sundays and holidays is allowed only during an event (Art. 35b para. 3 pt. 7). Align the working hours with the duration of the event.",\r
"Working through the local IRIS server requires Accounting 1.0.117 or newer to be installed (new Setup). The local server is not yet supported on Android and in the web version; the phone works through the IRIS CORVINA server.",\r
"Work in the accounting program; knowledge of VAT and fiscalization; accuracy and confidentiality.",\r
"Work in shifts, on weekends and holidays; sanitary booklet; financial liability for cash in the register.",\r
"Work in shifts; physical fitness for handling loads; sanitary booklet.",\r
"Radanovići bb, Kotor",\r
"open",\r
"working (changes arrive immediately, even when the window is minimised)",\r
"Works on days",\r
"works while the program is open on screen",\r
"Works on these days",\r
"Works in another store",\r
"works in store {0}",\r
"Work discipline",\r
"Job positions (code list)",\r
"Work week",\r
"Working days and regular work are recorded in the salary payroll, not in a separate payroll.",\r
"working days for everyone",\r
"Working store",\r
"A fixed-term employment relationship ends when the term from the contract expires (",\r
"The employment relationship ends in the cases referred to in {0}: {1}by operation of law, by an agreement of the parties concluded in writing and certified by a notary, a court or a local administration body ({2}), by the Employee's notice of termination certified in the same way and delivered at least {3} days before the termination date ({4}) and by the Employer's notice of termination for justified reasons ({5}) under the procedure set out in {6} and {7}.",\r
"employment ended {0}.{1}.{2}.",\r
"The employee's employment ends by termination of the employment contract, for which a decision is issued in accordance with {0}; for a more serious breach, employment ends without a notice period ({1} para. 2).",\r
"Employment is established by an employment contract for an indefinite or fixed term, for a position from this Rulebook, with a person who meets the conditions of the position. The contract may provide for a probationary period of up to {0} months (for fixed-term contracts — at most one quarter of the duration), with a notice period of {1} working days ({2}). A trainee is hired to be trained for independent work in a position for which they have the required qualification, under the conditions of the law.",\r
"years of service: {0}",\r
"Employees",\r
"store employees",\r
"Employees swap shifts between themselves: select the shift of the first employee, then the shift of the second (it can be on another day)",\r
"working days",\r
"Working days",\r
"working days · entitlement for",\r
"Working days (Mon–Sat)",\r
"working days for a 5-day week (",\r
"working days, by decision of the executive director. On the leave decision it is stated as an incentive (reward) for work contribution. 0 = no incentive.",\r
"working Sundays. One click enters the employee into their usual shift and store (or removes them). Hours on Sundays appear in payroll as \\"Sunday work\\".",\r
"Employee",\r
"Employee {0} {1}",\r
"Employee added to the shift.",\r
"The employee is absent ({0}) {1} – {2}.",\r
"The employee is absent ({0}) from {1} to {2}.",\r
"The employee also worked in another working time (another store or another shift)",\r
"The employee has been saved.",\r
"The employee is already scheduled on that day ({0}, {1}). Remove them from that shift first.",\r
"The employee is already in another store on that day ({0}, {1}). Remove them from that shift first.",\r
"The employee has not been calculated yet.",\r
"the employee has not arrived yet ({0})",\r
"The employee has no home store and is scheduled as a substitute.",\r
"The employee has no home store with shifts. They must first be marked in \\"Quick entry\\" by store.",\r
"the employee is not active",\r
"No employee selected.",\r
"Employee not found.",\r
"An employee with a termination date is excluded from payroll and shifts from the following month. A termination entered by mistake is annulled with the \\"Annul\\" button: the employee returns, and the document stays in the records marked ANNULLED.",\r
"The employee is not assigned to shifts ({0}). To work in shifts, remove the \\"not assigned to shifts\\" flag on the employee's card (Payroll → Employees).",\r
"Employee removed from the shift.",\r
"The employee always works this shift (shift number within the store); the program does not put them in another one. With no selection — rotates according to the scheduling rules.",\r
"The employee already has {0} minor violations in the last 12 months — under the rulebook this is an aggravating circumstance when determining the measure ({1}).",\r
"Employee, date and violation are required.",\r
"Employees",\r
"employees · gross",\r
"of the employee (lessor, contractor under a work contract) and is paid to its account. The Law on Local Self-Government Financing allows up to 13 %, for the Capital City and the Old Royal Capital up to 15 %; each municipality determines the actual rate by its own decision. The starting rates have been verified in municipal decisions and State Audit Institution reports (the \\"Source\\" column; for",\r
"of the employee in that position. The \\"Rulebook (PDF)\\" button creates the whole act for signing and the notice board.",\r
"employees in this payroll the surtax was deducted from the employee's earnings, so the gross is higher than it should be. The surtax is paid by the employer on top of the gross.",\r
"Employees per shift",\r
"employees)",\r
"RadnikID IS NULL",\r
"employee",\r
"I pay the employee (net, EUR)",\r
"Action",\r
"This action is possible only on the company's main computer (which publishes the database). A correction made here does not reach the main computer, and its snapshot would undo it here.",\r
"The action is possible only on the company's main computer.",\r
"Work experience",\r
"Job position",\r
"Position — {0}",\r
"Job position \\"{0}\\"",\r
"A position is a set of identical or related tasks and duties performed by one or more post-holders under the conditions established by this Rulebook; each position has a code, title, job description, conditions and number of post-holders.",\r
"The position has been saved.",\r
"A position with no post-holders remains in the Rulebook until it is abolished by an amendment to the Rulebook. If an amendment to the Rulebook abolishes a position or reduces the number of post-holders, the employee is offered another suitable position; if there is none, employment ends under the procedure and with the rights prescribed for termination due to the employee no longer being needed (severance pay — {0}).",\r
"Job position not found.",\r
"Working hours",\r
"Working hours and shifts of this store",\r
"Store working hours",\r
"Working hours by store",\r
"Working hours are entered in the form HH:MM (e.g. 07:00 and 23:00).",\r
"Working hours on holiday days",\r
"Crustaceans",\r
"{1} working days were previously taken in {0}.",\r
"Previously unrecognised impairment of assets disposed of in the period (Art. 18a)",\r
"Previous margin changes",\r
"Previous sending of this document",\r
"The previously saved decision ({0}) will be replaced.",\r
"earlier",\r
"previous document number",\r
"Earlier departure",\r
"There are no earlier unpaid days of the same outlet.",\r
"Goods expense",\r
"Goods expense — record {0} ({1}); negative costing sheet: −134000/−134001/−134002, counter-entry 5771",\r
"Goods expense {0} — {1} ({2})",\r
"Goods expense {0} of {1} (negative costing {2})",\r
"Goods expense within norms",\r
"expenses",\r
"EXPENSES",\r
"Expenses (COGS+costs+depr.+payroll)",\r
"Expenses (effects) of changes in accounting policies and corrections of errors from prior reporting periods",\r
"Expenses and revenues",\r
"EXPENSES AND INCOME",\r
"Expenses from prior reporting periods",\r
"Expenses from previous periods",\r
"Interest expenses",\r
"Expenses from direct write-offs of receivables",\r
"Expenses from the effects of a change in accounting policy (first application of IAS/IFRS)",\r
"Expenses from the effects of contracted risk hedging that do not meet the conditions for being shown within revaluation reserves",\r
"Expenses from the effects of the currency clause",\r
"Expenses from asset impairment that are not recognised (Art. 18a)",\r
"Expenses from the write-off of goods",\r
"Expenses from goods write-off (spillage, breakage, spoilage, damage)",\r
"Expenses from the disposal of materials and goods inventories",\r
"Expenses from adjusting the value of biological assets",\r
"Expenses from adjusting the value of long-term financial investments and long-term securities",\r
"EXPENSES FROM ADJUSTING THE VALUE OF ASSETS",\r
"Expenses from adjusting the value of property, plant and equipment",\r
"Expenses from adjusting the value of intangible assets",\r
"Expenses from adjusting the value of other assets",\r
"Expenses from adjusting the value of receivables and short-term financial investments",\r
"Expenses from adjusting the value of materials and goods inventories",\r
"write-off",\r
"Write-off of FA — carrying value",\r
"Goods disposal",\r
"Goods write-off (disposal)",\r
"Written off",\r
"Available (room-nights)",\r
"Range",\r
"A range or a list, separated by commas.",\r
"Schedule",\r
"Schedule — {0}, week from {1}.{2}.",\r
"Schedule {0}: {1}",\r
"Distribution of profit",\r
"Schedule from the Manager ({0}, week starting {1}.{2}.): the week has already been confirmed here. The schedule was not applied.",\r
"Schedule from the Manager ({0}, week starting {1}.{2}.): entered {3}, skipped {4}: {5}{6}",\r
"Schedule from the Manager ({0}): {1}",\r
"Schedule from the Manager ({0}): store \\"{1}\\" does not exist in Accounting.",\r
"Schedule from the Manager {0}: the week does not start on Monday.",\r
"The allocation was not changed. {0}",\r
"Shift schedule",\r
"SHIFT SCHEDULE",\r
"Shift schedule by store",\r
"shift schedule by store, contracts, annual leave, discipline, decisions (payroll stays in the ledgers)",\r
"Allocation of costs \\"into purchase cost\\" (",\r
"The schedule for {0} {1} has not been created. The schedule is created with the \\"Auto-schedule\\" button or by entering shifts by clicking on a day.",\r
"Allocation of dependent costs",\r
"shift schedules {0}",\r
"Allocated",\r
"Scheduled {0} shifts for {1} {2}.{3}",\r
"Reallocated from scratch: {0} payment links and {1} credit note applications.",\r
"Scheduled by store: {0}.",\r
"Reallocate all payments and credit notes again, from the beginning?\\n\\nAutomatic links are deleted and created again: the supplier's opening balance is the oldest item, a credit note goes to the invoice it refers to, then to the same store, then to the same side (our / partner stores). Manual links remain.\\n\\nInvoice amounts, payments and the supplier balance do not change. What changes is the allocation of paid invoices (and the split of debt between ours / partner).",\r
"Schedule all stores for {0} {1}?\\n\\nStores are processed in order, so substitutes (employees without a home store) cover free days wherever needed. Manually entered slots and confirmed weeks are left untouched.",\r
"Scheduling all stores at once (by the same rules); employees without a home store serve as substitutes for free days in all stores",\r
"Assigned to shifts",\r
"flat",\r
"Flat — same percentage for every year of service",\r
"Evenly: each employee gets one planned day off per week, distributed so that roughly the same number of people are off each day, and substitutes (employees without a home store) come to cover them. A fixed day off from the employee card always takes priority.",\r
"RAZ",\r
"razduženje",\r
"Credit",\r
"Credit (EUR)",\r
"Credit (est.)",\r
"Credit = takings excl. VAT ÷ (1 + average store margin). Difference = stocktake − theoretical stock on the stocktake date (− shortage / + surplus); the last stocktake up to the end of the selected period is used.",\r
"Stock reduction excl. VAT (cost value + RUC, RUC is calculated monthly)",\r
"Stock reduction excl. VAT (RUC monthly)",\r
"Write-off of shortage (stocktake {0} vs books {1})",\r
"Goods discharge 134000 — PAZ+IZF vouchers vs takings incl. VAT (goods invoices add their amount)",\r
"Write-off of goods 134000 — PAZ+IZF vouchers vs daily takings incl. VAT (goods invoices add their amount)",\r
"Goods stock reduction at price excl. VAT",\r
"Goods stock reduction per invoice (excl. VAT)",\r
"Goods stock reduction per invoice (incl. VAT)",\r
"Goods stock reduction at selling price incl. VAT",\r
"Deferred value added tax liabilities",\r
"Deferred VAT from credit notes (awaiting customer notification)",\r
"Deferred value added tax",\r
"Deferred income from receivables",\r
"Deferred costs arising from liabilities",\r
"Deferred dependent purchase costs",\r
"Deferred dependent costs of goods procurement",\r
"Deferral until the invoice is received — {0}",\r
"difference",\r
"Difference",\r
"Difference (items)",\r
"Difference (cost, EUR)",\r
"Difference (purchase)",\r
"difference (positive: shortage, negative: surplus)",\r
"Difference (imported − daily takings)",\r
"difference {0}",\r
"The difference {0} was posted to account {1}. Check with the accountant is required.",\r
"Difference / unit",\r
"difference = sales invoices for goods in the month",\r
"Difference invoice − estimate: the part of goods in stock goes into purchase value, the part of goods sold into period expense (5310). Account 494 is closed in the amount of the estimate.",\r
"Difference invoice − estimate: goods sold (period expense)",\r
"Difference invoice − estimate: goods in stock (purchase)",\r
"The difference above the basic items is calculated as \\"Incentive (payout fitting)\\" and is taxed as usual. The calculation complies with the law; the requested amount is determined in advance.",\r
"Difference costing sheet/invoice (rounding; purchase {0} vs invoice {1})",\r
"difference between costing sheets and invoices in the month {0} EUR is posted to RUC",\r
"seniority pay difference {0}",\r
"Seniority bonus difference",\r
"Seniority pay difference (earlier months)",\r
"The seniority bonus difference was added to {0} {1}: {2} employees, {3} EUR gross (type {4}).{5}",\r
"The seniority pay difference is added to the salary payroll.",\r
"Seniority bonus difference\\" (IOPPD as earnings). A difference already added is not added again.",\r
"Difference in calculated income (33 − 32) > 0",\r
"Difference in calculated costs (26 − 27) > 0",\r
"takings difference",\r
"Difference per unit",\r
"Price difference (RUC)",\r
"Difference in the price of goods in retail (RUC)",\r
"Margin on goods in wholesale",\r
"difference in amount",\r
"Amount difference",\r
"receipt difference",\r
"Goods receipt discrepancy",\r
"Differences",\r
"Differences KPR ↔ accounts 134 (",\r
"Differences against the preview (",\r
"Differences from the preview: {0}.",\r
"Reason",\r
"Reason (decision, notice)",\r
"Reason for stopping the procedure:",\r
"Reason for dismissal (explanation) *",\r
"The reason for dismissal is mandatory.",\r
"Reason for termination: ________________________________________________.",\r
"Reason for annulling the document:",\r
"Reason for viewing",\r
"Reason for cancellation:",\r
"Reason: {0}.",\r
"reason",\r
"Exchange now",\r
"Swapped: {0} ({1} ⇄ {2}).",\r
"Exchange",\r
"exchange (other device)",\r
"Exchange (server) and backup",\r
"Exchange and Excel",\r
"Exchange is not switched on on this computer; the order goes out when the exchange is switched on (Connecting).",\r
"Exchange does not work when two computers have the same ID (most often because of a copied database). One of them needs to be assigned a new ID.",\r
"Data exchange (click for details)",\r
"Data exchange between devices",\r
"Exchange via Drive",\r
"Exchange via folder (old way, without server)",\r
"Exchange via Google Drive",\r
"Exchange carries the packages of all companies in the same group. The check shows whether documents of another company have been written into this company; such documents can be deleted with one click.",\r
"Exchange with the server is in progress (up to 2 minutes; large files are transferred in the background)…",\r
"Data exchange with the server continues in the background.",\r
"Shift swap",\r
"data exchange, cash registers, update",\r
"data exchange, backup, update",\r
"Swap: select two shifts (or ✕)",\r
"Swap: this employee goes to the shift of the selected one, and the selected one takes this shift",\r
"Exchange: {0} change files read, {1} applied{2}, {3} already received{4}; {5}{6}",\r
"Exchange via folder automatically (every 2 minutes)",\r
"OKU brackets, single rate",\r
"OKU brackets, single rate — all years at the rate of the bracket containing the total service (15 years = 15 × 0.75 = 11.25 %)",\r
"OKU brackets, cumulative",\r
"OKU brackets, cumulative — each year at the rate of its own bracket (15 years = 10 × 0.5 + 5 × 0.75 = 8.75 %)",\r
"Unlink",\r
"Classification",\r
"No.",\r
"REAL",\r
"Realised RUC {0}: {1} × {2} %{3}",\r
"Realised calculated VAT",\r
"FZO prescriptions",\r
"Prescriptions: {0}. FZO share {1} + fee per prescription {2} = {3} €{4} The FZO share is reduced by the collected participation and co-payment. The invoice is delivered electronically and on paper by the 10th of the month for the previous month.",\r
"Reception",\r
"Reception — month",\r
"Reception (hotel) this month",\r
"Reception (hotel): accommodation, advances and tourist tax",\r
"No.",\r
"the row \\"Total EUR\\" was misread (OCR: {0}); the control check by the STANJE table matches",\r
"row {0}: amounts were not read clearly",\r
"No.",\r
"The CInMED report row was not found. The report must be imported again.",\r
"the row has already been imported from the same file",\r
"A row that was not changed in the file is not compared with the program. A value that was changed in the program after the export is written only if it is explicitly enabled in the overview.",\r
"the row has no name, code or barcode",\r
"No row selected.",\r
"balance row (previous / debit / credit / new) not found",\r
"import row is not linked to an item",\r
"Seq. no.",\r
"Serial number",\r
"Receipt sequence number",\r
"Order",\r
"Order on the menu",\r
"The rule order must be a number greater than zero.",\r
"Order within the group",\r
"Order: the margin from the previous costing sheet of the same supplier, then the margin entered in the Manager, then this one. Without any of them a costing sheet is not made automatically.",\r
"rows",\r
"Rows",\r
"rows (narrow the period or search to view the rest). The total, export and print include all rows.",\r
"Rows with errors (not imported)",\r
"rows. Narrow the search to see the others.",\r
"Regular work",\r
"Rows without a manually set amount are copied from the contract at the current rates; manually set amounts stay",\r
"Rows without a link to an item (",\r
"Card rows copied from a PDF or e-mail; then \\"Read pasted text\\".",\r
"Current regular price",\r
"ref.ključ",\r
"CSR reimbursement, maternity leave — % of compensation",\r
"CSR reimbursement, maternity leave — limit (number of average earnings; DISPUTED 1 or 2 — to be confirmed by the accountant)",\r
"FZO reimbursement — % of compensation (sick leave from day 61, pregnancy leave from day 1)",\r
"FZO reimbursement, sick leave over 60 days — limit (number of average earnings)",\r
"FZO reimbursement, pregnancy maintenance — limit (number of average earnings)",\r
"Reimbursement of compensation — {0}",\r
"Refund of benefits (Health Fund / Social Welfare Centre)",\r
"Reimbursement of salary compensation (Health Fund / Social Work Centre)",\r
"Benefit reimbursements",\r
"Refunded by",\r
"The reimbursed portion is not a company cost: in the payroll entry it goes to receivable 2220, and the inflow from the statement (type \\"Benefit reimbursement\\") closes it. Percentages and limits are on the \\"Rates\\" tab (REF_…); the CSR limit is disputed (1 or 2 average salaries) — to be confirmed by the accountant. Clicking a row changes the claim status (waiting → submitted → collected).",\r
"Register",\r
"The customs declarations register is turned off: the company has no imports of its own (purchases from domestic suppliers, VAT from their invoices goes to field 19). For a company that imports goods itself, turn on \\"Company has its own imports (customs declarations)\\" in Settings → Company.",\r
"The customs declarations register is switched off.",\r
"The customs declarations register is switched on (Forms → Imports and foreign services).",\r
"The company register on the server has been changed ({0}).",\r
"The company register on the server has been changed.",\r
"The company register on the server is up to date.",\r
"The company register was not changed: {0}",\r
"ENU registration for invoices",\r
"Register a new ENU code with the Tax Administration? The registration is done once and cannot easily be undone.",\r
"Register ENU",\r
"Holiday bonus (EUR/year)",\r
"Holiday bonus for annual leave — 1/12 (special part of earnings)",\r
"Advertising and marketing",\r
"RELEASE stari_zapis",\r
"Renumbering",\r
"RENUMBERING — old and new numbers",\r
"Renumbering failed: {0}",\r
"renumbering the year",\r
"Renumbered {0} of {1} costing sheets. Gaps afterwards: {2} (company), {3} (stores). Duplicates: {4}.",\r
"Renumber {0} costing sheets for year {1}?\\n\\n{2} document numbers and {3} costing sheet numbers will change.\\nA backup is mandatory before renumbering (Settings → Backup).",\r
"repeat(auto-fit, minmax(135px, 1fr))",\r
"repeat(auto-fit, minmax(240px, 1fr))",\r
"repeat(auto-fit, minmax(min(320px, 100%), 1fr))",\r
"repeat(auto-fit, minmax(min(380px, 100%), 1fr))",\r
"Entertainment expenses",\r
"PIN reset per order #{0} (PIN {1})",\r
"REV",\r
"Revaluation reserves",\r
"REVALUATION RESERVES AND UNREALISED GAINS AND LOSSES",\r
"Equipment issue form",\r
"Issue form — issued",\r
"Issue form — returned",\r
"Issue form (PDF)",\r
"Issue form {0}",\r
"Issue form {0} was numbered in {1}. The date must stay in that year.",\r
"Issue form {0} is in the locked period {1}. Changing the setting would alter the submitted trade ledger.",\r
"Issue form no. {0} of {1}{2} (goods issued on an issue form)",\r
"The issue form has an invoice (sale). Unlocking is not possible.",\r
"The issue form has a return. Unlocking is not possible.",\r
"Equipment issue form under which the goods were sold",\r
"The issue form was issued (",\r
"The issue form was issued.",\r
"The issue form has been issued. It can be edited after unlocking.",\r
"The issue form was deleted.",\r
"The issue form is unlocked.",\r
"The issue form has already been issued.",\r
"The issue form does not exist.",\r
"An issue form does not book out of the trade ledger; the booking out goes by receipt.",\r
"The issue form has no items.",\r
"The issue form has not been issued.",\r
"An equipment issue form is not a receipt. Goods issued on an equipment issue form remain company property until returned; sale is documented by a receipt. By signing, the recipient confirms receipt of the goods and the obligation to return them within the deadline.",\r
"No regulation mentions an equipment issue form. An interpretation closer to the text of ZPDV Art. 4 para. 1 (a supply is the transfer of the right to dispose): goods on an issue form are not sold and remain company property; they are booked out only by a receipt (Rulebook 34/12 Art. 7 col. 5), and a return has no entry in the trade ledger. Stock: outflow on the issue date, inflow on the return date. Another interpretation: if the recipient disposes of the goods, the supply has been made (VAT at the latest 8 days after handover, ZPDV Art. 18 para. 3). Goods on an issue form are counted on a separate stocktake list (Stocktake Rulebook, Art. 2).",\r
"The issue form books out of the trade ledger when issued",\r
"The issue form is issued on the issue date ({0}) or later.",\r
"Equipment issue form: the goods at the recipient remain company property until returned or sold",\r
"Issue forms",\r
"ISSUE FORMS",\r
"Equipment issue forms past their return date: {0}",\r
"Reservation",\r
"The reservation has been cancelled.",\r
"The reservation has been confirmed again. Register the guest's arrival.",\r
"The reservation has been saved.",\r
"The reservation has been entered.",\r
"The reservation is closed: the guest did not show up.",\r
"Reservation not found.",\r
"Reservations",\r
"The reservation was changed in the meantime by another user. The view has been refreshed.",\r
"RESERVES",\r
"Reserved type",\r
"PROVISIONS",\r
"PROVISIONS AND LIABILITIES",\r
"Provisions that are not recognised for tax purposes",\r
"Provisions for employee benefits and other employee entitlements",\r
"Provisions for costs of restoring natural resources",\r
"Provisions for restructuring costs",\r
"Provisions for warranty period costs",\r
"Provisions for retained guarantees and deposits",\r
"Reserved",\r
"Backup",\r
"database backup",\r
"Database backup",\r
"The database backup was not made. The undo was not performed.",\r
"The database backup was not made. The import was not performed.",\r
"Backup before undoing: {0}",\r
"Backup before import:",\r
"Backup before import: {0}",\r
"a backup of the current database was not made",\r
"Backup: {0}.",\r
"Spare parts",\r
"backup copy",\r
"Utilities (no invoice in the program; the invoice is entered through Procurement)",\r
"Utilities (electricity, water, phone, fuel)",\r
"Mode",\r
"Mode",\r
"Režim FZO",\r
"The FZO mode is entered only for a medicine from the FZO List.",\r
"Dispensing mode",\r
"The dispensing mode (otc or rx) is required for a new medicine record.",\r
"The dispensing mode is otc or rx.",\r
"The dispensing mode is not valid (Rx or OTC).",\r
"Regimes RK, RK* and K are not dispensed at the expense of the FZO in a private pharmacy. For the co-payment list: FZO share and patient share per package.",\r
"result",\r
"result before taxation",\r
"Results",\r
"Fish",\r
"Frozen fish",\r
"Fresh fish",\r
"RIFF",\r
"Words",\r
"Words (expressions separated by semicolons; beginning of a word in the name)",\r
"rijeka crnojevica",\r
"resolved",\r
"Resolved",\r
"The language dictionary is not valid.",\r
"Resolved by",\r
"Resolved by",\r
"Decision",\r
"Decision days before",\r
"Decision on disciplinary measure",\r
"Decision on the use of annual leave",\r
"Decision on the measure",\r
"Leave decision",\r
"The leave decision must be delivered at least {0} days before the start ({1}); for a start on {2} the deadline was {3}. A shorter period is possible only with the employee's consent.",\r
"Dismissal decision",\r
"Decision on termination of employment contract",\r
"Decision on termination — expiry of a fixed-term contract",\r
"Decision on termination by expiry of a fixed-term contract — no notary",\r
"Decision on termination of employment (expiry of term)",\r
"Decision on termination of employment by contract expiry — signed by the director, not certified by a notary",\r
"RK",\r
"RN",\r
"Goods",\r
"ROBA",\r
"Goods {0} — opening stocktake (retail incl. VAT)",\r
"Goods {0} — opening stocktake (wholesale excl. VAT)",\r
"Goods {0} — opening balance by items {1} (retail incl. VAT)",\r
"Goods {0} — opening balance by items {1} (wholesale excl. VAT)",\r
"Goods allowed on Sundays and holidays",\r
"Goods issued for trial, use or service · return and sale · goods on an issue form on the day",\r
"Goods issued for trial, use or service · return and sale (invoice) · goods on an equipment issue form as of a date (separate stocktake list)",\r
"Goods issued on an issue form are with the recipient and remain company property (separate stocktake list, Stocktake Rulebook Art. 2).",\r
"Goods that arrived on invoices (costing sheets of the selected store), and whose barcode is not yet known.",\r
"Goods on the way",\r
"Goods on an issue form on the day",\r
"Goods in stock (%)",\r
"GOODS PER INVOICE (summary)",\r
"Goods at selling price incl. VAT",\r
"Goods at wholesale price excl. VAT",\r
"Goods nearing their expiry date",\r
"GOODS NEARING EXPIRY",\r
"Goods in the warehouse",\r
"Goods in retail (selling value including VAT)",\r
"Goods in processing, finishing and handling",\r
"Goods in retail",\r
"Goods in retail — selling value including VAT",\r
"Goods in wholesale",\r
"Goods in wholesale — wholesale value excluding VAT",\r
"Goods in warehouses, yards and shops of other legal entities",\r
"Goods in transit",\r
"Goods in wholesale (excl. VAT)",\r
"of goods",\r
"ROBE",\r
"brand",\r
"Goods issued by",\r
"Goods received by",\r
"Parent of a child with disabilities",\r
"parent of a child with developmental disabilities",\r
"Parent of a child with developmental disabilities: +{0} days (rulebook)",\r
"deadline",\r
"Due",\r
"Response deadline",\r
"Report deadline",\r
"deadline passed {0} ago",\r
"Code validity (hours)",\r
"The code validity is from 1 to 48 hours.",\r
"rok placanja",\r
"rok plaćanja",\r
"Payment term",\r
"Payment term (days)",\r
"The payment term is {0} days. Between business entities the term is 30 days, and by contract at most 60 (Act on Deadlines for Settlement of Monetary Obligations, Art. 4).",\r
"The payment term is {0} days. A term longer than 30 days must be agreed by contract (Act on Deadlines for Settlement of Monetary Obligations, Art. 4).",\r
"The payment term proposes the value date; the discount is applied to new items.",\r
"Police deadline: {0}",\r
"Deadline for registration with the police",\r
"Deadline for registration with the police (hours)",\r
"Deadline for registration with the tourist organisation",\r
"Deadline for registration with the tourist organisation (hours)",\r
"Expiry date",\r
"Payment deadline",\r
"Payment deadline (days)",\r
"Payment deadline 16–end",\r
"document validity period",\r
"Return deadline",\r
"The return deadline has expired:",\r
"The return deadline has expired.",\r
"The return deadline is before the issue date.",\r
"The return deadline is not valid.",\r
"deadline for statement expired {0}",\r
"The employee's deadline to respond expires on {0}. The decision is made after the deadline or after the statement is received (Art. 148).",\r
"Request deadline",\r
"Retention periods:",\r
"Payment deadlines: {0} (1–15) and {1} (16–end of month). The report is submitted by {2}.",\r
"ROL",\r
"RONHILL",\r
"Shift rotation",\r
"ROTHMANS",\r
"Rožaje",\r
"RS",\r
"RUC",\r
"RUC (price difference)",\r
"RUC {0} (opening balance by items)",\r
"RUC {0} (average margin {1} %)",\r
"RUC / margin",\r
"RUC / margin (EUR)",\r
"RUC / margin EUR",\r
"RUC % of selling value",\r
"RUC on shortage",\r
"RUC on surplus",\r
"RUC new",\r
"RUC limited — {0}",\r
"RUC limited to the available: {0}",\r
"RUC after",\r
"RUC now",\r
"Manual PR-PDV fields in the PDV voucher",\r
"Manual report search (at least 3 characters)",\r
"Manual rate",\r
"manual corrections per line (enter amount and note number)",\r
"manual",\r
"Choose an item manually (when the barcode cannot be read)",\r
"manual voucher",\r
"Manual voucher",\r
"The manual voucher has been saved: {0}.",\r
"A manual voucher is for things that have no document in the program (opening balance, capital, loan, correction). Debit must equal credit.",\r
"Manual journal voucher",\r
"Manual calculation",\r
"Manual calculation (flat rate, outlet without a cash register)",\r
"Manual data has been deleted.",\r
"manual entry",\r
"Manual entry",\r
"Manual entry of a bank transaction",\r
"Manual entry of an incoming invoice (without QR code)",\r
"manual entry in the write-off document (unit)",\r
"Manual import of a PDF statement (or statement text) that did not arrive by mail",\r
"manual",\r
"Manual",\r
"RUCNO",\r
"manual",\r
"Add an item to the group manually",\r
"A manually selected supplier is remembered",\r
"Calculated manually (flat rate, no cash register)",\r
"manually instead of the program",\r
"Manually entered and swapped slots are not changed; they are only topped up to the required number of employees. An employee without a home store is a substitute: scheduled where a home employee has a day off, before an employee from another store is borrowed. A permanent shift and a permanent day off of an employee are set on the employee card (Payroll → Employees). Labour Law: full working time 40 h per week, with overtime at most 48 h; weekly rest at least 24 h uninterrupted.",\r
"Entered manually",\r
"manually entered rate",\r
"entered manually",\r
"entered manually (submitted statement)",\r
"Manually entered opening balance (",\r
"RUCNO:{0}:{1}:{2}",\r
"Manages the work of all retail outlets (stores and kiosks) and is responsible for their results.",\r
"Gaps in numbering mean that a statement did not arrive or was not imported. Hipotekarna sends a statement only for days with turnover (without numbers), so only the period is checked there.",\r
"Russian",\r
"RV-{0}-{1}",\r
"Rx",\r
"Rx — prescription only",\r
"RZ",\r
"s",\r
"s. While the job is running, data entry is not possible. Do not close the program.",\r
"s. The program should not be closed while the job is running.",\r
"s.Duguje",\r
"s.Duguje-s.Potrazuje",\r
"s.Konto",\r
"s.Konto LIKE ?",\r
"s.MarketID IS NULL",\r
"s.Potrazuje",\r
"s.Potrazuje-s.Duguje",\r
"SA",\r
"With a price or sales at this location",\r
"with other devices. Exchange is turned on by connecting to the IRIS CORVINA server (above).",\r
"with an error",\r
"from statement",\r
"from the costing sheet",\r
"with the general price,",\r
"with the basis (",\r
"{0} posted from this statement.",\r
"From this computer, the import of the item database, cancelling an import and linking points of sale are sent to the company's main computer, which executes them at the next exchange; the result arrives here with its snapshot. The import of the code list from Excel is done on the main computer.",\r
"incl. VAT",\r
"Incl. VAT",\r
"With VAT {0} %",\r
"with the company data up to this moment. It is transferred to the manager's device (USB, Google Drive, mail) and loaded in Manager:",\r
"From recent invoices",\r
"From computer",\r
"From computer \\"{0}\\"",\r
"from computer \\"{0}\\"{1}",\r
"With difference",\r
"with reasons and evidence and a deadline for the employee's response of at least",\r
"Received from the server: {0}, sent: {1}.",\r
"from the scan: \\"",\r
"With line items:",\r
"From device",\r
"template",\r
"The template has been saved: {0}",\r
"The template was not saved: {0}",\r
"Wait",\r
"Save",\r
"Save items",\r
"Save domain",\r
"Save database file for Manager",\r
"Save guest",\r
"Save and verify",\r
"Save changes",\r
"Save rules",\r
"Group {0} saved.",\r
"Saved: {0}.",\r
"Saved.",\r
"Now",\r
"current",\r
"Current",\r
"Current price",\r
"Current general price:",\r
"Current rate",\r
"Current val.",\r
"Current code",\r
"sadržaj",\r
"The content is the same. The decision only aligns the state marker.",\r
"the content was corrupted in transfer",\r
"The content was changed in the meantime in another program. The new state has been loaded; the change was not saved.",\r
"the content has not changed",\r
"Agrees to notifications and offers",\r
"Consent given {0}{1}.",\r
"Consent from",\r
"Consent withdrawn {0}.",\r
"Website",\r
"Hide",\r
"Hide the entire group from the menu",\r
"Hide effective margin",\r
"Hide other notifications ▴",\r
"Hide difference",\r
"Hide manual entry",\r
"Hide list",\r
"hidden",\r
"hidden",\r
"hidden",\r
"balance",\r
"Balance",\r
"BALANCE (debt)",\r
"Balance (theirs / ours)",\r
"Balance (stock of goods)",\r
"Balance {0} EUR",\r
"balance {0} EUR",\r
"BALANCE = purchase value",\r
"Balance = opening balance + invoices − payments · click a row for the supplier ledger card",\r
"SUPPLIER BALANCE",\r
"Balance debit",\r
"group balance below 1,000 EUR → entire balance to expense (Art. 9)",\r
"The book balance is negative, from",\r
"The customer balance ({0}) and the IOS items ({1}) differ. Before sending the IOS, payments and invoices must be checked (advance, manual item).",\r
"Balance per card",\r
"Balance credit",\r
"The room account balance is {0} EUR. Check out the guest with an unsettled balance?",\r
"The room account balance is not settled: {0} EUR.",\r
"Balance matches: {0} EUR.",\r
"The balance of each outlet is the opening balance for year {0} when no stocktake as of 31.12.{1} exists.",\r
"balance, ledger card, payments",\r
"Sending {0}…",\r
"sends closings only",\r
"sent to registers",\r
"Sent to registers",\r
"Send technical errors to the publisher",\r
"counter printout of statement no. {0}{1}",\r
"counter printout: {0} statements ({1} – {2}){3}",\r
"automatic",\r
"only {0} employee (the initial list has {2})",\r
"analytical only",\r
"Item only (code)",\r
"only items without a price",\r
"only items entered as a medicine",\r
"only without English",\r
"only without a rule",\r
"cigarettes only",\r
"Cigarettes only (unchanged): {0}.",\r
"only price above the maximum retail price",\r
"Only one computer can be the main one",\r
"only one device",\r
"Only when the employment contract grants the employee more leave days (e.g. special working conditions). A reward for a single year goes above, as an incentive.",\r
"Corrective only:",\r
"Windows only.",\r
"unprocessed only",\r
"Only holders who gave consent and have not withdrawn it. Every export is recorded in the access log.",\r
"only those awaiting the customer's notice",\r
"only those marked for registers",\r
"partner stores only",\r
"Data only, for other programs: UTF-8, separator \\";\\", decimal comma, date dd.mm.yyyy, no total row.",\r
"only confirmed weeks",\r
"Only rate increases",\r
"only changed ones (",\r
"Only the computer in processing mode.",\r
"Only from invoices",\r
"only with a remainder",\r
"only with a difference",\r
"Only rooms to clean",\r
"just record that it was delivered today",\r
"Only for positions with access to important business information or a wide circle of partners (Art. 161 para. 2) — e.g. manager, procurement",\r
"single parent",\r
"Single parent (child up to 15)",\r
"single parent of a child under 15",\r
"Single parent of a child up to 15 years: +{0} days (rulebook)",\r
"The self-service portal has no ENU entry; the device is registered by a message to the fiscal service from this program. The registration is done",\r
"Mailbox",\r
"Sanitary booklet.",\r
"Hour",\r
"SAT",\r
"The \\"to\\" hour is not valid (format HH:MM).",\r
"The \\"from\\" hour and the \\"to\\" hour cannot be the same (a period past midnight is entered e.g. 22:00–02:00).",\r
"The \\"from\\" hour is not valid (format HH:MM).",\r
"Hours",\r
"hours × hourly rate",\r
"Hours give more than the agreed net for: {0}{1}.",\r
"the hours below are derived from these days",\r
"Hours per week",\r
"Hours entered.",\r
"Hours for payroll —",\r
"SAVEPOINT stari_zapis",\r
"Šavnik",\r
"Savo Radonjić",\r
"The digest does not match the message content.",\r
"Summary of the response (if given)",\r
"is read by OCR because its font is illegible, and the NLB \\"transaction overview\\" has no payee, so the supplier is determined only by the invoice amount), or the statement text is pasted. From the description the program recognises the supplier: by PIB, by the bank account and name confirmed earlier, then by words of the name.",\r
"differs from the balance on 31.12.",\r
"Sugar",\r
"Sugar (crystal, powdered, cube)",\r
"Week",\r
"Week {0} – {1} is confirmed for {2} stores.",\r
"Week {0} – {1} is confirmed: {2} slots, {3} h. The schedule is locked and enters the shift-based payroll calculation.",\r
"Week {0} – {1}{2}{3}",\r
"Week {0} confirmed: {1} slots, {2} h.",\r
"Week {0}.{1}. – {2}.{3}. has been confirmed. The schedule can be changed after the confirmation is cancelled.",\r
"The week is",\r
"the week has been confirmed here",\r
"The week is confirmed",\r
"The week is confirmed and locked. It can be changed after the confirmation is cancelled on the \\"Month by store\\" tab.",\r
"The week as on paper: click a shift → click a name · quick entry employee × day · Sundays · working hours of each store · hours go to payroll",\r
"The week of this store is confirmed. It can be changed after the confirmation is cancelled.",\r
"Week confirmed — click to cancel",\r
"The week for {0} is confirmed.",\r
"Weekly (changes shift every week)",\r
"sekundarno",\r
"select",\r
"Scheme",\r
"Scheme \\"{0}\\" → {1}",\r
"Scheme \\"{0}\\" → {1}.",\r
"Posting scheme",\r
"The posting scheme has no account for \\"{0}\\" (Finance → Chart of accounts → Schemes).",\r
"The seniority bonus scheme has been entered from {0}. Open calculations are recalculated with the \\"Calculate all\\" button.",\r
"The seniority pay scheme has not been selected.",\r
"POSTING SCHEMES",\r
"Posting schemes — which account the program uses for which role",\r
"Mustard",\r
"sep.tax.gov.me/self-care",\r
"September",\r
"September",\r
"September",\r
"Batch",\r
"Batch {0} of item {1} has been entered as withdrawn. The ban reaches the registers with the next price list.",\r
"The batch has been removed from the list.",\r
"The batch has not been entered.",\r
"Certificate",\r
"The certificate is valid. Signer: {0} (valid until {1}).",\r
"The certificate has expired. A new certificate is required.",\r
"Certificate selected: {0}",\r
"The certificate has been revoked.",\r
"The local server certificate has expired (check the date on the computer).",\r
"The local server certificate is not yet valid (check the date on the computer).",\r
"The certificate on this computer belongs to another company (PIB {0}) — select this company's certificate (Settings → Fiscalization).",\r
"The certificate on this computer belongs to another company (PIB {0}). Select this company's certificate.",\r
"The certificate on this computer belongs to another company (PIB {0}). To use several companies with their own certificates on the same computer, a new installation of the program is required (Setup 1.0.90 or later); until then, fiscalization is done from the computer that holds this company's certificate.",\r
"The certificate does not sign correctly (self-check failed).",\r
"No certificate selected.",\r
"The certificate was not issued by a registered issuer (CA). A fiscalization certificate (CoreIT or Pošta CG) is required.",\r
"Certificate not found: {0}",\r
"The certificate is not valid.",\r
"The certificate cannot be read: {0}",\r
"The server certificate does not match the local server CA fingerprint — the connection was terminated and nothing was sent. The fingerprint should be compared with the IRIS Server program overview screen (or with the code list from IRIS Admin).",\r
"The server certificate does not sign the remembered CA of the local server.",\r
"The server certificate is not readable.",\r
"The server certificate is not signed by the remembered CA of the local server.",\r
"The certificate for fiscalization has not been selected (Settings → Fiscalization).",\r
"The certificate for fiscalization has not been selected.",\r
"Certificate for signing receipts",\r
"server",\r
"Server",\r
"server IRIS CORVINA",\r
"The IRIS CORVINA server is not called over a local connection.",\r
"The server rejected the revocation: {0}",\r
"The server rejected this device (disabled or invalid token). The next attempt is in 15 minutes. The device needs to be paired again: \\"Disconnect\\", then a new code from the administrator.",\r
"The server rejected the sender or recipient.",\r
"The server rejected the login (user name or password).",\r
"The server responded with error {0}.",\r
"The server returned an unexpected response.",\r
"The server does not provide company data (older server version). Enter the company data manually (Settings → Company).",\r
"The server is not responding (timed out).",\r
"The server does not support cancelling a pairing code (a newer version of server 0.5.2 is required). An unused code is valid until the deadline expires.",\r
"The server does not support connecting the Manager from Accounting (server 0.5.3 is required). The Manager connects via the database file.",\r
"The server does not support managing cash registers from Accounting (server 0.5.2 is required). Cash registers are kept locally.",\r
"The server did not provide the company name.",\r
"The server is not available for cash registers: the cash register is entered locally, without a pairing code.",\r
"Server unavailable: {0} Changes are waiting and will be sent when the connection is restored.",\r
"The server is not available. Order outcomes are waiting to be sent.",\r
"The server is not available. Cash registers are kept locally.",\r
"The server is not available. The Manager connects via the database file or later, with a code.",\r
"The server is not available. The option is not turned on.",\r
"The server did not send a CA certificate — it is not a local IRIS server.",\r
"The server did not send a certificate.",\r
"The server did not confirm the consent. The option is not turned on.",\r
"The server did not receive it (see the error)",\r
"The server did not return a pairing code.",\r
"The server did not return the company data.",\r
"Server refused",\r
"The server refused the change: {0}",\r
"The server through which invoices, quotes, delivery notes and IOS replies are sent from the program. The server details apply to the company (they are transferred to other computers); the account password is entered separately on each computer and stored encrypted, outside the database.",\r
"The server is responding slowly. Data exchange with the server continues in the background.",\r
"The server requires login, but the user name or password has not been entered.",\r
"Server, devices and data exchange",\r
"Server: the exchange is still in progress and continues in the background.",\r
"Server: received {0}{1}.",\r
"ServerVeza:{0}",\r
"SERVICE",\r
"The service responded with HTTP {0}, without explanation.",\r
"SET",\r
"Seasonal pause from {0} to {1} The program works only for reading and exporting data.",\r
"Seasonal worker with registered residence",\r
"SHA-256",\r
"SHA-256 file fingerprints:",\r
"item code list",\r
"Item code list in Excel and the item database",\r
"Item catalogue, barcodes and margins",\r
"Group list: a group and its parent group (empty = group without a parent group).",\r
"The code list has been exported: {0}",\r
"The code list is empty.",\r
"Medicines code list",\r
"The medicines code list is empty. A register item is found by searching and entered as a medicine.",\r
"Medicines catalogue for cash registers (Rx/OTC, INN, ATC, FZO List) · maximum prices CInMED · recalled batches · FZO invoice from prescriptions from cash registers",\r
"The code list fills itself when invoices are imported · up to 800 results shown",\r
"Sifarnik210",\r
"Code",\r
"SIFRA",\r
"code",\r
"Code",\r
"The code \\"{0}\\" is not valid (a whole number from 100001 upwards).",\r
"code {0}",\r
"Code {0} is repeated in the file.",\r
"Code {0} already exists in the code list.",\r
"Code {0}: the cash register ({1}) added \\"{2}\\" ({3} %, {4}), while in the price list it is \\"{5}\\" ({6} %). The items were not merged; the cash register item needs to be given a different code.",\r
"Code {0}: the cash register ({1}) added a new item \\"{2}\\", while the price list has a different item under that code. The items were not merged; the cash register item needs to be given a different code.",\r
"Code {0}{1}{2}",\r
"Code / barcode",\r
"Code / barcode (e.g. 3*7613…)",\r
"The register item code has not been entered.",\r
"The item code was not entered.",\r
"Activity code",\r
"Activity code: {0}",\r
"The code must not contain spaces.",\r
"Register code",\r
"Cash register code {0} is already linked to a catalogue item (ID {1}).",\r
"The code does not exist. Pharmaceutical data is entered for an existing item.",\r
"The code does not exist. For a new item the Šifra field stays empty.",\r
"Basis code",\r
"The basis code has not been selected.",\r
"Basis code under which this type of earnings is reported in IOPPD (1 = earnings; 7 = sick leave over 60 days / pregnancy leave)",\r
"Sifra;Barkod;Naziv;JM;Kolicina;Nabavna;MPC;PDV",\r
"Password encryption is not available on this computer. The password was not saved.",\r
"Synchronization:",\r
"The synthetic account {0} does not exist in the chart of accounts.",\r
"A synthetic account from the framework cannot be deactivated.",\r
"synthetic",\r
"Synthetic",\r
"Alcohol, wine and fruit vinegar",\r
"Wide image: header of invoices, quotes, costing sheets and reports. A picture that is wider than tall looks best (e.g. 600 × 300).",\r
"siroko",\r
"SIS",\r
"System",\r
"Job structure",\r
"Job structure · contracts and decisions · annual leave · work discipline — per",\r
"The job structure is complete: {0} positions with description and conditions, {1} employees assigned.",\r
"The job classification is empty. The Rulebook is created after \\"Fill initial job classification\\" or after positions are added manually.",\r
"The job structure is incomplete:\\n• {0}\\n\\nFill in the starting job structure (add missing positions, complete descriptions, merge duplicates, reconcile the number of post slots) and then create the rulebook?",\r
"JOB STRUCTURE",\r
"Scan {0}",\r
"Scan {0}: {1}",\r
"Scan of daily reports",\r
"scan or search",\r
"scan or manual entry",\r
"Scan from Manager",\r
"Scan from the Manager ({0}): the QR code is not valid (parameters iic/tin/crtd are missing).",\r
"The scan was not saved: {0}",\r
"daily takings scan",\r
"Invoice scan {0}{1} — {2}{3}",\r
"Scan from the field",\r
"the scan is checked with the Tax Administration and sent; the number is not assigned here",\r
"daily takings scans",\r
"Scanned invoices",\r
"Scanned invoices that have not been entered yet ({0}).\\n\\nIf the program is closed, these invoices will not be entered and must be scanned again. Close the program?",\r
"Scanned invoices have not been entered",\r
"Invoice scanning",\r
"scanning immediately makes a costing sheet; it also processes scans from the phone",\r
"Scanning the QR code of a fiscal receipt. The costing sheet is created automatically through the Tax Administration service (MAPR).",\r
"Scanning the QR code of a fiscal receipt. The receipt is checked with the Tax Administration and saved; the costing sheet and document number are created by the computer in the office.",\r
"Scanning the QR code from a fiscal receipt",\r
"scanning the QR code from the receipt",\r
"Scanned",\r
"Scanned by",\r
"scan or type in",\r
"scan or type, then Enter",\r
"scans {0}",\r
"daily takings scans",\r
"Scans from the Manager without a margin (and without supplier history) get a margin of {0} %.",\r
"Scans from the field",\r
"Stores goods by type and expiry date, keeps warehouse records and item cards.",\r
"remove",\r
"Shorten the stay",\r
"Shorten by a night",\r
"SL",\r
"Ice cream, cream",\r
"Fresh bacon, tallow, pork fat, lard (rendered)",\r
"Sending {0} costing sheets to the printer…",\r
"Sent directly to the printer, without a dialog for each costing sheet.",\r
"Sending the log is not supported in this version of the program.",\r
"Sending by e-mail — {0}",\r
"error reporting turned off",\r
"error reporting turned on",\r
"Sending by email is not supported on this platform.",\r
"Sending to the server is waiting for a connection.",\r
"Sending to the server continues in the background.",\r
"Sending the order to the main computer",\r
"Sending via an SMTP server is not available on this device.",\r
"Sending via an SMTP server requires a new installation of the program. Until then, the document is sent as a draft message in the mail program.",\r
"Sending via an SMTP server requires a new installation of the program. Until then, a draft message with an attachment is opened in the mail program.",\r
"Sending test page…",\r
"Uploading an image is not supported in this program.",\r
"Uploading image…",\r
"Sending technical errors to the publisher is switched on.",\r
"Sending technical errors is switched off. Errors that were waiting to be sent have been deleted.",\r
"Sending to the shared barcode catalogue is turned off.",\r
"Sending to the shared barcode catalogue is turned on.",\r
"Sending…",\r
"Send barcodes and names to the shared catalogue",\r
"Arranges and replenishes goods on shelves and in refrigeration units by the rule \\"first to expire, first on the shelf\\".",\r
"Matches",\r
"image",\r
"The image is smaller than {0} × {1} pixels.",\r
"The image was corrupted in transfer.",\r
"The image was uploaded. The change has not been saved yet.",\r
"The image is empty.",\r
"The image is too large and cannot be reduced enough.",\r
"The image is larger than {0} KB.",\r
"The image must be in PNG, JPEG or WebP format.",\r
"Image not available",\r
"The image was not found.",\r
"The image from the server is not PNG, JPEG or WebP.",\r
"The image cannot be processed on this device.",\r
"The image cannot be read.",\r
"The image is also removed from the server (Cash register, Manager and the company's other computers).",\r
"The attached image must be a PNG or JPEG data URL (base64).",\r
"Photograph the interim report",\r
"Photographed X report",\r
"The image cannot be read.",\r
"Next week",\r
"Next period",\r
"next: Z {0} of {1}",\r
"Vacant",\r
"off",\r
"Free advance",\r
"The free advance of {0} EUR is counted toward the payments.",\r
"Day off",\r
"The free amount of the payment is {0} EUR.",\r
"Free account",\r
"Vacant",\r
"FREE GROUP",\r
"Vacant, clean",\r
"Days off",\r
"vacant rooms",\r
"Vacant rooms of this type in the period: {0}.",\r
"Free",\r
"accidental execution of",\r
"small",\r
"decrease",\r
"Decrease (EUR)",\r
"Decrease in liability (payment, credit note)",\r
"Decrease in the value of inventories of work in progress, finished products and unfinished services",\r
"Reducing the database…",\r
"sh.",\r
"shift",\r
"Shift",\r
"Shift {0}",\r
"Shift {0}: working hours {1}–{2} have no duration.",\r
"Shift {0}{1}",\r
"Shift #{0} of cash register {1} was opened {2} and closed {3}. All turnover is in the month of closing (VAT return); verification with the accountant is required.",\r
"Shift #{0} of cash register {1} ran past midnight ({2} → {3}). Turnover is on the day of closing.",\r
"Shift #{0} of cash register {1} ran past midnight. The daily takings are split by receipt days ({2}).",\r
"Shift #{0} of cash register {1} from {2} is in a locked month. The daily takings were not entered.",\r
"A shift without a selected store applies to all stores that have no working hours of their own. \\"Employees needed\\" is the number of employees required in that shift; the shortage of employees is determined from it.",\r
"A shift longer than 12 h is not permitted by the Labour Law.",\r
"Shift from the new cash register (daily takings)",\r
"The shift has been deleted.",\r
"The shift has been saved.",\r
"The shift has already been used in the schedule ({0} records). Deleting is not possible; the shift can be turned off (Active = no).",\r
"Cash register shift",\r
"The shift must have a name.",\r
"Shift since",\r
"reception shifts. Accommodation and advance receipts are in the daily takings of the shifts",\r
"Shifts",\r
"Shifts (since yesterday)",\r
"Shifts and HR",\r
"Employee shifts",\r
"Shifts swapped.",\r
"Reception shifts",\r
"Reception shifts — {0}",\r
"The shifts are the working hours of the employee's home store (they can be changed). Night hours = the part of the shift between 22:00 and 06:00. Work in two working times: \\"another shift\\" and splitting the days. The entry replaces the work items below; paid absences remain. When shifts are kept in the program, \\"🕘 Hours from shifts\\" is used instead of this.",\r
"The shifts of each store are entered according to actual working hours (e.g. I 08:00–16:30, II 16:30–01:00). The end of one shift is the start of the next. A store that is seasonally closed is switched off with the \\"works\\" field and is not shown in the week table. Night hours (22–06) are automatically paid +40 % in payroll.",\r
"Direction",\r
"Accommodation",\r
"Accommodation and advance receipts are included in the shift takings (Takings entry, PR-PDV). Tourist tax is separated from turnover.",\r
"Accommodation paid by",\r
"Accommodation incl. VAT",\r
"accommodation incl. VAT (base {0}, VAT {1})",\r
"frozen",\r
"SMTP",\r
"SMTP server",\r
"Company SMTP server",\r
"The SMTP server is not responding (timed out).",\r
"The SMTP server is not set up (Settings → E-mail): a draft message with an attachment is opened in the mail program.",\r
"The SMTP server is not set up (Settings → E-mail).",\r
"The SMTP server refuses the connection (address or port).",\r
"The database snapshot has been published ({0} MB).",\r
"The database snapshot is corrupted or incomplete ({0}). The database was not replaced. A new attempt is possible once the file has been downloaded completely.",\r
"The database snapshot has not been published: {0}",\r
"The database snapshot was not found in the folder. \\"Publish database for phones\\" must be run on the computer.",\r
"screenshot",\r
"The main computer's snapshot (\\"{0}\\", {1}) is older than the one already downloaded: publication no. {2}, while no. {3} was downloaded here. The main computer was probably restored from an older copy. The snapshot is not downloaded automatically; the main computer should be checked (a manual download makes a copy of this database before replacing it).",\r
"The main snapshot (published {0}) has already been downloaded.",\r
"Main computer snapshot downloaded",\r
"The main computer snapshot has not been published.",\r
"The main computer's snapshot is still being downloaded from Google Drive (a file of about 20 MB is not in the cache). The download will be repeated in the next round. For faster downloading: in Google Drive, turn on \\"Available offline\\" for the folder.",\r
"The main computer's snapshot is still being transferred (database {0}, description {1}). The download will be repeated in the next round.",\r
"The snapshot was published by an older version of the program (before 1.0.71). The snapshot does not contain payments and bank statements entered on this computer, so downloading it would delete them. The main computer must be updated (Connection → Update) and a new snapshot published.",\r
"This company's snapshot in the folder was published {0} by version {1}, which is older than {2} (or the main computer has not published a snapshot for a long time). The snapshot is not downloaded until the main computer publishes a new one, because changes to payroll, shifts and employees made here would be lost. Documents continue to arrive normally.",\r
"exchange snapshot, not a company (click deletes the item)",\r
"saving the database",\r
"Saving the database",\r
"Save",\r
"Save advance receipt",\r
"Save internal note",\r
"Save codes",\r
"Save contact",\r
"Save password and verify",\r
"SAVE note",\r
"Save credit note",\r
"Save opening balance",\r
"Save the classification decision for year {0} ({1} legal entity, data as of 31.12.{2})?{3}",\r
"saved",\r
"Saved {0} costing sheets: {1}",\r
"Saved {0} takings.{1}{2}",\r
"Saved {0}, tax {1} EUR",\r
"Saved without a check (no network). The check is done on the computer.",\r
"Saved: {0} — {1} EUR. Waiting to be processed on the computer.{2}",\r
"Saved: {0}.",\r
"Saved. Input VAT {0} EUR goes into PR-PDV field 19{1}.",\r
"lowers the rate",\r
"reduced 15 %",\r
"reduced 7 %",\r
"Price reductions",\r
"Price reduction {0} ({1}): {2} → {3} until {4}",\r
"Reduced",\r
"Reduced",\r
"Table salt (sea, rock and vacuum)",\r
"Room",\r
"room {0}",\r
"Room {0}",\r
"Room {0} — {1}",\r
"Room {0} — {1}{2}",\r
"Room {0} — occupied in that period",\r
"Room {0}: {1}.",\r
"Room {0}{1}",\r
"The room is occupied in that period: {0}",\r
"The room is occupied: {0}",\r
"The room is not marked as clean.",\r
"A room with code {0} already exists.",\r
"rooms to be cleaned",\r
"Rooms",\r
"Rooms to clean",\r
"Rooms: {0} in total, {1} occupied, {2} vacant, {3} to be cleaned, {4} out of service.",\r
"SOBRANIE",\r
"Soft certificate for",\r
"Software and licences",\r
"Soy",\r
"Solidarity aid — death of an employee or family member (up to 2,000 EUR)",\r
"Solidarity aid — serious illness / disability (up to 1,000 EUR)",\r
"Company's own domain: {0}",\r
"Own domain: not entered.",\r
"merging duplicate items",\r
"span",\r
"SUPPLIER SPECIFICATION",\r
"Supplier specification (from the purchase ledger)",\r
"Supplier specification (from incoming invoices)",\r
"Prescription specification for the FZO invoice",\r
"freight forwarder",\r
"Forwarder / carrier",\r
"List",\r
"The list of licences cannot be loaded: {0}",\r
"The list of licences is not included in this build of the program.",\r
"List of locations. The name in the first column is the same as the price column header on the \\"Artikli\\" sheet. The \\"Market u programu\\" column determines which store the location belongs to.",\r
"The old → new list has been saved: {0}",\r
"Merged {0} groups: {1} duplicate items deleted, {2} entries transferred.",\r
"Merge {0} groups of duplicate items?\\n\\nA prior backup is recommended (Settings → Backup).",\r
"Agreement on termination of employment",\r
"The agreement is signed by both parties. The document contains the statutory notice on the consequences for rights in the event of unemployment (",\r
"The agreement takes legal effect from the date of certification by a notary, court or local government body (Art. 165 para. 5 of the Labour Law).",\r
"Termination by mutual agreement…",\r
"secondary",\r
"Secondary — entry and viewing, follows the main computer",\r
"SECONDARY computer (entry — follows the main database)",\r
"Disputed supplier items:",\r
"disputed items (",\r
"Disputed items:",\r
"Disputed",\r
"Floor",\r
"Floor {0}",\r
"Qualification",\r
"ready",\r
"SQLite format 3",\r
"SQLite format 3\\u0000",\r
"sr-Latn",\r
"pro rata 1/12 for {0}  of work in {2} ({3})",\r
"medium",\r
"Assets of discontinued operations",\r
"Cleaning products",\r
"Plant protection products",\r
"SREDSTVO",\r
"Wed",\r
"Wed",\r
"Wednesday",\r
"Wednesday",\r
"Serbian (Cyrillic)",\r
"HH:MM",\r
"SSL/TLS (465)",\r
"SSS — economics track (IV) or VŠS (VI)",\r
"SSS — secondary vocational education (IV)",\r
"SSS — secondary vocational education (IV) or KV (III)",\r
"SSS or KV (III)",\r
"Ln.",\r
"para. 2)",\r
"What",\r
"What happens to the paid advance when the guest cancels.",\r
"What will change —",\r
"What falls due",\r
"what is due, mail",\r
"What and when needs to be paid · open items · entering payments from a bank statement",\r
"What is entered as PIB: Montenegrin PIB (TIN), foreign VAT number (VAT), ID card (ID) or passport (PASS)",\r
"What is wrong",\r
"What IRIS Manager does: orders, goods receipt, write-offs, stocktakes, transfers, price reductions, tasks and store visits. Data arrives through the IRIS CORVINA server exchange (view only).",\r
"What is generated",\r
"What is posted",\r
"What is being charged",\r
"What needs to be checked",\r
"Permanent shift",\r
"NON-CURRENT ASSETS HELD FOR SALE",\r
"Permanent weekly day off. With no selection the program chooses on its own (evenly across the week, or when the most consecutive days have accumulated).",\r
"always",\r
"Permanent increase under the employment contract — every year",\r
"Print",\r
"Print the last receipt",\r
"Printer",\r
"Printer",\r
"the printer did not respond within 90 seconds (it may be waiting for a response in a dialog)",\r
"Printer for costing sheets",\r
"printer: {0}",\r
"Print",\r
"Printing is available only in the Windows version.",\r
"printing was refused",\r
"Printing failed: {0}",\r
"Printing works only in the Windows version.",\r
"Standard costs",\r
"Standard costs are {0} %, but {1} % was entered, so the tax is calculated on a larger base. A different percentage is entered only when the law prescribes it for this type of lease; otherwise the field stays empty.",\r
"Balance",\r
"Advance balance by customer",\r
"statement balance does not match (previous − debit + credit ≠ new)",\r
"The state of the cash registers was not read: {0}",\r
"status for the year {0}",\r
"State as of {0}",\r
"Status as of {0} · turnover for day {1}",\r
"The stock starts from the opening balance of goods",\r
"The stock starts from the closed stocktake of the whole store",\r
"Exchange status",\r
"Reservation status",\r
"State of each cash register from the data the cash register sends (Cash register",\r
"Status of each cash register now: shift, turnover of goods and money, cash in the drawer, latest receipts · view only",\r
"Book balance on the stocktake date (stock list)",\r
"Live status",\r
"Old",\r
"The old price cannot be negative.",\r
"The old and new rates must be selected and different.",\r
"Old MPC",\r
"Old rate",\r
"Old version",\r
"Old program version:",\r
"stari bar",\r
"The old day stays in the list as a working day.",\r
"Old QR codes with the IRIS address still work.",\r
"The old record cannot be applied.",\r
"Older change",\r
"Age of receivables",\r
"AGE OF RECEIVABLES AND DEFAULT INTEREST",\r
"STARTTLS (587)",\r
"Startup",\r
"stat",\r
"Statistical annex",\r
"Statistical annex",\r
"STATISTICAL ANNEX",\r
"status",\r
"Status",\r
"The contractor's insurance status (047 / 048 / 079) is not selected.",\r
"Contractor's insurance status (IOPPD code) *",\r
"Receipt status",\r
"The certificate status is unknown.",\r
"Statutory and other reserves",\r
"lines",\r
"Item",\r
"item {0}",\r
"invoice line without an item from the code list",\r
"The item has been written off.",\r
"The item has been voided.",\r
"The item does not belong to the issue form.",\r
"The line has no cash register item code.",\r
"delivery note line without an item from the code list",\r
"The item no longer exists.",\r
"items",\r
"Items",\r
"Items without an item in the code list (not in the document): {0}",\r
"cigarette items ({0})",\r
"Items where the supplier gave a smaller discount than agreed. \\"Overpaid\\" = how much larger the invoice is than if the discount had been honoured.",\r
"items the supplier claims that are not in the records. Before payment, a physical check of invoices and costing sheets is required (supplier error or attempted fraud).",\r
"Items that were not restored (changed after the import):\\n\\n{0}{1}",\r
"Items not in the records are payments/credits (they reduce the debt). It must be checked whether the payments have been entered.",\r
"The compensation items do not match the absence records.",\r
"The items were not recognized. Only the total amount {0} was found (IOS without items); only the balance is compared.",\r
"Write-off items without an item in the code list (",\r
"goods return items ({0})",\r
"Income items",\r
"Items with",\r
"Items from the write-off list into minus + posting to accounts 134000/134001/134002 and 5771",\r
"The items have already been charged on another receipt. This receipt should be cancelled.",\r
"The table items were not recognized. The table is entered by copying from the PDF.",\r
"Items to check (the same barcode on several items, wrong check digit, barcode in a disallowed format, item without a price or barcode). This sheet is not imported.",\r
"items",\r
"Items",\r
"items {0} · {1}",\r
"lines that were not entered",\r
"Entries not written",\r
"Items changed",\r
"Items changed in the meantime: {0} (unchanged).",\r
"Items on the card",\r
"items by item (cigarettes etc.). Everything can be changed in \\"Costing sheets and invoices → ⚖ Margins by item\\".",\r
"Items in a locked period: {0} (unchanged).",\r
"Items to transfer",\r
"Service",\r
"Service (yrs)",\r
"Seniority (before empl.)",\r
"Seniority BEFORE joining us; the years with us are added automatically from the employment date",\r
"Seniority before employment",\r
"Total serv.",\r
"arrived",\r
"cash register files have arrived",\r
"Manager files have arrived",\r
"Received",\r
"new arrived:",\r
"incentive (reward) for contribution at work",\r
"INCENTIVE (REWARD) FOR CONTRIBUTION AT WORK",\r
"Incentive (reward days) for work contribution",\r
"Incentive (reward days) for work contribution — only",\r
"Incentive (reward days) for work contribution for {0} and permanent increase under the employment contract",\r
"Incentive (payout adjustment)",\r
"incentive of {0} days reduced to {1}; a total of at most {2} working days (rulebook)",\r
"The incentive was approved for a contribution at work{1}.",\r
"Incentive for work contribution (up to days)",\r
"Animal feed",\r
"Rate",\r
"Rate {0}",\r
"Rate {0} → {1} from {2}\\nItems with rate {3}: {4}\\n\\n{5} Issued receipts keep the rate from the receipt. Record the change?",\r
"Rate {0}: {1}.",\r
"Rate {0} has been added to the rate list.",\r
"Rate {0} changed to {1}.",\r
"Rate {0}%",\r
"Rate {0}%: {1}.",\r
"Rate {0}%: the amount was corrected according to UKUPAN POREZ (OCR read a different digit).",\r
"Rate {0}%: base {1} + tax {2} = {3}, but the turnover read is {4}. The amounts need to be checked.",\r
"Rate {0}%: base and tax calculated from turnover (OCR did not read all the numbers of the block).",\r
"Rate {0}%: tax and turnover calculated from the base (OCR did not read all the numbers of the block).",\r
"Rate % (municipal decision)",\r
"0 % rate without a basis (",\r
"The item's rate was entered manually, and a supplier invoice newer than that entry carries a different rate. A manual rate is not changed without confirmation.",\r
"Advance rate: 21, 15 or 7 %.",\r
"Rate from the cash register catalogue; base and VAT recalculated from the amount with VAT per item.",\r
"Rate on the advance receipt",\r
"Rate on food",\r
"Rate on food with accommodation (%)",\r
"Rate on the cancellation fee",\r
"Rate on accommodation",\r
"unknown rate",\r
"The VAT rate is not valid.",\r
"VAT rate (%)",\r
"VAT rate {0} %",\r
"The VAT rate {0} % is not in the rate code list.",\r
"The VAT rate is required for a new item.",\r
"The VAT rate must be a number from 0 to 100.",\r
"VAT rate on the advance receipt (%)",\r
"VAT rate on the cancellation fee (%)",\r
"The VAT rate is not a number.",\r
"the VAT rate is not valid",\r
"The VAT rate is not valid.",\r
"The VAT rate is chosen from the list (sheet \\"Šifarnici\\").",\r
"VAT rate for selected",\r
"VAT rate for rows without separated VAT",\r
"Rate according to rule \\"{0}\\".",\r
"The rate by rule was entered for {0} items.",\r
"The rule's rate is not in the rate code list.",\r
"Rate from invoice",\r
"accommodation rate",\r
"Payroll rate",\r
"Rates to check (",\r
"Rates to check: {0} (VAT tab).",\r
"Rates",\r
"Rates and thresholds",\r
"Rates and types of income",\r
"Rates by rules — overview",\r
"The rates are set according to the regulations in force in 2026 (\\"Europe Now\\" 1 and 2): employee contributions PIO 10 % + unemployment 0.5 %; employer 0.5 % + Labour Fund 0.2 %; tax 0/9/15 % (thresholds 700 and 1,000 EUR, marginal); surtax on the tax — borne by the employer (not included in gross or in IOPPD). When the regulation changes, the number is changed here: employees already calculated keep their saved amounts, and a new calculation (and \\"Calculate all\\" on an open month) uses the new rate. The average salary for the contribution for persons with disabilities is entered separately for each calculation year (the previous year's average). The row for a new year opens automatically with last year's amount, which is corrected when the new average is published.",\r
"Cancellations",\r
"Cancellations and exceptions",\r
"Void",\r
"cancelled",\r
"Cancelled",\r
"A cancelled document is not issued.",\r
"A cancelled document cannot be changed.",\r
"A cancelled receipt is not fiscalized.",\r
"void",\r
"Void",\r
"Cancellation (corrective invoice)",\r
"Advance cancellation {0}",\r
"Cancellation of advance {0} — receipt {1}",\r
"Cancellation of advance {0} per receipt {1}",\r
"Cancellation of advance receipt {0}{1}",\r
"Cancelling a fiscalized invoice issues a corrective invoice (negative amounts) and sends it to the Tax Administration.\\nReason:",\r
"Cancellation amount",\r
"A cancellation by corrective receipt exists only for invoices.",\r
"Cancellation of VAT on advance {0} %",\r
"CANCELLATION of receipt {0}{1}",\r
"Item void",\r
"Page",\r
"pages · total",\r
"page {0}",\r
"page {0}, reading 1/3",\r
"page {0}, reading 2/3",\r
"page {0}, reading 3/3",\r
"page {0}, row {1}/{2}",\r
"page {0}: the same report for that store and date already exists — skipped",\r
"page {0}: store not selected",\r
"page {0}: no date",\r
"page {0}: Z number not entered (in KIF: \\"Z-0000\\")",\r
"Page {0}/{1} — {2}…",\r
"Foreign",\r
"Foreign supplier",\r
"Foreign supplier (import)",\r
"Foreign suppliers with a balance on account {0} (domestic suppliers)",\r
"Foreign guest",\r
"Foreign entity",\r
"strftime('%Y-%m-%d %H:%M:%S','now','localtime')",\r
"strong",\r
"Qualification level — per job classification",\r
"Qualification level — actual",\r
"electricity",\r
"electricity, utilities, fuel, telephone…",\r
"Actual hours worked (empty = whole shift)",\r
"are non-working days for everyone: work on that day is paid +150 %, and those who do not work receive compensation. They are entered automatically, two days each, and when a holiday falls on a Sunday, the following day is also a non-working day (Law on State and Other Holidays, Art. 3).",\r
"are required (JMBG for tax returns, salary for the calculation). It is enough to enter one of the two salary fields; the other is calculated automatically. The bank account can also be entered in short form (e.g. 540-32116541-40); zeros are added automatically. Surtax by municipality",\r
"are protected: when two computers changed the same data, neither change is overwritten automatically; it waits for a decision (\\"Changes that are pending\\").",\r
"Sat",\r
"Sat",\r
"Subject: =?UTF-8?B?{0}?=",\r
"Saturday",\r
"Saturday",\r
"substr({0},1,10)",\r
"substr({0},1,7)",\r
"substr({0}.DatumDokumenta,1,10)",\r
"substr({0}.DatumUnosa,1,10)",\r
"substr(COALESCE({0}, ''),1,10)",\r
"substr(COALESCE(d.DatumIzdavanja,''),1,10)",\r
"substr(COALESCE(k.DatumDokumenta, k.DatumFakture, ''), 1, 10) >= ?",\r
"substr(COALESCE(k.DatumDokumenta, k.DatumFakture, ''),1,10)",\r
"substr(COALESCE(k.DatumUnosa, k.DatumDokumenta, k.DatumFakture),1,10)",\r
"substr(COALESCE(kp.Datum,''),1,10)",\r
"substr(COALESCE(o.Datum,''),1,10)",\r
"substr(COALESCE(p.Datum,''),1,10)",\r
"substr(COALESCE(r.Datum,''),1,10)",\r
"substr(k.DatumFakture,1,10)",\r
"substr(s.Konto,1,{0})",\r
"Cured meat products and vacuum-packed meat",\r
"Conflict",\r
"code conflict",\r
"Summary receipts",\r
"Forests and perennial plantations",\r
"Forests and perennial plantations held for sale",\r
"Suspicious activity — deleted receipts and items by cashier",\r
"Sulphur dioxide and sulphites",\r
"suncokretovo ulje; ulje suncokret; maslinovo ulje; jestivo ulje; kukuruzno ulje; sojino ulje; susamovo ulje; laneno ulje",\r
"Sesame",\r
"Dried fruit — plums",\r
"Dried fruit — figs and other",\r
"Souvenirs",\r
"sv-SE",\r
"all",\r
"All sales in the period have a purchase price.",\r
"all assets of the group disposed of → remaining balance to expense (Art. 8)",\r
"Each costing sheet",\r
"each closed shift becomes daily takings",\r
"Every statement goes into the bank register, every transaction once; payments recognised by PIB or a remembered account are posted immediately, the rest await review in Bank → Transactions",\r
"each store",\r
"Every hour worked is paid",\r
"Each employee has",\r
"Each hour is classified exactly once (holiday → night → regular), so there is no double payment. Overtime is counted over the employee's fund across all stores (each store shows its own part); \\"Holiday compensation\\" = a non-working holiday that the employee did not work. The \\"Sunday\\" columns show how many Sundays (days) the employee worked — for manual entry of \\"Sunday work\\" in payroll; those hours are already included in the other columns. The \\"Employee payroll\\" screen takes these hours with the \\"Calculate by shifts\\" button — when weeks are confirmed, only from the confirmed ones.",\r
"all",\r
"All",\r
"All ({0} EUR)",\r
"all (without duplicates)",\r
"all (including processed)",\r
"All automatic payment and credit note links anew, by today's rules (main computer only)",\r
"All invoices entered today, regardless of the invoice date (for \\"Print all\\").",\r
"All groups",\r
"All payouts to natural persons in the payroll month: salaries, IQOS, service contracts, rent — and rent payouts from the statement without tax calculation (for the accountant, before IOPPD and the surtax return)",\r
"Everything on one summary receipt",\r
"All costing sheets from the selected period in one PDF, each on its own page",\r
"all costing sheets in the selection (",\r
"All costing sheets at once to the printer, without a dialog for each",\r
"All costing sheets in one PDF, each on its own page",\r
"All in order",\r
"Everything matches.",\r
"All weeks of the month are confirmed.",\r
"All rooms are clean.",\r
"Everything that passes through the accounts: inflows, outflows, by type, by day and month · each transaction is recorded ONCE, no matter how many times the statement arrives",\r
"All rates match the rules.",\r
"all types",\r
"All room types",\r
"sveti stefan",\r
"observes a religious holiday (requested a day off) — work is paid as holiday work",\r
"all",\r
"All",\r
"All active",\r
"all active premises (",\r
"All items",\r
"All items from invoices in the period have a barcode.",\r
"All items on the invoice have a barcode.",\r
"All items with the old rate get the new rate from the given date. The rate takes effect automatically on that day in the program and on the registers; issued receipts and reports keep the rate from the receipt.",\r
"All items in the code list have a barcode.",\r
"all days",\r
"All suppliers",\r
"All documents",\r
"All customers",\r
"all stores",\r
"all stores (general price)",\r
"All stores (overview)",\r
"all stores (all registers)",\r
"all stores (total)",\r
"All purchased items have been counted.",\r
"All unused Manager codes of this company will stop being valid. Continue?",\r
"All unused codes for this cash register stop being valid. A paired cash register is not disabled.",\r
"all outlets",\r
"All outlets",\r
"all accounts",\r
"All invoices:",\r
"A payment is recorded for all takings with a passed deadline.",\r
"svinjska mast; biljna mast; loj",\r
"svjeze meso; mljeveno meso; pilet; pilec; junet; junec; svinjet; svinjsk; telet; telec; jagnjet; svjeza riba",\r
"its changes",\r
"Own prices",\r
"their own colour",\r
"Purpose",\r
"Purpose of the certificate (e.g. loan, visa, bank, kindergarten):",\r
"The purpose of the issue form is not valid.",\r
"The sync folder is not set.",\r
"Sync now",\r
"t.Datum DESC, t.TransID DESC",\r
"t.Datum, t.TransID",\r
"t.Status NOT IN ('duplikat')",\r
"t.TransID IN ({0})",\r
"That code is already linked to another item.",\r
"That payment is already linked to a takings record.",\r
"That connection is no longer paired.",\r
"Tab",\r
"The table was not recognized. Only the total amount {0} was found (IOS without items); only the balance is compared.",\r
"Table in XML form for machine processing. Not the format for the tax e-return (IOPPD and the portal use their own XML).",\r
"Room board",\r
"table",\r
"on top of",\r
"tag",\r
"That month is locked. Posting to it is not possible.",\r
"Tax on the fiscal receipt",\r
"The tax is not revenue of the property; it is paid to the municipality.",\r
"Tax is included in the VAT base",\r
"taksa.bezTaksePoslijeNoci",\r
"taksa.danIzvjestaja",\r
"taksa.djecaDo",\r
"taksa.exOznaka",\r
"taksa.rokUplateDana",\r
"taksa.umanjenjeProc",\r
"taksa.umanjenoDo",\r
"taksa.uOsnoviciPdv",\r
"fees and charges",\r
"TB",\r
"tbody",\r
"td",\r
"those years (in order)",\r
"TECHNICALERROR",\r
"Technical errors (publisher IRIS CORVINA)",\r
"Technical errors (display crash, error in the exchange cycle) are reported by the program automatically, without personal data. Here you report what the program did not record: a wrong amount, a button with no effect, a slow screen. The description is accompanied by the screen name, the latest actions (button names) and the program version, without document contents.",\r
"Text",\r
"Text (contract and calculation)",\r
"Statement text, e.g.:\\n05.08.2026 BAR-KOD DOO PODGORICA 02345678 -12.450,00 ...",\r
"Note text…",\r
"The message text is required.",\r
"Text from the interim report (manual paste, if the button does not work)",\r
"The text from the interim report has not been entered.",\r
"Text of the warning (reason, evidence, deadline for response):",\r
"Text to copy (Ctrl+A, Ctrl+C):",\r
"Request text to the supplier",\r
"The request text to the supplier has been copied to the clipboard.",\r
"Current year",\r
"Current year {0}",\r
"current",\r
"Current (business) accounts",\r
"Current (business) bank accounts",\r
"Current account (analytics by bank account)",\r
"Telephone",\r
"The phone keeps its exchange files in a folder in Documents. Database backups are made by the office computer.",\r
"Phone and internet",\r
"Phone is required. The cash register recognizes the customer by phone number.",\r
"Contact phone",\r
"The phone only scans and sends. Costing sheets and document numbers are created by the computer in the office.",\r
"Phone in the shop",\r
"Subject",\r
"No message subject entered.",\r
"theoretical, no stocktake",\r
"THEORETICAL stock",\r
"Theoretical stock = opening + purchases + transfers − write-off − credit · physical stocktakes by store",\r
"TEREA",\r
"Field allowance (up to 100 EUR per month)",\r
"TERET",\r
"Territory of the prohibition",\r
"Slot not found.",\r
"Slots",\r
"test",\r
"TEST",\r
"Test environment (efitest.tax.gov.me) —",\r
"TEXT",\r
"text/xml; charset=utf-8",\r
"textarea",\r
"serious",\r
"SERIOUS",\r
"Serious violations",\r
"Weight",\r
"Severity",\r
"Weight (kg) is required for at least one item.",\r
"Line weight (kg)",\r
"A more serious breach also includes conduct that under {0} para. 1 point 2 is a justified reason for termination (breach of occupational safety regulations that causes danger, coming to work under the influence of alcohol or psychoactive substances, unjustified absence for 3 consecutive working days or 5 working days with interruptions within 12 months, disclosure of trade secrets, violent or insulting behaviour, a criminal offence at work, misuse of work resources), as well as mobbing at work ({1}).",\r
"th",\r
"thead",\r
"The request body is not valid.",\r
"TIN",\r
"Type",\r
"tip dokumenta",\r
"The type must be: {0}.",\r
"Tivat",\r
"TIVAT",\r
"TLSv1.2",\r
"To",\r
"That is already this item's price.",\r
"That is not this computer: two computers have the main role. One of them needs to be assigned the secondary role.",\r
"To: {0}",\r
"No store has a shift that day (\\"Store working hours\\").",\r
"Nobody is scheduled that day.",\r
"of that month as a row with basis code",\r
"that (below, \\"Add item\\") and do not reduce working days.",\r
"Meal allowance (EUR/month)",\r
"Meal allowance (special part of earnings)",\r
"TOSCANELLO",\r
"tr",\r
"Shift duration:",\r
"Lasts h",\r
"permanent licence",\r
"Permanent licence ({0}): the program works without restrictions, all modules",\r
"The permanent backup has been saved to the Archive: {0}",\r
"Transfers",\r
"transactions",\r
"Transaction",\r
"TRANSAKCIJA",\r
"Statement transaction",\r
"The transaction is a collection from a customer. It is cancelled in Collection, by deleting the payment.",\r
"The transaction has been recorded in the bank register.",\r
"The transaction has already been posted. It was not posted again.",\r
"The transaction was returned to \\"waiting\\" (the payment did not exist).",\r
"The transaction has no fingerprint.",\r
"The transaction has not been posted.",\r
"The transaction was not recorded.",\r
"Transactions",\r
"BANK TRANSACTIONS",\r
"Statement transactions",\r
"transactions on accounts of other companies are not posted",\r
"Transactions of type \\"takings\\" from statements are linked to daily takings by the cash amount (one day or consecutive days of one store)",\r
"translate(-50%,-50%)",\r
"Required qualification (education level)",\r
"The required qualification is expressed as a level according to {0}: {1}. For each position, one level or a range of at most two levels is set. An employee's minimum salary is determined according to the qualification level the position requires ({2}: up to level V {3} EUR, level VI and above {4} EUR net), not according to the qualification the employee holds. Work experience is counted in the same or similar tasks.",\r
"The requested shift has not been selected.",\r
"Searching…",\r
"Search (invoice number, store…)",\r
"Search item",\r
"Search register item (name, code, barcode)",\r
"needs a choice (no VAT per rates or the day already has takings)",\r
"It demands payment for items that are not in the records (supplier error, an invoice not entered, or attempted fraud). These items are not paid before a physical check of invoices and costing sheets. Details: Suppliers → Disputed items.",\r
"Search the network",\r
"Requested by",\r
"Requested by",\r
"Employees needed",\r
"Requisition {0}: {1} → {2} ({3})",\r
"Third",\r
"Third shift",\r
"Current version",\r
"Current data source for",\r
"Current PIN",\r
"Currently:",\r
"trade ledger",\r
"Trade ledger",\r
"Trade ledger — 5 years (Rulebook on records of purchase and sale of goods 34/12, Art. 16)",\r
"Trade ledger {0} {1}: the opening balance is provisional (year {2} is not closed).",\r
"Trade ledger per the Rulebook: debit, credit, stocktake, year-end closing",\r
"The trade ledger for {0}. is already closed.",\r
"The trade ledger for {0} is closed and prepared for certification. The month cannot be opened without cancelling the ledger closure (Trade ledger → \\"Cancel closure {1}.\\").",\r
"The trade ledger for {0} is closed. The payment cannot be changed.",\r
"Trade ledgers (Excel and PDF)",\r
"Retail (stores, kiosks, shops)",\r
"Wholesale = 50%",\r
"Expense",\r
"TROSAK",\r
"Expense",\r
"Expense (full cost immediately)",\r
"Depreciation expense {0} (OA form)",\r
"Expense without a type (or a type without an account)",\r
"Company cost",\r
"The cost is dated in a locked month. Deletion is not possible.",\r
"A cost that can be directly attributed to acquiring goods (transport, forwarding, customs, transport insurance) goes into the purchase value of the goods",\r
"Cost per line",\r
"The cost does not exist.",\r
"The cost is not an open estimate.",\r
"The cost is not a closed estimate.",\r
"Employer's cost",\r
"labour cost in the period",\r
"TROSKOVA",\r
"Expenses",\r
"TROSKOVI",\r
"Costs \\"into purchase cost\\" amount to",\r
"Expenses (Type = TROSAK) grouped by type and store. The type is chosen when entering on the \\"Procurement and expenses\\" tab.",\r
"Costs % (empty = standard)",\r
"Depreciation costs",\r
"DEPRECIATION AND PROVISIONS COSTS",\r
"Depreciation costs shown in the income statement",\r
"Depreciation costs recognised for tax purposes (form OA)",\r
"Membership fee costs",\r
"Membership fee costs (PKCG)",\r
"Contribution costs",\r
"Fuel and energy costs",\r
"Research costs",\r
"Costs not incurred for the purpose of carrying out business activities",\r
"Costs that cannot be documented",\r
"MATERIAL COSTS",\r
"Material costs and cost of goods sold above the amount under the weighted average / FIFO method",\r
"Cost of materials and services",\r
"Cost of production materials",\r
"Costs of fees to members of the management and supervisory board",\r
"Costs of fees to natural persons under other contracts",\r
"Costs of fees under copyright contracts",\r
"Costs of fees under service contracts",\r
"Costs of fees under contracts for temporary and occasional work",\r
"Costs of non-production services",\r
"Non-production services costs (accounting, lawyer, IT)",\r
"Non-production services and entertainment costs",\r
"Costs of other long-term provisions",\r
"Costs of other services",\r
"Other services costs (utilities, security, phone…)",\r
"Cost of other (overhead) materials",\r
"Period costs",\r
"Payment transaction costs",\r
"Payment transaction costs (bank fees, POS commission)",\r
"Tax costs",\r
"Costs of taxes and contributions borne by the employer",\r
"Costs of taxes and contributions on earnings and earnings compensation borne by the employer",\r
"Costs of taxes charged to expenses",\r
"Insurance premium costs",\r
"Insurance premium and payment transaction costs",\r
"Costs of products and services sold",\r
"Production services costs",\r
"PRODUCTION SERVICES COSTS",\r
"Development costs that are not capitalised",\r
"Advertising and promotion costs",\r
"Entertainment costs",\r
"Entertainment costs above 1 % of total income",\r
"Costs of provisions for the warranty period",\r
"Costs of provisions for employee benefits and other employee entitlements",\r
"Costs of provisions for restoring natural resources",\r
"Costs of provisions for restructuring costs",\r
"Costs of provisions for retained guarantees and deposits",\r
"Overhead materials costs",\r
"Trade fair costs",\r
"Trade fair, advertising and promotion costs",\r
"Costs have been allocated to lines",\r
"Transport services costs",\r
"Transport and maintenance services costs",\r
"Costs of services for producing output",\r
"Maintenance services costs",\r
"Rent costs",\r
"Payroll costs (Payroll module)",\r
"Salary and benefit costs",\r
"Salary and salary compensation costs (gross)",\r
"EARNINGS COSTS, EARNINGS COMPENSATION AND OTHER PERSONNEL EXPENSES",\r
"Three-letter code, e.g. DEU.",\r
"Three-letter code, e.g. MNE.",\r
"Three-letter code.",\r
"Pregnancy sick leave",\r
"Pregnancy sick leave (pregnancy maintenance) (70%)",\r
"that year",\r
"Tourist org.",\r
"Tourist villa",\r
"Tourist apartments",\r
"Turkish",\r
"Tuzi",\r
"at",\r
"No fiscal receipt QR code was found in \\"{0}\\". Enter the receipt manually (New costing sheet → Manual entry).",\r
"No QR code was found in \\"{0}\\". A receipt without a QR code is entered via \\"Manual invoice entry (no QR)\\".",\r
"in 7 days",\r
"In promotion (",\r
"This company's Bank already has {0} statements of that account. They will be removed from this company.",\r
"the database has HR documents",\r
"the database contains cash register data",\r
"the database has goods transfers",\r
"the database has shift schedules",\r
"The database contains recorded customs declarations — the register stays enabled as long as there are any.",\r
"Declarations have been entered in the database, so the register stays switched on.",\r
"No header row with the column \\"Konto\\" was found in the Excel file.",\r
"The column \\"Utvrđena maksimalna cijena\\" was not found in the file.",\r
"No header with the columns Datum, Objekat and UkupnoSaPDV was found in the file (first row of the table). Column names must match the template.",\r
"No header with the columns Name (or Code / Barcode) and Quantity was found in the file.",\r
"In the drawer",\r
"in drawers · open shifts",\r
"The folder contains a snapshot of company \\"{0}\\", but \\"{1}\\" is open. On the computer, open company \\"{2}\\" and run \\"Publish database for phones\\".",\r
"There are no postings in the general ledger for this customer (invoices are posted with \\"Post month\\").",\r
"There are no revenues or expenses in the year. Closing is not possible.",\r
"In group:",\r
"In IOPPD for",\r
"There are no costing sheets for the selected stores in the selected period.",\r
"There are no working days in the selected period.",\r
"The selection contains no costing sheets whose margin can be changed.",\r
"No row with an established price was found in the report.",\r
"In the books they are still part of daily takings (KIF as retail). Receipt on",\r
"In Accounting",\r
"Enter NE in the \\"Aktivan\\" column. The import does not delete items, barcodes or prices that are absent from the file.",\r
"Being entered",\r
"To warehouse",\r
"There is no text in memory. Copy the text from the interim report image in Photos first.",\r
"Only a basis without compensation was set for the month (070 — unpaid leave), but gross {0} EUR was calculated. The employee's basis periods or the payroll items need to be checked.",\r
"into purchase price",\r
"Include in purchase cost?",\r
"being charged",\r
"{0} numbers are missing from the sequence: {1}{2}. A gap occurs when a numbered costing sheet is deleted.",\r
"In house",\r
"Only hours from confirmed weeks are included in the payroll.\\n\\nUnconfirmed weeks ({0}):\\n{1}{2}\\n\\nHours from those weeks are not included in the payroll. Continue?",\r
"in progress",\r
"within the norm, no VAT is paid.",\r
"there is no payee in the description; exactly one open invoice has this amount (check needed)",\r
"The main computer automatically saves a copy of the database to this folder every day (recommended: a folder in Google Drive); a manual copy is also made here. Copies are kept outside the computer, so the database is preserved even if the disk fails.",\r
"There are no documents this year.",\r
"No local server was found in this network. A server on another subnet is connected via a link or an address.",\r
"There is no schedule in this week",\r
"There are no payouts under work contracts in this month.",\r
"No tax calculated this month.",\r
"There are no reception shift closings in this month.",\r
"There is no lease in this month. A lessor (contract) is added with the \\"New lessor\\" button.",\r
"The rent was not paid in this month — the lessor is not shown in IOPPD",\r
"The fine has already been deducted in this payroll.",\r
"In this period the price list requires at least {0} nights.",\r
"There are no daily takings for the outlet in the period.",\r
"No imported sales or daily takings in the period.",\r
"There are item-level sales in the period (cash register or file import). The stocktake-based calculation is then a control: the \\"Sold\\" column includes the recorded sales.",\r
"There is no leave in the plan for this year.",\r
"The signature is missing from the message.",\r
"The request itself is missing from the message.",\r
"There are no unprocessed statements in Mail since that date. First run \\"Check mail\\".",\r
"Attached is invoice {0}.",\r
"Attached is the reply to the statement of open items.",\r
"Attached is delivery note {0}.",\r
"Attached is quote {0}.",\r
"in preparation",\r
"In preparation",\r
"Only a local SMTP server is allowed in test mode.",\r
"there are no Manager files in the exchange",\r
"There are no Manager files in the exchange (manager_",\r
"There are no Manager files in the exchange.",\r
"There are no packages of other companies in the exchange.",\r
"The exchange has packages of other companies, but none of their records are in this database.",\r
"the exchange already contains prices of this company ({0}); the initial price list is not created",\r
"OK",\r
"OK",\r
"in queue: {0}",\r
"In the week from {0} there is no schedule to repeat.",\r
"The certificate has no public part (X.509).",\r
"The certificate has no private key — a .pfx/.p12 with a key is needed, not .cer.",\r
"The company PIB was not found in the certificate (",\r
"Temporary code markers remain in the code list. Switching to the new codes is not possible.",\r
"In shift: {0}",\r
"There is no shift in that cell. Select a cell with a shift.",\r
"There is no schedule for this store in that week. Confirmation is not possible.",\r
"in progress",\r
"in progress (Manager)",\r
"in progress on the main computer",\r
"Seniority bonus is included in the entered salary",\r
"in use",\r
"In use",\r
"in closed calculations",\r
"u.MarketID",\r
"Equity interests in other legal entities and other securities measured at fair value through the balance sheet",\r
"Equity interests in associates",\r
"Equity interests in subsidiaries",\r
"School excursion participant",\r
"Takes part in stocktakes and is responsible for the warehouse stock matching the records.",\r
"Takes part in stocktakes and in preparing orders.",\r
"Load file…",\r
"Load from Drive…",\r
"Load licence from file…",\r
"Loaded {0} MB (costing sheets: {1}). Reports are created from the data from the computer.",\r
"Rows loaded from {0}: {1}.",\r
"Loaded",\r
"The card sent by the supplier (Excel or CSV) or a table copied from a PDF/e-mail is loaded. The program automatically recognises the header and columns (formats differ from supplier to supplier), then compares the items with the invoices and payments in the records and shows",\r
"Loading guests…",\r
"Loading cash registers from the server",\r
"loading failed: {0}",\r
"Loading account…",\r
"Loading from the server…",\r
"Loading…",\r
"Serves customers politely, provides information on goods and prices and resolves minor complaints.",\r
"Share of RUC %",\r
"Share in the company's total VAT",\r
"Stakes in limited liability companies",\r
"Shares in a limited liability company",\r
"Textbooks and school supplies",\r
"udzbenik; sveska; plastelin; kreda; bojice; vodene boje; tempere; sestar; lenjir; trougao; uglomjer; grafitna olovka",\r
"UG",\r
"turn off",\r
"hospitality",\r
"Hospitality — alcohol",\r
"Hospitality — coffee",\r
"Hospitality — other food and drinks",\r
"Hospitality — sugary drinks",\r
"Hospitality (cafés, restaurants)",\r
"A probationary period of {0} month from the start date is agreed ({2}). During the probationary period the Employee has all rights and obligations arising from the employment relationship, and the Employer assesses his or her work and professional abilities according to the job description (accuracy and tidiness of work, attitude towards customers and colleagues, compliance with the schedule and cash handling). If the Employer does not adopt an individual act by the end of the probationary period determining that the Employee did not meet the requirements, the Employee is considered to have met them; for an Employee who did not meet the requirements, the employment relationship ends on the day the probationary period expires. During the probationary period either party may terminate the contract with a notice period of {3} days. A probationary period cannot be agreed again for the same position.",\r
"Contract no.",\r
"The contract is fixed-term until {0}. It ends precisely on that day: termination before then is a dismissal or agreement, and if the employee kept working after expiry, they are deemed employed for an indefinite period ({1}).",\r
"The contract is drawn up in {0} identical copies: one for the Employee (handed over on the day of starting work, {2}), one for the personnel records and one kept at the outlet where the Employee works, together with the insurance registration ({3}). The Employee confirms that before signing he or she was familiarized with the job classification act, the Rulebook on Annual Leave, the Rulebook on Work Discipline, the business secret act, the notice on the prohibition of mobbing at work and the occupational safety measures.",\r
"Service contract",\r
"Contract for work — {0}{1}",\r
"Service contract — standardised costs reducing the base (%)",\r
"Service contract — PIO borne by the contractor on the base (%)",\r
"Service contract — income tax on the base (%)",\r
"Service contract (IOPPD 047/048/079)",\r
"Service contract (IOPPD 047/048/079):",\r
"Contract for services {0}{1}",\r
"Service contract: contractor's PIO contribution",\r
"Service contract: liability to the contractor (net)",\r
"Service contract: withholding tax and surtax",\r
"Service contract: expense (gross)",\r
"employment contract",\r
"Employment contract",\r
"Contract valid until",\r
"Contract valid from",\r
"The contracted monthly salary is {0} gross. The salary is paid regularly and the employee has no deductions on the basis of loans from the Employer, other than statutory ones.",\r
"Agreed",\r
"The contracted amount is",\r
"Contracted",\r
"Contracts",\r
"Contracts and termination",\r
"Fixed-term contracts expiring within the next 45 days or already expired: {0}. A decision is needed: new contract, annex or termination on expiry.",\r
"Fixed-term contracts with the same employee may last at most {0} months in total ({1}; a break shorter than {2} days is not counted), and from {3} to {4} it is {5} months. An employee who continues working after expiry is in permanent employment ({6}). Exceptions: replacing an absent employee, seasonal work (up to {7} months a year), a project.",\r
"Contracts, annual leave, discipline, decisions",\r
"The built-in rules are reset to the content shipped with the program. Rules added by the user remain. Restore the built-in rules?",\r
"Built-in rules restored: {0}.",\r
"built-in version",\r
"A built-in rule cannot be deleted. The rule can be disabled.",\r
"UID, Vrsta, Vrijeme, Uredjaj, UredjajID, Ko, Parametri, Stanje, Ishod, VrijemeIshoda, Pokusaj, (COALESCE(Sadrzaj,'')<>'') AS ImaSadrzaj",\r
"Calc. VAT {0} (opening balance by items)",\r
"Calc. VAT {0} (average rate {1} %)",\r
"Calculated margin (RUC) in retail",\r
"Calculated margin in wholesale",\r
"Calculated margin (RUC)",\r
"Calculated RUC 134001 — KALK+OTP vouchers vs Accounts 134 (± difference costing/invoice)",\r
"Calculated VAT",\r
"Calculated VAT 134002 — KALK+OTP vouchers vs Accounts 134",\r
"Calculated VAT on shortage",\r
"Calculated VAT on surplus",\r
"Calculated VAT contained in the discount",\r
"VAT included in the costing in retail",\r
"Calculated VAT in retail",\r
"is discontinued",\r
"Discontinued outlet prices",\r
"Removing the barcode from this item",\r
"Removal from the shift",\r
"Remove from the list (attachment not needed)",\r
"Remove period (the previous scheme applies)",\r
"Removing the holiday",\r
"Removing the shift from the entry",\r
"Removing the link of point of sale \\"{0}\\" with the store",\r
"the Manager is enabled (reads the shift schedule)",\r
"enabled",\r
"When switched on, the rules suggest 15 % for food and drink served on the premises, except alcohol, drinks with added sugar and coffee (21 %). The rules are reviewed and changed in Register price list → VAT; existing rates are not changed without review.",\r
"enabled",\r
"Enabled",\r
"Enabled: the cash register prints a slip that the guest signs.",\r
"Enabled: cash registers in the restaurant and bar record consumption to the room account.",\r
"Enabled: registration with the local tourist organisation is also tracked.",\r
"Enabled: a reservation without check-in the day after arrival becomes \\"No-show\\".",\r
"Enabled: the tax is not calculated per guest.",\r
"Enabled: the tax is taxed at the accommodation rate.",\r
"turn on",\r
"Enable",\r
"Select all",\r
"Enable fiscalization in production? Every issued receipt goes to the Tax Administration and cannot be deleted.",\r
"Activation",\r
"When this option is turned on, the program sends to the shared barcode catalogue: the barcode, item name, unit of measure and VAT rate. Prices, quantities, suppliers and company data are not sent. The data sent is used by all users of the program to suggest a name when an unknown barcode is entered. The option can be turned off at any time; data sent earlier remains in the catalogue.",\r
"Switch on when the company imports goods itself and receives customs declarations; the VAT from the declaration goes into PR-PDV field 20. A company that buys from domestic suppliers does not need this.",\r
"Remove",\r
"Remove item from opening stock",\r
"Remove barcode {0}",\r
"Remove from the medicines code list",\r
"Remove cash register",\r
"Remove PIN",\r
"Remove row",\r
"Remove image",\r
"Remove link",\r
"Remove the company's {0}?{1}",\r
"Remove the statement from the register?{0}",\r
"Remove holiday \\"{0}\\" ({1})?{2}",\r
"Remove the seniority bonus scheme from {0}?",\r
"Remove the link between the outlet \\"{0}\\" and the store \\"{1}\\"?\\n\\nPrices already entered for the store remain. The next import will look for the outlet again by name.",\r
"Remove the own working hours for {0}?",\r
"removed",\r
"removed",\r
"Removed",\r
"removed lines",\r
"Removed items",\r
"Removed items",\r
"Removed from payroll (employment ended / inactive): {0}.",\r
"Adjusted: incentive {0} EUR gross → total payout exactly {1} EUR.",\r
"Ukrainian",\r
"TOTAL OUTPUT VAT (16+17+18+21)",\r
"Total output VAT (24)",\r
"Total amount",\r
"Total amount of tax (51a + 51b + 51c)",\r
"UKUPAN POREZ",\r
"UKUPAN POREZ was not read; it was derived from the sum of the rates (possible cash register rounding deviation ±0.01).",\r
"UKUPAN POREZ: the tax read is higher than 21 % of the base (the base and tax may be swapped). Verification against the image is required.",\r
"Total revenue",\r
"Total revenue {0}",\r
"Total cost",\r
"TOTAL INPUT VAT — input tax (19+20+21+22)",\r
"Total assets",\r
"Total assets 31.12.{0}",\r
"total depreciation",\r
"TOTAL TAX LIABILITY (57 − 58) > 0",\r
"Total deductions ({0} EUR) exceed {1} % of salary ({2} EUR, {3}). The fine must be spread over several months or the employee's written consent obtained.",\r
"Total amounts per supplier for the period",\r
"Total amounts per supplier for the period (basis as in KPR — by date of receipt). The \\"Incl. VAT\\" total = control of the incoming invoices ledger.",\r
"Total capital gains of the current year",\r
"Total capital losses of the current year",\r
"TOTAL EXPENSES",\r
"total",\r
"Total",\r
"TOTAL",\r
"TOTAL · difference",\r
"TOTAL · balance",\r
"Total (EUR)",\r
"total (IOS without items)",\r
"total ≠ rates ({0})",\r
"Total excl. VAT",\r
"Total EXCL. VAT",\r
"TOTAL excl. VAT",\r
"Total debit",\r
"Total changes",\r
"Total costing sheets:",\r
"TOTAL OUR LIABILITY",\r
"Total unpaid",\r
"Total deductions:",\r
"Total open",\r
"TOTAL OPEN",\r
"Total VAT",\r
"Total credit",\r
"Total counted:",\r
"Total credit",\r
"Total incl. VAT",\r
"Total INCL. VAT",\r
"Total hours",\r
"Total disputed: {0} EUR. Until reconciled, we do not consider these items due for payment.",\r
"The total duration of annual leave on all grounds is at most {0} working days, and never less than the statutory minimum for the employee's category.",\r
"Total cost:",\r
"Total entered:",\r
"Total debit",\r
"Total: purchase",\r
"UkupnoSaPDV",\r
"ul",\r
"Ul. Filipa Kovačevića bb, Zgrada Katarina 17, Budva",\r
"Investments in third-party property, plant and equipment",\r
"Investments in third-party premises (leased units)",\r
"Development costs",\r
"Input",\r
"Receipt — costing sheet",\r
"Inflow (invoices incl. VAT)",\r
"Receipt (qty)",\r
"Receipt / expense",\r
"Receipt excl. VAT",\r
"receipts to account 134 (purchase value)",\r
"Goods receipt (costing sheet)",\r
"Goods receipt 134000 (retail incl. VAT) — KALK+OTP vouchers vs Accounts 134",\r
"Wholesale goods receipt {0} (wholesale excl. VAT) — KALK+OTP vouchers vs costing sheets of wholesale outlets",\r
"Goods receipt: costing sheet from the QR code of the supplier's fiscal receipt",\r
"Receipt incl. VAT",\r
"Inputs incl. VAT (EUR)",\r
"Receipts",\r
"Entry into Montenegro",\r
"enters",\r
"enters {0}",\r
"Receipts and other movements (±)",\r
"receipts and write-offs",\r
"Receipts by item",\r
"RECEIPTS BY ITEM (purchases — without sales and stock)",\r
"is included together with the salary — one return per month.",\r
"Input",\r
"Incoming documents with a rate other than 21 / 15 / 7 / 0 % (",\r
"Input string:",\r
"Input VAT",\r
"Input VAT (deductible)",\r
"INPUT VAT (deductible)",\r
"Input VAT (from invoices)",\r
"Input VAT {0} %",\r
"Input VAT 27xx — KALK+OS+ZAV vouchers vs PR-PDV field 19",\r
"Input VAT without right to deduction",\r
"Input VAT without the right to deduction (purchases marked \\"no right to deduction\\" + manual addition)",\r
"Input VAT without right of deduction (PR-PDV field 26)",\r
"Input VAT without right of deduction (PR-PDV field 26) — to expense",\r
"Input VAT on domestic turnover of goods and services",\r
"Input VAT on domestic purchases of goods and services (supplier invoices + equipment/expenses + incidental costs)",\r
"Input VAT with right to deduction (25−26)",\r
"Input VAT with right to deduction (27)",\r
"Ulcinj",\r
"ULCINJ",\r
"street and number, town",\r
"Oil",\r
"Bottled edible oil",\r
"Role",\r
"Role (key)",\r
"Role of this computer",\r
"The role of this computer has not been selected (Connection → \\"Role of this computer\\"). Until a role is selected, this computer does not publish the database.",\r
"The role of this computer has not been selected.",\r
"Role of this device",\r
"computer role per order #{0}: {1} → {2}",\r
"The computer role can only be changed on a computer (Windows). A phone is always secondary.",\r
"ulosci; ulozak; tamponi; tampon",\r
"Contributions",\r
"Reduced amount up to",\r
"Reduced amount up to (years)",\r
"Reduction (%)",\r
"Reduction of output VAT {0} %",\r
"Reduction of output VAT {0} % (notification {1})",\r
"Reduction of cost of goods sold for the realised RUC — {0}",\r
"Reduction for guests up to the age limit above.",\r
"Reduction: dividends and profit shares of resident legal entities + liquidation remainder (a+b)",\r
"Reduction: between 0 and 100 %",\r
"Reduction: tax on profit earned in insufficiently developed municipalities",\r
"Reduction: reinvestment in scientific research / innovative projects",\r
"Reduction: reinvestment in agricultural projects / entities (a+b)",\r
"Reduction: investments in start-ups, scientific research institutions, Innovation Fund (a+b+c)",\r
"Reduced",\r
"UNA",\r
"Accrued costs",\r
"Prepaid expenses",\r
"the entered salary, so the payout is slightly higher than the entered amount.",\r
"The entered amount is",\r
"the entered amounts are net (in hand)",\r
"Entered",\r
"{0} payments entered · {1} EUR",\r
"Entered {0} payments in the amount of {1} EUR. {2}{3}Overview: \\"Open items\\".",\r
"Entered today",\r
"{0} public holiday days were entered, but the year has {1} holidays.",\r
"{0} days were entered, but the month has {1}.",\r
"{0} Sundays were entered, but the month has {1}.",\r
"{0} working days were entered, so the employee has no weekly rest of 24 h (at most {1} days in this month; Labour Law, Art. 66).",\r
"entered as gross",\r
"entered as net",\r
"Enter barcodes",\r
"Enter another",\r
"Enter the interim report from the register",\r
"Enter {0} payments with a total amount of {1} EUR?",\r
"Entered by: {0}, {1}",\r
"Universal Capital Bank",\r
"entry",\r
"Entry",\r
"entering days; hours (regular, overtime, night, Sunday, holiday) are derived from the days",\r
"Entering IQOS amounts per employee (gross or net): contributions, tax on the sum with the salary and surtax charged to the employer",\r
"Entry is possible without a camera: after closing this screen, paste the QR code text into the field.",\r
"Property entry",\r
"Enter daily takings",\r
"Takings entry (Z report)",\r
"Payment entry",\r
"Entry: manually from the Z report, by importing a table from the cash register (CSV/Excel) or from scanned reports.",\r
"Entered once, from the accountant's trial balance as of 31.12. of the previous year (Excel import: columns Konto, Naziv, Duguje, Potražuje or Saldo, PIB, Market), manually, or proposed from program data (goods by store, debt to suppliers). Debit must equal credit; the difference is capital/result of previous years.",\r
"Enters incoming invoices and prepares costing sheets for retail prices.",\r
"UP",\r
"Remembered {0} new payee→supplier links for the next statements.",\r
"paired",\r
"Paired",\r
"Paired as",\r
"Paired {0}{1}",\r
"Paired devices are not disabled.",\r
"Pair",\r
"Pair with a new code…",\r
"Pairing with the server",\r
"Pairing…",\r
"UPC-A",\r
"writing is in progress",\r
"Not recorded. The same payment already exists in the bank register.",\r
"The notice entry has been cancelled.",\r
"Saving property…",\r
"recording the violation (the procedure is initiated within",\r
"The entry is made only after confirmation.",\r
"Saving rooms…",\r
"Writing to the inbox folder was interrupted.",\r
"writing to the code list",\r
"Writing to the code list",\r
"Entry in trade ledgers:",\r
"Record a payment or manual calculation",\r
"entered",\r
"Entered",\r
"saved — a new one replaces the old one",\r
"Recorded opening balances",\r
"Recorded terminations of employment",\r
"prices entered",\r
"Prices entered",\r
"entered \\"Total VAT\\" {0} is not the sum of VAT by rates {1}",\r
"Entered {0} days after the invoice ({1}). Deadline: {2} (Rulebook 34/12, Art. {3}).",\r
"Entered {0} h: regular {1}, overtime {2}; supplements: night {3} h, Sunday {4} h, holiday {5} h.{6}",\r
"{0} records written.",\r
"Prices entered: {0}{1}{2}{3}.",\r
"Guests entered: {0} of {1}.{2}",\r
"entered by mistake",\r
"The other computer's state has been entered.",\r
"fields entered: {0}",\r
"Entered for this month",\r
"Recorded.",\r
"Entered by: {0} · {1}{2}{3}",\r
"Enter the responsible person.",\r
"Enter the general price or a location price, or mark the item as inactive.",\r
"Enter this change from a computer on an old version?\\n\\nThe change is also sent to the other computers.",\r
"Enter this change into the salaries for: {0}?\\n\\nThe compensation is calculated instead of regular work for those days, and the incentive is not calculated for those days. A month that has already been paid must be closed first.\\n\\nCancel: the salaries are not changed (entry for an individual month is possible in the employee calculation).",\r
"Enter the return of all goods from the recipient?",\r
"Record",\r
"Enter item",\r
"enter the termination date on the employee (excluded from payroll from the following month)",\r
"Record the response (today)",\r
"Enter as new goods",\r
"Enter as bank account",\r
"Record notice",\r
"Enter company data",\r
"Enter return (Return column)",\r
"Record company account",\r
"Enter reservation",\r
"Enter in outlet",\r
"Add to plan and create decision",\r
"Enter in register",\r
"Enter the price per night.",\r
"Enter the holiday date.",\r
"Enter the guest's first and last name.",\r
"Enter the name of the reservation holder.",\r
"Enter the same domain here and save. The server creates the certificate (https) itself on first opening — up to 1 minute.",\r
"Enter the advance amount.",\r
"Enter the property name.",\r
"Enter the holiday name.",\r
"Enter the name of each room type.",\r
"Enter the service description.",\r
"Enter the room codes.",\r
"Enter the reason.",\r
"Enter: {0}.",\r
"Writing the received data…",\r
"Writing…",\r
"Enter a number greater than or equal to zero.",\r
"Enter DA or NE.",\r
"Entered on the tax item without VAT.",\r
"Enter osnovna or doplatna (empty = the medicine is not on the list).",\r
"Enter otc or rx.",\r
"Inquiry",\r
"Inquiry (does not occupy the room)",\r
"Inquiries",\r
"Inquiries, confirmed, in house",\r
"UPL",\r
"The paid advance is returned from the room account (Return advance).",\r
"Paid",\r
"paid to suppliers this month ({0} payments)",\r
"paid to suppliers this week ({0} payments of {1})",\r
"paid to the municipality",\r
"It is paid to the single account for tax and contributions {0}.",\r
"payment received",\r
"Payment",\r
"UPLATA",\r
"The payment of {0} EUR is larger than the cash takings of {1} EUR ({2}).{3} Does the payment also cover earlier days?",\r
"The payment of {0} EUR covers fewer days than selected (cash without the last day is already {1} EUR). Select fewer takings records.",\r
"Payment in = cash enters the cash desk (debit 2430); payout = cash leaves (credit 2430). Contra account: supplier 4330, expense 5xxx, employee 2210, bank account 2410 (the deposit of daily takings is posted automatically from the statement).",\r
"Advance payment received",\r
"Advance payment received (bank statement)",\r
"Advance payment and advance receipt",\r
"Advance payment and advance receipt in one step",\r
"The payment was deleted.",\r
"Payment entered: {0} EUR, {1}",\r
"The payment has been recorded.",\r
"Customer payment",\r
"Customer payment (free amount)",\r
"The payment cannot be before the day of the takings.",\r
"The payment does not exist.",\r
"The payment was not entered (cash ≥ 10,000 €).",\r
"The payment was not entered. The amount needs to be corrected, or the payment entered separately for each day.",\r
"payment is not linked to an invoice",\r
"The payment of {0} ({1} EUR) is linked to {2}.",\r
"The payment of {0} cannot be for the takings of {1} (after the payment).",\r
"Payment to the municipality",\r
"Takings deposit",\r
"Deposit of daily takings (cash)",\r
"Takings deposit {0}{1}",\r
"The takings payment from the statement does not exist (or is not of the type \\"takings\\").",\r
"VAT payment",\r
"VAT payment {0}/{1} (amount = PR-PDV field 28)",\r
"Tax payment (account confirmed)",\r
"Payment of taxes and contributions {0}/{1} (in proportion to the period's liabilities)",\r
"Payment of tax and contributions:",\r
"Payment of tax and PIO:",\r
"Corporate income tax payment for {0} (amount = PD return)",\r
"Tax payment:",\r
"The payment belongs to another customer.",\r
"Surtax payment — {0}",\r
"Surtax payment (",\r
"A payment with the same details already exists ({1}): {2}, {3}, {4} EUR, \\"{5}\\". Enter as a new payment?",\r
"Payments",\r
"Payments of this customer",\r
"Takings payments from statements: {0} transactions of type \\"takings\\", linked {1} ({2} daily takings).{3}{4}",\r
"Tax payments awaiting account confirmation (",\r
"Tax payments awaiting account confirmation: {0} ({1}), not posted",\r
"Payments from statements without a match (",\r
"Used",\r
"warnings ·",\r
"Warnings:\\n{0}{1}\\n\\nClose the book despite the warnings?",\r
"Warnings: {0}",\r
"Warnings: {0} (list below).",\r
"warning",\r
"Warning",\r
"Warning delivered",\r
"Warning: {0}",\r
"Warning: {0} The costing sheet was created in the current month.",\r
"WARNING: cash ≥ 10.000 € (linked payments)",\r
"WARNING: cash ≥ 10,000 € (linked payments)",\r
"Warning: the costing sheet was created. {0}",\r
"Management",\r
"The Revenue Administration did not accept the receipt: {0}",\r
"Referred for spa or climatic treatment",\r
"Instructions:",\r
"done",\r
"Done by",\r
"Device",\r
"Device \\"{0}\\" has been disabled on the server.",\r
"Device \\"{0}\\" was already disabled.",\r
"Device (subtotal)",\r
"The device has been paired as \\"{0}\\" ({1}, PIB {2}). {3}{4}",\r
"The device has been paired as \\"{0}\\" ({1}, PIB {2}). The first exchange is in progress…",\r
"The device is paired with the company",\r
"The device is paired for the company \\"{0}\\" (PIB {1}), but the company with PIB {2} is open. The data was not downloaded.",\r
"A device that has not sent packages for a long time is switched off, has no internet or is not connected to the server. The same computer may appear under several labels; the row with the latest time applies.",\r
"The device is not paired with the server (Connecting → Server).",\r
"The device is not paired with the server. Pair it using a code (Connection → Server).",\r
"The device immediately loses its connection to the server (lost or stolen phone, device no longer in use).",\r
"device",\r
"Company devices",\r
"Devices that exchange this company's data",\r
"Manager devices",\r
"Devices exchange",\r
"edit",\r
"Edit",\r
"Edit the list of job positions (add, rename, disable)",\r
"Device",\r
"The delivery has been recorded.",\r
"delivery of the written warning within",\r
"Delivered",\r
"reconciled with UKUPNO",\r
"Reconcile register",\r
"working conditions (shifts, Sundays)",\r
"Working conditions (shifts)",\r
"conditional termination of employment",\r
"Conditional termination: a new serious violation within",\r
"Service",\r
"USLUGA",\r
"The service has been added to the room account.",\r
"Service from a foreign entity",\r
"The foreign entity's service has been entered. VAT goes to PR-PDV field 21.",\r
"Services",\r
"USLUGE",\r
"Services ({0}) cannot be greater than total daily takings ({1}). Services are part of the daily sales.",\r
"Services from the IRIS CORVINA cash register arrive automatically (items of the \\"Services\\" group)",\r
"Services of foreign persons",\r
"Services of foreign entities — VAT is calculated by the recipient, PR-PDV field 21",\r
"services of foreign entities (Import and foreign services) + manual",\r
"Tue",\r
"Tue",\r
"Tuesday",\r
"Tuesday",\r
"Determined tax liability (52 − 53 − 54 − 55 − 56)",\r
"Increases",\r
"Increases (working days)",\r
"Increases under the Labour Law / collective agreement: overtime and night work at least +40 %, work on a public holiday +150 %, sick leave 70 % (−30 %) of the average basic earnings of the 12 months before the sick leave began. The seniority bonus (scheme above) and the incentive for payout fitting are handled by the program itself.",\r
"Increase",\r
"Annual leave increase — {0}",\r
"The leave increase for {0} has been saved.",\r
"The increase for \\"{0}\\" is now {1} %.",\r
"Import {0} statements from mail?\\n\\nEach transaction is recorded once (duplicates are skipped).{1}",\r
"Imported",\r
"Price list imported from {0}: {1} items ({2} new), {3} general and {4} store prices, {5} stores ({6} new), {7} registers. Linked with the code list {9}; VAT rate corrected according to invoices for {10} items. Items that are not linked must be checked manually (✎ button).",\r
"Imported database",\r
"imported sales",\r
"Imported sales without a link to an item (",\r
"Sales imported from \\"{0}\\": {1} rows by day and item{3}{4}.",\r
"The imported sales were deleted.",\r
"IMPORTED SALES BY ITEM VS DAILY TAKINGS",\r
"Imported sales with VAT",\r
"Imported sales for the period {0}–{1} ({2}) only partially overlap with the file's period. Replacement is not possible; that import needs to be deleted, or a file for the same period imported.",\r
"Imported statements",\r
"Statements imported from mail:",\r
"imported",\r
"Imported {0} EUR, daily takings {1} EUR, difference {2} EUR. Item-level sales from the file of another vendor's cash register; the trade ledger is discharged by daily takings.",\r
"Imported {0} statements, {1} payments posted ({2} EUR), {3} awaiting review.",\r
"Imported {0} takings from \\"{1}\\"{2}{3}.",\r
"Imported {0} rows from \\"{1}\\"{2}{3}.",\r
"Rows imported:",\r
"Rows imported: {0}{1}.",\r
"Imported: {0}, {1} items, {2} EUR{4}. Processing continues, in queue: {5}.{6}",\r
"Imported: {0}, {1} items, {2} EUR{4}. Ready for the next QR code.{5}",\r
"Import",\r
"Import {0} {1}",\r
"Import {0} rows",\r
"Import database (.knj.db)",\r
"Import the item database…",\r
"Import price list",\r
"Import from Excel (trial balance)",\r
"Import as new company",\r
"Import row {0}",\r
"Import the code list from Excel…",\r
"Import all statements",\r
"Import with confirmation",\r
"Cash register view",\r
"Cash register view: {0} · {1}",\r
"Introduces new employees to the job and monitors their work; proposes rewards and disciplinary measures.",\r
"UVOZ",\r
"import — VAT per customs declaration (field 20)",\r
"Database import",\r
"Item database import — preview",\r
"Import of item database",\r
"Imports and foreign services",\r
"import from file",\r
"Import from file {0}{1}",\r
"Statement import",\r
"Import bank statement",\r
"Importing statements from mail into Bank…",\r
"Importing statements into Bank…",\r
"The import has been cancelled. Items restored: {0}{1}.",\r
"The import has been written",\r
"The import has been written ({0}). Backup before the import: {1}",\r
"Import finished: {0} statements ({1} already imported earlier), {2} new transactions, {3} duplicates skipped, {4} payments posted ({5} EUR), {6} awaiting review, {7} skipped, {8} errors.{9}",\r
"Import stock list (Excel/CSV)",\r
"Import a stock list into the opening stock (CSV / Excel)",\r
"The import does not exist.",\r
"Import failed: {0}",\r
"Daily takings import",\r
"Import takings from a file (CSV / Excel)",\r
"Import of test shifts is turned on. Test shifts of the cash register that are not yet takings (",\r
"Import sales from a file (Excel/CSV)",\r
"Import sales by item (CSV / Excel)",\r
"Import of goods",\r
"The import contains sales from the locked month {0}/{1}. Deletion is not possible.",\r
"Code list import",\r
"Code list import from Excel — preview",\r
"Importing the code list, undoing an import and linking sales locations are done on the company's main computer.",\r
"Import all statements from mail",\r
"Import all statements from mail for the whole year",\r
"Import…",\r
"also import trial shifts (for testing — receipts from trial mode are not fiscal)",\r
"being imported",\r
"by import (file period)",\r
"A point of sale is required together with the price.",\r
"The unit of measure of the net quantity is required together with the net quantity.",\r
"next to a shift = auxiliary employee.",\r
"The whole schedule was taken (no week is confirmed).",\r
"Only confirmed weeks were taken; {0} unconfirmed were not included.",\r
"V — master craftsman exam / higher qualification (VKV)",\r
"V. RESULT BEFORE TAX (242+243)",\r
"V. NON-CURRENT ASSETS HELD FOR SALE AND ASSETS OF DISCONTINUED OPERATIONS",\r
"V. Adjustment of income",\r
"v.Iznos AS Vezano,",\r
"scale / internal",\r
"Due date",\r
"Payment term (due)",\r
"Outside the file (untouched): items",\r
"Outside the fiscal receipt (separate line on the printout)",\r
"Out of service",\r
"offline",\r
"OFF-BALANCE-SHEET ASSETS",\r
"OFF-BALANCE-SHEET RECORDS",\r
"OFF-BALANCE-SHEET LIABILITIES",\r
"VAT",\r
"Valid until",\r
"valid until {0}",\r
"Applies when the price list has no period for that day.",\r
"Valid from",\r
"Valid from (empty = immediately)",\r
"The main computer's state applies.",\r
"This computer's state applies. It is sent to the other computers.",\r
"Applies to selected rows in which only the total with VAT is given; the base and VAT are calculated at the selected rate. Without a selection such rows remain unselected.",\r
"important",\r
"Web",\r
"Already added",\r
"Already recorded from an earlier statement: {0} (skipped).",\r
"Already recorded from another statement",\r
"already existed {0}",\r
"already exists",\r
"already counted:",\r
"already posted from an earlier statement",\r
"already in shift \\"{0}\\" ({1})",\r
"already entered",\r
"already imported",\r
"already imported (same business unit, date, Z number and register)",\r
"already imported earlier",\r
"already imported",\r
"Vegan",\r
"Vegetarian",\r
"wholesale",\r
"Wholesale",\r
"Wholesale: cost of goods sold (stock reduction)",\r
"Wholesale: revenue from wholesale of goods (invoices and outlet takings)",\r
"Wholesale: difference in cents between the costing sheet and the invoice",\r
"Wholesale: goods at wholesale price excl. VAT (costing sheet debit, sale credit)",\r
"Wholesale: calculated margin",\r
"wholesale excl. VAT",\r
"Database size",\r
"Size: {0}",\r
"large discount",\r
"large",\r
"VEO",\r
"Version",\r
"Version {0} has already been applied or is older than the installed one.",\r
"Version {0} did not work ({1}), so the program was rolled back to the previous version. Data was not touched.",\r
"version {0} did not start {1} times in a row",\r
"Version {0} does not start ({1}).",\r
"Version {0} is not downloaded automatically because a previous version was restored. It can be downloaded manually (\\"Check now\\").",\r
"Version {0} did not start ({1}).",\r
"Version {0} is applied at the next start of the program.{1}",\r
"version {0}: {1}",\r
"The item database file version ({0}) is not supported.",\r
"Version and update",\r
"cash register version",\r
"Running version",\r
"Program version",\r
"Version, licence and parts of the program for the open company.",\r
"link",\r
"Connection",\r
"The link of item {0} to the CInMED report has been removed. The entered prices stay.",\r
"Company connection",\r
"The connection was interrupted in the middle of the response ({0} of {1} bytes received).",\r
"The connection was interrupted in the middle of the response.",\r
"The connection was interrupted:",\r
"the link was removed after export",\r
"The link was removed.",\r
"The connection is shared also for: {0}. It is disconnected for those companies too.",\r
"cash register connection to the server",\r
"The link of point of sale \\"{0}\\" with the store does not exist on the main computer.",\r
"Connection with the Manager app",\r
"Connection to the fiscal service: {0}",\r
"Connection to the IRIS CORVINA server (click for details)",\r
"The server connection is available in the installed program (Windows or Android), not in the web version.",\r
"The connection to the server has been disconnected.",\r
"The connection to the server has been restored.",\r
"The connection to the server is unavailable. Trying again.",\r
"The connection to the server has not been set up.",\r
"A connection to the server exists only in the installed program. Cash registers are kept locally.",\r
"A server connection exists only in the installed program. The Manager connects via the database file.",\r
"The connection to the SMTP server was not established.",\r
"Linked payments",\r
"Linked payments",\r
"Re-linked {0} deleted items (new {1}), removed {2} dead code links",\r
"Linked to {0} items ({1} EUR), invoices closed: {2}.",\r
"Links the code the supplier uses for this item. When an invoice is imported, the system uses it to reliably recognise the item (instead of by name). It fills itself automatically on import.",\r
"Link",\r
"Link payment manually",\r
"Linked doc.",\r
"VI — undergraduate studies 180 ECTS (VŠS)",\r
"VI. GROSS RESULT OF OTHER COMPREHENSIVE INCOME ITEMS (250 to 257)",\r
"VI. Correction of income based on transfer prices",\r
"VI. RETAINED EARNINGS OR LOSS (112+113-114-115)",\r
"see accounts of group 41 (long-term liabilities).",\r
"VII-1 — undergraduate/specialist studies 240 ECTS (VSS)",\r
"VII-2 — master's",\r
"VII. DEFERRED TAX EXPENSES OR INCOME FOR THE PERIOD RELATED TO OTHER COMPREHENSIVE INCOME ITEMS",\r
"VII. Other corrections",\r
"VIII — doctorate",\r
"VIII. NET RESULT OF OTHER COMPREHENSIVE INCOME ITEMS (249+258)",\r
"VIII. Taxable profit",\r
"VIII. NON-CONTROLLING INTEREST",\r
"weekend",\r
"bank transfer",\r
"Bank transfer",\r
"VIRMAN",\r
"bank transfer {0}",\r
"Bank transfer from the cash register — {0}",\r
"Surplus",\r
"surplus",\r
"The excess over the non-taxable amount is \\"other income\\": tax 15 %, contributions by type, a separate row in the IOPPD return",\r
"Excess above the tax-free amount: basis code in IOPPD (013 per diems, 015 field work, 017 assistance, 018–020 severance pay, 024 jubilee…) and contributions (not paid on severance pay, assistance, jubilee payments, separate living, newborn child — ZDOSO Art. 18a)",\r
"Surplus per stocktake (stocktake {0} vs books {1})",\r
"Goods surplus per stocktake (purchase value)",\r
"excess: IOPPD",\r
"More",\r
"Several items have this barcode. Choose the item from the list.",\r
"More cash registers",\r
"More payment methods · bank transfer · note…",\r
"More than the approximate stock of the source",\r
"Overpaid",\r
"Overpaid (EUR)",\r
"more employees than positions: {0}",\r
"more employees hold this position than there are post slots — the fill-in will reconcile it",\r
"More actions",\r
"Surpluses",\r
"Material surpluses",\r
"Surpluses of materials and goods",\r
"Goods surpluses",\r
"Surpluses of output inventories",\r
"Visa",\r
"Visa valid until",\r
"probable duplicate",\r
"religious — company does not work (non-working for everyone)",\r
"religious — non-working for all",\r
"religious — absence on request",\r
"religious — working day; paid absence on request",\r
"religious (leave on request)",\r
"Religious holidays",\r
"religious holiday",\r
"Religious holiday — paid leave (on request)",\r
"The religious holiday is a working day for everyone.",\r
"VKV — highly skilled (V)",\r
"Fruit",\r
"Water",\r
"Conducts disciplinary proceedings and imposes measures in accordance with the law.",\r
"Keeps records of write-offs, goods transfers between outlets and stocktakes.",\r
"Keeps records of returnable packaging and of complaints to suppliers.",\r
"Keeps HR records: employment contracts, insurance registrations and deregistrations, decisions on leave and absences.",\r
"Handles correspondence with banks, the Tax Administration, the PIO Fund and the Employment Agency.",\r
"Looks after stocks of cleaning supplies and reports needs.",\r
"VOGUE",\r
"Driver — courier",\r
"Category B driving licence; medical certificate.",\r
"Category B driving licence; computer skills; communication skills.",\r
"VP",\r
"Returned to the guest",\r
"Reinstating the document (mark only; the employee's termination is not recorded again)",\r
"Restoring the copy failed: {0}",\r
"Return the store to the shared shifts from the code list",\r
"Reset to today's date",\r
"Rolling back to version {0} is not possible. The database has already been adapted to version {1}, and older versions cannot use it safely.",\r
"Restoring a previous version",\r
"Return to unprocessed",\r
"Restoring to a non-working holiday",\r
"Return to a working day for everyone (absence only on request)",\r
"The template from data has been restored (not saved).",\r
"A restored deleted receipt paid with a discount: the part of the amount that was not collected (Cash register 1.3.1+)",\r
"deleted receipt restored",\r
"Version {0} has been restored. It is applied at the next start of the program.",\r
"Loan repaid",\r
"Restored",\r
"Returned",\r
"refunded",\r
"Returned",\r
"Reverted to: {0}. Takes effect after the program restarts.",\r
"Lines restored: {0}{1}.{2}",\r
"restore",\r
"Restore",\r
"Return advance",\r
"revert to automatic",\r
"Restore previous version",\r
"Revert to saved",\r
"Return to service",\r
"Restore built-in rules",\r
"Restore version {0}? Data is preserved. The change takes effect when the program is restarted.",\r
"Value",\r
"Value (EUR)",\r
"Value (MPC)",\r
"Value (purch.)",\r
"Value (purchase)",\r
"The value {0} € excluding VAT is not greater than {1} €, so it is not a fixed asset (Depreciation Rulebook, Art. 2). It can be entered as an expense.",\r
"Value excluding VAT",\r
"Value of delivery: excl. VAT",\r
"The value is greater than {0} €. Equipment with a useful life longer than a year is a fixed asset, not an expense (Depreciation Rulebook, Art. 2).\\n\\nEnter it as an expense anyway?",\r
"Value at MPC",\r
"Value of difference",\r
"Value of goods (EUR)",\r
"Value incl. VAT",\r
"Time",\r
"The \\"valid from\\" time is not valid (format YYYY-MM-DD HH:MM).",\r
"The arrival time is entered now; the guest registration deadline runs from it.",\r
"The computer's time differs from the Tax Administration's time by more than allowed (6 hours) or is in the future. Set the correct date and time in Windows.",\r
"Type",\r
"The type (supplier, customer, daily takings, POS, salaries, tax, bank fee, utilities, rent) is set on the \\"Bank\\" screen, after which the month must be posted again.",\r
"Number type",\r
"Customer number type: TIN, VAT, ID or PASS.",\r
"Price type",\r
"vrsta dokumenta",\r
"The identification type must be TIN (PIB/JMB).",\r
"Document type",\r
"Kiosk type",\r
"Kiosk type is not selected (Art. 35b para. 3).",\r
"The location type is chosen from the list (sheet \\"Šifarnici\\").",\r
"Voucher type",\r
"Property type",\r
"Outlet type: retail or wholesale.",\r
"Type of calculation",\r
"Type of job",\r
"The income type 901 (seniority pay difference) does not exist.",\r
"The income type IQOS (913) does not exist.",\r
"type is selected",\r
"The image type is not valid.",\r
"Room type",\r
"The request body type is not supported.",\r
"Type of trade",\r
"Cost type",\r
"Contract type",\r
"Visa type",\r
"Request type",\r
"a record type that this version does not recognise — it will be applied after the update",\r
"earnings type",\r
"Earnings type",\r
"Earnings type {0} {1}",\r
"Types of earnings",\r
"Room types",\r
"type of goods",\r
"VŠS — higher vocational education (VI)",\r
"VSS — higher education (VII)",\r
"WALTER WOLF",\r
"warn",\r
"web",\r
"The web version (iPhone) has no connection to the server. The connection is available in the installed program (Windows and Android).",\r
"The web version has no exchange folder. The snapshot is loaded from a file.",\r
"WEBP",\r
"WEST",\r
"WHERE -x.K=?",\r
"WHERE {0}",\r
"WHERE a.Aktivna=1",\r
"WHERE Aktivan=1",\r
"WHERE Aktivna=1",\r
"WHERE Aktivno=1",\r
"WHERE d.KasaSifra=?",\r
"WHERE DobavljacID=?",\r
"WHERE i.KasaSifra=?",\r
"WHERE m.Aktivan=1",\r
"WHERE o.Tip='OS'",\r
"WHERE p.DatumPazara=?",\r
"WHERE p.DobavljacID=?",\r
"WHERE p.KupacID=?",\r
"WHERE p.MarketID=?",\r
"WHERE pa.MarketID=?",\r
"WHERE ps.DobavljacID=?",\r
"WHERE r.Aktivan=1",\r
"WHERE r.Godina=?",\r
"WHERE s.Status='otvoren'",\r
"WHERE u.MarketID=?",\r
"WHERE z.Stanje='ceka'",\r
"Windows",\r
"WINSTON",\r
"X-Unsent: 1",\r
"X. EARNINGS PER SHARE",\r
"XI. NET RESULT ATTRIBUTABLE TO OWNERS OF THE PARENT ENTITY",\r
"XII. NET RESULT ATTRIBUTABLE TO NON-CONTROLLING INTERESTS",\r
"XML file for import to the Tax Administration portal (e-return → IOPPD → import XML file)",\r
"XML for the portal (PortalVatReturn2025). The schema has not been published: the first upload to IRMS must be done as a draft and checked.",\r
"XXXX-XXXX-XXXX",\r
"YORK",\r
"Z",\r
"Z {0} does not continue the Z numbers of this store ({1}). Check against the report; for another register with a separate counter the number is correct.",\r
"Z no.",\r
"Z number",\r
"The Z number (serial number of the fiscal day) goes into KIF as the retail receipt number and increases by 1 per working day of the register. Listed here are takings without a Z number, takings whose Z does not continue the store's Z numbers (most often misread from a scan) and places where a daily report is missing between two reports. The row is corrected manually according to the paper report; the program does not change the numbers automatically.",\r
"The Z number is not entered (in the KIF: \\"Z-0000\\"). Enter the Z number from the report.",\r
"The Z numbers are in order.",\r
"Z report, import from file",\r
"The Z number (sequence number of the fiscal day) was not read. Manual entry is required.",\r
"Z number: the OCR passes do not agree ({0}). Verification is required.",\r
"Z report of the closed shift",\r
"Z reports from stores — entering daily takings",\r
"in",\r
"For",\r
"For {0}\\n\\n__________________________",\r
"for {0} {1} there is already {2}; a row is marked only for another register",\r
"A payroll with data already exists for {0} {1}. Moving is only possible once that payroll is moved or emptied.",\r
"An interim report (part of the daily turnover) has been entered for {0}:\\n\\n{1}\\n\\nThe Z report replaces the interim report. Save the Z report and remove the interim report of that day?",\r
"for {0}.",\r
"for the year {0}",\r
"There are no costing sheets for {0}.",\r
"For {0}. there is no seniority bonus difference.",\r
"for {0}.{1}.",\r
"za cipele; za grudi",\r
"To clean",\r
"For companies whose register is not IRIS CORVINA: a table of Z reports,",\r
"For a company that operated before: account balances on the start date (trial balance from Excel) are entered in Finance → Opening balance; the opening stock of goods per business unit in the Trade ledger.",\r
"For the annual stocktake of fixed assets — inventory number, location, barcode, purchase value and current value. These fields are entered on the \\"Procurement and expenses\\" tab (when Type = Fixed asset).",\r
"Both the \\"from\\" hour and the \\"to\\" hour are required for a happy hour.",\r
"To install, you must allow installation from this program (phone settings → Install unknown apps), then select \\"Install now\\" again.",\r
"Payable",\r
"PAYABLE",\r
"For payout — {0}",\r
"For payout to employees",\r
"For the selected stores and period, the new margin is written with the \\"Change margin\\" button; the selling prices of all costing sheets in the selection are recalculated (selling = net purchase × (1 + margin)).",\r
"For the selected rows without split VAT, a VAT rate (21, 15, 7 or 0 %) is required. Without a rate these rows are excluded from the import.",\r
"There are no FZO prescriptions from the registers for the selected month.",\r
"There is no payroll for the selected employee in this month. The employee needs to be calculated first.",\r
"There is an unused pairing code for cash register {0} ({1}). The new code cancels it. Continue?",\r
"There is no valid unused code for cash register {0}.",\r
"No parent store is selected for the kiosk \\"{0}\\".",\r
"A selling price (excluding VAT) is required on every line for posting. Missing at: {0}{1} (column \\"Sell. price\\").",\r
"For a lesser breach a warning or a fine of up to {0} % of the monthly salary earned in the month of imposition is imposed, for a period of {1} to {2} months. For a more serious breach a fine of {3} to {4} % of the monthly salary for a period of {5} to {6} months is imposed, conditional termination of employment (employment ends if the employee commits a new serious breach within {7} months) or termination of employment ({8}). In imposing the measure, the seriousness and consequences of the breach, the degree of responsibility, previous work and conduct, previously imposed measures and other circumstances are taken into account ({9}). A third lesser breach within 12 months is treated as an aggravating circumstance.",\r
"For a minor breach, a warning or a fine of up to {0} % of the monthly salary is imposed for a period of {1} to {2} months; for a serious breach, a fine of {3} to {4} % of the monthly salary for a period of {5} to {6} months, conditional termination of the employment relationship or termination of the employment relationship ({7}). The measure is imposed under the procedure set out in {8}, in which the Employee has the right to make a statement in writing and orally. The Employee is liable for damage that he or she causes to the Employer intentionally or by gross negligence at work or in connection with work; the existence and amount of damage is determined by the Employer's commission ({9}). Salary may be withheld only after the procedure has been conducted, on the basis of a court decision or with the Employee's consent ({10}).",\r
"For a minor violation the penalty lasts {0}–{1} months ({2}).",\r
"For a minor violation the fine is up to {0} % of monthly salary ({1}).",\r
"For a minor violation the law allows only a warning or a fine of up to {0} % of salary ({1}).",\r
"For a medicine from the co-payment list, the part paid by the patient must be entered.",\r
"For month",\r
"No store is selected for the outlet \\"{0}\\".",\r
"To be paid: {0} EUR",\r
"a name is required for a new item",\r
"Imported sales already exist for the outlet {0} in the period {1}–{2} ({3}). The import replaces the days of that period; confirmation of the replacement is required.",\r
"An opening balance from {1} already exists for the outlet {0}. An outlet has one opening balance.",\r
"For an outlet without an IRIS cash register: the sales-by-item report (Excel/CSV) goes into the stock list and the item card. The trade ledger does not change — the booking out of stock stays by daily takings. Rows without a link to an item remain visible until they are linked; the check below compares the imported sales with VAT against the outlet's daily takings.",\r
"item-level sales from the IRIS cash register exist for the outlet and day; the row is not imported",\r
"The calculation requires two closed stocktakes of the whole outlet (or an opening balance and a stocktake).",\r
"Two locked stocktakes of the entire outlet are required for the calculation.",\r
"For the municipality {0} the tax amount is {1} EUR.",\r
"For the \\"Date of receipt\\" basis: the posting date is set to the last day of the month for all receipts of that and earlier months that have not been posted in the locked ledger. Intended for receipts that were received in that month but registered later.",\r
"No shift is defined for this day of the week (\\"Store working hours\\" → days).",\r
"An interim X report (part of the daily turnover) has been entered for this store and date:\\n\\n{0}\\n\\nThe daily (Z) report replaces the X report. Save the takings and remove the X report?",\r
"Takings already exist for this store and date:\\n\\n{0}\\n\\nSave as a second takings entry on the same day (another cash register)?\\n\\nOK: a second takings entry is saved.\\nCancel: not saved (the same daily report is not entered again).",\r
"There are no sales by item for this store (no IRIS register closings or imported sales), so the \\"stock\\" is only receipts ± transfers − write-off − invoices. That is not the actual stock of goods. Sales by item from another manufacturer's register file: the \\"Sales by item (import)\\" tab; estimate from two stocktakes: \\"Sales by stocktake\\".",\r
"There is no IQOS payroll for this month. Entry: \\"Enter IQOS amounts\\".",\r
"There is no payroll for this month. The payroll is started with the \\"Calculate all\\" button.",\r
"There is no shift schedule for this month. The schedule is created on the \\"Employee shifts\\" screen.",\r
"A corrective receipt {0} has already been issued for this receipt.",\r
"A costing sheet already exists for this invoice.",\r
"The old values are no longer stored for this change (only the last {0} changes are kept).",\r
"for the period 01.01.–31.12.{0}.",\r
"for the period from 01.01.{0}. to 31.12.{1}. · in EUR",\r
"To pay",\r
"To be offset (line 40)",\r
"for review:",\r
"A transfer requires at least two stores (Settings → Stores).",\r
"It is not mandatory for skipped numbers (the note above is enough); it is needed for the same numbers on several costing sheets and for numbers with \\"~\\". It sets the sequence to 1, 2, 3… without gaps — for the company and for each store. The date in the document number stays the same.",\r
"Missing for registration: {0}.",\r
"To get a suggestion, the CInMED report needs to be imported.",\r
"for received goods and services · {0}",\r
"for a trial before production",\r
"For turnover that did not arrive through a statement (counter payment, an unreadable statement). The transaction goes into the bank register with its own fingerprint: when the real statement arrives later, it is recognised as a duplicate. A payment to a supplier / collection from a customer is posted just like from a statement (the \\"Post\\" button in Transactions), and the general ledger picks it up by type.",\r
"For an invoice fiscalized by another program, enter here the data returned by the Tax Administration. The sales ledger thus stays complete, and the IIC and FIK are printed on the PDF.",\r
"For receipts without a fiscal QR code (foreign supplier, paper receipt, a receipt the Tax Administration no longer returns). The costing sheet gets a regular number and goes into all books like a scanned one. The supplier is chosen from the code list or typed in (a PIB creates a new one).",\r
"An absence \\"{0}\\" {1} – {2} is already recorded for the employee in that period. Edit the existing absence (extend or shorten it) or enter a new one from the day after it.",\r
"To be refunded",\r
"for sending forms",\r
"A promotion period is required for a price reduction (promotional price or discount in %): the \\"from\\" date and the \\"to\\" date.",\r
"For what (goes into the decision rationale)",\r
"For a foreign customer: three-letter country code (SRB, DEU…) — goes into the fiscal invoice",\r
"For each outlet from the file, a company outlet must be selected; the selection is remembered for the next import.",\r
"For each outlet, a store of this company is chosen (recognised ones are already selected), \\"new outlet\\" or \\"skip\\". The outlet's cash registers go with the chosen store; existing cash registers are not moved.",\r
"For each closed calculation: the seniority bonus that was paid and how much is due under the scheme that now applies for that month (on the same base). Closed calculations are not changed — the difference is paid through an open calculation as a separate taxable type \\"",\r
"For each: a new item (name, UoM, barcode and rate from the file) or a link to an existing item. The link is remembered for the next import.",\r
"for each completed year of total length of service, at the rate of the bracket containing the total service: up to {0} years {1} %, from {2} to {3} years {4} %, over {5} years {6} % ({7})",\r
"for each completed year of total length of service: {0} % for years up to {1}, {2} % for years from {3} to {4}, and {5} % for each year above {6} — the percentages are added up ({7})",\r
"For all without an individual decision:",\r
"an X report is entered for that day ({0}); this Z report replaces it after saving",\r
"An interim report has already been entered for that day ({0}).\\n\\nReplace it with this interim report?",\r
"No takings for that day.",\r
"another daily takings entry already exists for that day ({0}); the date or another cash register must be checked",\r
"Takings already exist for that store and date ({0}).\\n\\nThe interim report is part of the daily turnover and is not saved if the daily report has already been entered.\\n\\nOK: the interim report is saved.\\nCancel: nothing is saved.",\r
"There are no active shifts for that store. Shifts are entered on the \\"Shift list\\" tab.",\r
"There is no open calculation for that period. The entry is offered when the calculation is opened (bar in the employee calculation).",\r
"For a serious violation the penalty lasts {0}–{1} months ({2}).",\r
"For a serious violation the fine is {0}–{1} % of monthly salary ({2}).",\r
"For a serious violation the law provides a fine of {0}–{1} %, conditional termination or termination of employment, not a warning ({2}).",\r
"This employee has no reimbursable benefit in this payroll run.",\r
"To write:",\r
"FOR PAYMENT",\r
"An advance receipt was issued for the payment. The payment is not deleted while the advance receipt exists.",\r
"During annual leave the employee is entitled to salary compensation equal to the salary they would have earned had they worked ({0}). An employee whose employment ends and who has not used annual leave is entitled to damages based on the average salary earned at the Employer in the year in which the right was acquired, in proportion to unused days ({1}); the Employer is obliged to allow them to take leave before termination whenever possible.",\r
"During an event",\r
"To establish employment in any position, the employee must meet the general conditions prescribed by law (15 years of age completed and general health fitness), and, for positions that involve handling foodstuffs, the sanitary and health conditions prescribed for persons working in the food trade (sanitary examination). Before starting work, the employee is trained for safe work in accordance with occupational health and safety regulations. For positions with material responsibility (money, goods), the employment contract sets out the obligation to safeguard entrusted assets and to compensate damage.",\r
"for information",\r
"for information — deadlines per",\r
"Žabljak",\r
"Non-competition: given that in his or her position the Employee obtains important business information and has a wide circle of business partners, he or she undertakes that for the duration of the employment relationship, in the territory {0}, he or she will not, in his or her own or another's name, carry out activities in the Employer's line of business or work for a competing employer without the Employer's written consent; a breach is a ground for termination and compensation for damages ({1}). A prohibition after the end of the employment relationship may be agreed only by a special agreement against monetary compensation, for a maximum of two years.",\r
"Spices in original packaging and teas",\r
"Tasks",\r
"Assigned by",\r
"Task",\r
"Task \\"{0}\\" ({1})",\r
"Last error: {0}",\r
"last costing sheet",\r
"Last copy:",\r
"Last margin %",\r
"Last purchase",\r
"Last purchase (net)",\r
"Last selling price incl. VAT",\r
"last mail check:",\r
"Last exchange",\r
"Last update",\r
"Last sent",\r
"Last entered",\r
"Last",\r
"the last number in the row",\r
"Last supplier",\r
"latest statement in the register",\r
"Last contact",\r
"Last receipt",\r
"Recent receipts",\r
"Last closing",\r
"Last shift closing",\r
"last {0} days",\r
"Last days",\r
"The retained advance is charged as a cancellation fee.",\r
"The retained part is a cancellation fee",\r
"Keep",\r
"Keep mine",\r
"Keep existing",\r
"zaduženje",\r
"Debit",\r
"Debit (EUR)",\r
"debit and credit",\r
"Increase in liability (invoice)",\r
"Charging goods to retail from receipts (costing sheet).",\r
"Debit: opening balance + costing sheets (selling price incl. VAT) − discounts ± price revaluations ± internal transfers (red cancellation) · Credit: daily takings (excl. services), returns, stocktake shortage · Payment: actual only (statement or manual entry); takings without a payment are on the list below the book",\r
"Debit: opening balance + costing sheets at wholesale prices excl. VAT · Credit: invoices and daily takings excl. VAT, returns, stocktake shortage · Payment: actual only (statement or manual entry)",\r
"Charged",\r
"Charged {0} EUR · paid {1} EUR · balance {2} EUR",\r
"Header (status, hours quota, dates)",\r
"The table header was not recognized. The table is entered by copying from the PDF.",\r
"The table header was not found. The file may not be a supplier ledger card, or the card text was not copied in full.",\r
"Requires a new installation of the program (Setup) on the computer with Outlook",\r
"Request",\r
"Request — {0} {1}–{2}",\r
"request #{0} ({1})",\r
"Request #{0} was sent to the publisher. The decision and reply are shown in the list below.",\r
"A request to the publisher that changes the licence or terms:",\r
"The request was interrupted.",\r
"The request has been entered. It is taken into account in the next automatic scheduling.",\r
"A request to the local server requires a remembered CA fingerprint.",\r
"request not submitted",\r
"request submitted",\r
"Screen access request",\r
"screen access request per order #{0}{1}",\r
"REQUEST FOR REFUND OF SALARY COMPENSATION",\r
"Request for maternity benefit refund — {0}",\r
"Shift request",\r
"requests:",\r
"Requests",\r
"Requests — {0} · {1} {2}",\r
"Employee requests for this month are taken into account in \\"Schedule automatically\\": the employee is not scheduled on those days (day off, leave, sick leave), is scheduled only in the requested shift, or is assigned to another store. Weeks that are already confirmed are not changed.",\r
"Requests cannot be read at the moment: {0}",\r
"shared shifts",\r
"Shared barcode catalogue",\r
"together with the price list",\r
"ZAK",\r
"The scheduled price has been cancelled.",\r
"The scheduled price has already been applied or cancelled.",\r
"The scheduled price was not found.",\r
"A scheduled price is applied automatically at the set time, in the program and on the registers. A new one is scheduled in the Prices → All stores (overview) tab, using the \\"Valid from\\" field.",\r
"Scheduled prices",\r
"A scheduled price is cancelled by the device on which it was entered.",\r
"Lock",\r
"closing {0}",\r
"Closing {0}: revenues {1} − expenses {2} = {3}; tax {4}; net {5}",\r
"Year-end closing",\r
"The closing has been undone.",\r
"Closing of cost and output accounting",\r
"CLOSING OF BALANCE SHEET ACCOUNTS",\r
"CLOSING OF INCOME STATEMENT ACCOUNTS",\r
"Locked",\r
"locked",\r
"locked month",\r
"Locked month",\r
"Locked month {0}",\r
"locked period",\r
"Locked",\r
"Locked (unchanged): {0}.",\r
"Locked months:",\r
"Locked costing sheets:",\r
"Locked",\r
"locked",\r
"locked period",\r
"Lock {0}?\\n\\nAfter locking, the costing sheets and invoices of that month cannot be changed or deleted.",\r
"Month locking (protects against changes and deletion)",\r
"Period locking",\r
"locking/unlocking a period",\r
"closed",\r
"Closed",\r
"Closed {0}",\r
"Closed trade ledger",\r
"Closed trade ledger {0} (balance {1})",\r
"Closed calculations: how much seniority bonus was paid and how much is due under the scheme that now applies — and adding the difference to an open calculation",\r
"Closing the book",\r
"The closing of the book for {0} has been cancelled.",\r
"closed",\r
"Close",\r
"zakljuci_<PIB>_kasa-<ENU>.json",\r
"Closed by: {0}.",\r
"Close year {0} with tax {1} ({2})?",\r
"Close the opening stock of {0} as of {1}? Cost value {2} EUR, selling value incl. VAT {3} EUR.",\r
"Finalise the stocktake ({0}) and enter the value at purchase price ({1} EUR) in Goods stocktake?",\r
"Finalise the stocktake ({0}) and enter the value at selling price ({1} EUR) in Goods stocktake?",\r
"Close the trade ledger for {0} (all outlets)?\\n\\nThe book is saved to a PDF with a fingerprint, a \\"first and last page for certification\\" is created, and changing that year requires cancelling the closing.{1}",\r
"Closing the book and creating the PDF…",\r
"The company's main computer picks up cash register closings automatically, in every synchronization round.",\r
"Closing voucher on 31.12.: revenues (class 6) and expenses (class 5) are transferred via 699/599 to 710, the result to 720, corporate income tax 721/4810, and the net profit to 3410 (loss to 3510). Opening of the next year carries the balances of classes 0–4 into the opening balance on 01.01. Before closing: all months posted, stocktake and depreciation posted, PD return saved (it gives the exact tax).",\r
"Up to and including",\r
"up to and including {0} {1}.",\r
"Concludes contracts with suppliers, customers, banks and lessors.",\r
"Law on Peaceful Settlement of Labour Disputes",\r
"Law on the National Qualifications Framework (Art. 10)",\r
"VAT Act — by the 15th of the month for the previous month",\r
"VAT Act Art. 18 para. 3 — when an invoice has not been issued, VAT is calculated eight days from the date of delivery",\r
"Law on Mediation in Employment and Rights During Unemployment",\r
"Accounting Act — stocktake at the end of the financial year",\r
"Accounting Act and Corporate Income Tax Act — by 31.03.",\r
"The Accounting Act does not require a number sequence without gaps, but true documents and a chronological order of entry (Art. 10 and 13). A note is enough for skipped numbers — it is printed below the purchase ledger (Excel and PDF) for this year.",\r
"Labour Law (\\"Official Gazette of Montenegro\\", nos. 74/19, 8/21, 59/21, 68/21, 145/21, 77/24, 84/24, 86/24, 122/25, 165/25, 51/26 and 103/26)",\r
"The Labour Law does not prescribe a percentage for the seniority bonus (Art. 98 — \\"in accordance with the collective agreement and the employment contract\\"). The General Collective Agreement (Art. 14) was binding at least until 30.04.2026 on the brackets: 0.5 % up to 10 years, 0.75 % from 10 to 20, 1 % over 20 years of service (the usual interpretation — cumulative: 15 yrs = 10 × 0.5 + 5 × 0.75 = 8.75 %). Seniority = completed years of total length of service on the first day of the calculation month. The scheme applies from the entered date until the next one; before the first one, \\"flat\\" applies. The same scheme (in the same words) goes into the employment contract. Closed calculations are not changed — the difference for them is given by the \\"Seniority bonus difference\\" report.",\r
"Social and Child Protection Act — request within 30 days of the start of the absence",\r
"Law on Internal Trade, Art. 35b: retail trade is not carried out on Sundays and on public and other holidays. Exceptions include specialised shops or kiosks selling bread, bakery products and cakes, flowers, souvenirs, the press, plant protection products or funeral equipment (para. 3 pt. 2), kiosks within enclosed areas of stations, airports and ports (pt. 6) and kiosks during shows, festivals and events (pt. 7). Specialised sale is \\"sale of predominantly one type of goods\\" (para. 4). The penalty for a legal entity is 1,000–10,000 € (Art. 43) and closure of the premises (Art. 42 para. 3). A kiosk is a separate point of sale (Art. 15 para. 2): a separate business premises registered with the Tax Administration, with its own trade records.",\r
"Law on the Prohibition of Workplace Harassment (\\"Official Gazette of Montenegro\\", nos. 30/12 and 54/16)",\r
"Law on the Protection of Trade Secrets (\\"Official Gazette of Montenegro\\", no. 145/21)",\r
"Consumer Protection Act Art. 15 para. 2: the lowest price applied in the 30 days before the reduction",\r
"VAT Act —",\r
"of the Labour Law",\r
"Statutory audit",\r
"Statutory audit is not mandatory.",\r
"Legal reserves",\r
"legal minimum ({0})",\r
"The statutory minimum is",\r
"The statutory holiday stays in the list as a working day and can be restored.",\r
"ZAKUP",\r
"Lease — calculation",\r
"Lease (IOPPD 065)",\r
"Rent (premises — paid or received)",\r
"Lease {0}.{1}. — {2}",\r
"Rent {0}/{1}",\r
"Lease from",\r
"Rent from natural persons",\r
"Rent from natural persons (IOPPD basis 065):",\r
"Rent from natural persons: rent expense (gross)",\r
"Lease from an individual — tax on income from property (%)",\r
"Lease from an individual — standard costs reducing the base (%)",\r
"Lease paid",\r
"Premises rent",\r
"Lease for {0} {1}: {2} lessors calculated.",\r
"Rent: liability to the lessor (net)",\r
"Rent: withholding tax + surtax",\r
"ZAKUPA",\r
"Leased premises and equipment (off-balance)",\r
"Rent — {0}{1}",\r
"Rent (gross)",\r
"Rent for this month (EUR)",\r
"lessor",\r
"Lessor",\r
"Lessor {0}",\r
"The lessor has calculated months. Deletion is not possible; you can turn off \\"Active\\" or enter the date until which the contract is valid.",\r
"The lessor has been deleted.",\r
"the lessor has not arrived yet",\r
"The lessor was not found.",\r
"lessors",\r
"Lessors (contracts)",\r
"stock",\r
"Stock",\r
"Source stock",\r
"INVENTORIES",\r
"Finished goods inventory",\r
"Stock and stocktake",\r
"Stock and stocktake",\r
"Materials inventory",\r
"MATERIAL INVENTORIES",\r
"Closing stock is theoretical (no stocktake in {0}.); an accurate profit is given by the stocktake.",\r
"Work-in-progress inventory",\r
"Stock by store",\r
"STOCK BY STORE",\r
"Merchandise inventory",\r
"Stock of goods 31.12.{0}.",\r
"Stock of goods at 31.12.",\r
"Replace opening balance",\r
"Replace existing",\r
"Replace: the current database \\"{0}\\" is first saved to Knjig_backup\\\\Arhiva, then replaced with the selected file (everything entered in the database after that copy is lost).\\n\\nAs a new company: it is imported under the name \\"{1}\\" — the existing company remains untouched (exchange with other computers works only under the real company name).",\r
"Replace the data on this phone with the processed database from the computer?\\n\\nUnprocessed scans from this phone remain saved.",\r
"Replace the previously imported days of the period with this file (days of a locked month remain)",\r
"replaced",\r
"substitute",\r
"Replacement",\r
"substitute (employee of another store or without a permanent store)",\r
"Replacement (free)",\r
"The replacement is absent ({0} – {1}).",\r
"The replacement is already assigned to a shift on that day.",\r
"code replacements",\r
"Code replacement",\r
"Code replacement (an item moves to a new code; links with costing sheets remain)",\r
"substitutes",\r
"Swaps and actual hours are corrected by clicking a day, and then the week is confirmed.",\r
"Code replacements",\r
"Frozen fruit and vegetables — packaged",\r
"rounding of prices per line",\r
"Zapad banka",\r
"The remembered fingerprint is not the fingerprint of a CA certificate.",\r
"Record without a dedicated screen",\r
"The record is not readable.",\r
"Records",\r
"Records not yet written: {0}. They are saved and the write is retried automatically.",\r
"Records pending: {0} (\\"Exchange records that are pending\\").",\r
"Exchange records that are pending",\r
"Records received from other computers that have not been written:",\r
"Write-off record · reduces stock · loss within the norm (KRKL) is not subject to VAT",\r
"employed {0}.{1}.",\r
"employed only on {0}.{1}.{2}.",\r
"employee",\r
"An employee is entitled to unpaid absence of up to {0} working days in a calendar year for the care or support of a member of the immediate family or household because of serious illness, with evidence ({1}); during that time the Employer does not deregister them from insurance. At the employee's request the Employer may approve unpaid absence of up to 30 days a year also in other justified cases (treatment at own expense, important personal reasons), and with consent longer, if this does not disrupt the work process; during that time the rights and obligations from employment are suspended. An employee who does not return to work within 2 working days of the end of unpaid absence gives grounds for termination ({2}).",\r
"The Employee has the right to a break during work of {0} minutes, which counts as working time and is organized so that work with customers is not interrupted ({1}), to a daily rest of at least {2} hours without interruption ({3}) and to a weekly rest of at least {4} hours without interruption, as a rule on Sunday, and when the nature of the work requires it — on another day according to the schedule ({5}). Overtime work may be introduced only by a written decision of the Employer in the cases referred to in {6}, so that working time does not exceed {7} hours per week on average over a period of four months, that is, {8} hours in a week. Work on a holiday is introduced by a written decision with notice to employees three days earlier ({9}).",\r
"An employee is entitled to paid annual leave in proportion to the time spent in employment ({0}). In the year employment starts or ends, they are entitled to 1/12 of annual leave for each started month of work, whereby at least half a day is rounded up to a whole day ({1}). Sick leave, paid absence, maternity, paternity and parental leave and holidays count as time worked for earning leave. An employee cannot waive the right to leave, nor can it be denied or replaced by money, except when employment ends.",\r
"An employee is entitled to paid absence: {0} working days because of the death of an immediate family member (spouse, children, brothers, sisters, parents, adopters) and {1} working day because of a particularly important and urgent family reason caused by illness or accident ({2}), and under this Rulebook also: marriage — 5 days; serious illness of an immediate family member — 7 days; care of a child with developmental difficulties — 3 days; death of a relative outside the immediate family — 1 day; dealing with the consequences of a natural disaster — 3 days; moving house — 1 day (to another place 3); voluntary blood donation — 1 day; taking a professional exam related to the job — 5 days (not related to the job — 2). Total paid absence is up to {3} working days per year, whereby absence because of serious illness, care of a child with difficulties, natural disaster and blood donation is exercised independently of that limit. Absence is taken at the time the event occurs, based on a request and evidence. The father of a child is entitled to paternity leave of {4} working days from the child's birth ({5}), with notice one month in advance.",\r
"The Employee is entitled to paid leave: {0} working days due to the death of a close family member and {1} working day due to a particularly important and urgent family reason ({2}), and under this contract also: marriage 5 days, serious illness of a close family member 7 days, moving 1 day (to another town 3), voluntary blood donation 1 day, taking a professional exam related to work 5 days, eliminating the consequences of a natural disaster 3 days — in total up to {3} working days per year, except for cases of serious illness, natural disaster and blood donation, which are exercised independently of that limit. An Employee who observes a religious holiday is entitled to paid leave on that day, at his or her request announced no later than 3 days earlier (Law on Observance of Religious Holidays, Art. 2). A father is entitled to paternity leave of {4} working days from the birth of the child ({5}). The Employee is entitled to unpaid leave of {6} working days per year to care for a close family member due to serious illness ({7}), and in other cases with the Employer's consent. The Employee proves temporary incapacity for work with a doctor's certificate within 3 days ({8}).",\r
"The Employee is obliged to perform the work conscientiously, professionally and in accordance with the law, the Employer's general acts and the orders of {0}, as well as other work corresponding to his or her qualifications at the Employer's order. The Employer provides the Employee with the professional training and development needed for work (work on the fiscal cash register and in the program, hygiene and sanitary regulations, occupational safety) at its own expense, as a rule during working hours ({1}).",\r
"The employee is obliged to: perform the duties of the position conscientiously and on time; observe working hours and the shift schedule; carry out lawful instructions of superiors; safeguard the Employer's property, goods and money; issue fiscal receipts and keep the cash register and records accurately; behave politely towards customers and colleagues; observe regulations on occupational safety, hygiene and food trade; keep trade secrets; report a change of address within 3 days.",\r
"The employee has been informed that, under the Law on Mediation in Employment and Rights During Unemployment (Art. 50), a person whose employment ended by agreement cannot receive unemployment benefit.",\r
"An employee who at work or in connection with work intentionally or through gross negligence causes damage to the Employer is obliged to compensate it; for ordinary negligence they are not liable. The existence and amount of damage, circumstances, offender and manner of compensation are established by a commission formed by the Employer, one member of which is an employee representative ({0}); the amount is determined on the basis of accounting data (purchase value of goods, minutes on a cash shortage) or by expert examination. Compensation for damage may be deducted from salary only with the employee's written consent or on the basis of a final court decision ({1}). A shortage in the cash register or goods is not charged to the employee automatically, but after the procedure is conducted.",\r
"An employee who has worked for at least 6 months may offer the Employer to conclude a contract for an indefinite period, and the Employer is obliged to reply in writing within 30 days ({0}).",\r
"An employee who considers that this decision has violated his or her right may submit a request for protection of rights to the Employer, who is obliged to decide within 15 days, and then a proposal for peaceful resolution of the labour dispute to the Agency for Peaceful Resolution of Labour Disputes ({0}); independently of this, the employee may turn to the labour inspectorate.",\r
"An employee who considers that a right arising from the employment relationship has been violated may submit a request for protection of rights to the Employer, who is obliged to decide within 15 days, and, independently of this, turn to the labour inspectorate. Before initiating proceedings before the competent court, the Employee submits a proposal for peaceful resolution of the labour dispute to the Agency for Peaceful Resolution of Labour Disputes, except in cases in which the law allows direct recourse to the court — a dispute over termination of the employment relationship and amendment of the contract (deadline 15 days from delivery of the decision) and protection against discrimination and mobbing ({0}, Arts. 16 and 180a {1}). The Employee must not suffer adverse consequences because of this.",\r
"Employees who are employed on the date this Rulebook enters into force are assigned to the positions from this Rulebook that correspond to the duties they perform. An employee who does not meet the qualification requirement of the position in which they were found keeps that position, and the requirements are applied to every subsequent establishment of employment and assignment. Employment contracts are aligned by annexes within 60 days of the Rulebook entering into force, where necessary.",\r
"An employee may be temporarily removed from work when circumstances indicate a more serious breach of work duty or criminal proceedings have been initiated against them for an act committed at work, until the end of the procedure at the latest; removal is mandatory during detention. A reasoned decision is issued on the removal (after an oral order within {0} days); during the removal the employee is entitled to compensation of {1} of the monthly salary, and the difference up to the full salary is paid if the procedure is discontinued or the employee is released from liability ({2}).",\r
"The employee may submit a written response to this warning within {0} working days of delivery ({1} para. 3). If the reasons are not eliminated or the response does not justify the conduct, the Employer may issue a decision terminating the employment contract ({2}). The employee is called upon to observe work duties, work discipline and the instructions of superiors in further work.",\r
"The Employee performs the duties of the position set out in the Employer's job classification act, with which he or she was familiarized before signing this contract.",\r
"The employee gave a statement on {0}{1}.",\r
"Employees must be notified of work on a holiday at least 3 days in advance (Labour Law, Art. 89) — a decision dated {0} is {1}.",\r
"The Employee is assigned to the position {0}{1}, for which the job classification act requires {2}{3}{4}.",\r
"An employee is assigned to a position by an employment contract. A change of position, place of work or other essential elements of the contract is made by an annex with a written offer stating the reasons ({0}). An employee in Retail may, because of work process needs (sick leave, leave, season, stocktake), temporarily perform duties in another outlet of the Employer in the area of the same municipality, of which they are notified no later than with the shift schedule. Temporarily performing duties of another position of the same or lower qualification level lasts as long as the reason lasts, with the employee keeping the salary of their own position.",\r
"Employees are made familiar with this Rulebook before the employment contract is concluded, and the Rulebook is permanently available on the notice board of each outlet. For matters not regulated by the Rulebook, {0} applies; provisions of collective agreements on procedure do not apply (Art. 217 para. 2 ZOR). The Rulebook enters into force on the eighth day after publication.",\r
"The employee did not give a statement within the given period nor request an oral statement, and is therefore deemed to agree with the allegations of the warning (Art. 147 para. 6 ZOR).",\r
"employees",\r
"employed {0}{1}",\r
"An employee with an established disability status: the earnings are reported in IOPPD under basis 003 and the person counts towards the obligation to employ persons with disabilities (no special contribution is paid for them).",\r
"The Employee is entitled to a basic salary for {0} working time and standard performance in the amount of {1} gross per month, which cannot be lower than the minimum salary for the qualification level of the position ({3}: {4} EUR net for positions up to level V, {5} EUR net for level VI and above){6}. The Employee is also entitled to a special part of the salary (hot meal allowance and 1/12 of the annual leave allowance) in accordance with the law and the Employer's general act.",\r
"earnings",\r
"ZARADA",\r
"Earnings {0}. (excl. VAT, as in the PD form):",\r
"The earnings have been calculated in accordance with the Labour Law and the Law on Personal Income Tax.",\r
"The salary is paid in money, to the Employee's current account {0}{1}, once a month, no later than the {2}. of the month for the previous month, together with a written salary calculation ({3}). The Employee is entitled to reimbursement of business travel costs and other payments in accordance with the law and the Employer's general act. The Employee has the right to disclose data about his or her own salary in order to exercise the right to equal pay ({4}).",\r
"ZARADE",\r
"Earnings and HR",\r
"Salaries and compensation paid in the period and not recognised in earlier periods",\r
"salaries from {0} payroll calculations for {1} have not been posted (Finance → Post month)",\r
"Employee salaries",\r
"Salaries, contract fees, severance pay… calculated but UNPAID in the tax period (Art. 11a)",\r
"Limitation period for initiation",\r
"Limitation of proceedings: the decision must be made within {0} months of initiation ({1}). The deadline expired on {2}.",\r
"Statute of limitations: proceedings are initiated within {0} months of learning of the violation ({1}). The deadline expired on {2}.",\r
"The secure connection (TLS) was not established.",\r
"Protected name",\r
"Protection",\r
"Connection security",\r
"Why it is waiting",\r
"Represents the company and is responsible for the lawfulness of its operations.",\r
"Goods found at the outlet when the company starts working in the program (or the year has no history): quantity, purchase price excl. VAT, retail price incl. VAT and VAT rate per item, as of a date (most often 01.01. or the start date). Entry is manual, by scanner, or by importing a stock list from another program (Excel/CSV). A closed opening stock is a stocktake of the whole outlet: the \\"Opening stock\\" row in the trade ledger, quantity and prices in the stock list, stocks and PD. An outlet has one opening stock.",\r
"Goods found at the outlet by item when the company starts working in the program",\r
"existing",\r
"Default interest",\r
"Closing of output VAT for the month",\r
"Closing of VAT liability on services of foreign persons",\r
"Closing of flat-rate compensation for the month",\r
"Closing of VAT on import for the month",\r
"Closing of input tax on services of foreign persons",\r
"Closing of revenues",\r
"Closing the estimate from {0}",\r
"Closing of expenses",\r
"Closing of deferred VAT {0} %",\r
"Closing of input VAT for the month",\r
"Closed",\r
"Closed stores",\r
"Closed outlets",\r
"Close",\r
"Close this window",\r
"Close estimate",\r
"Close program",\r
"Close allocation",\r
"Close the application?",\r
"Occupied barcodes",\r
"Occupied barcodes (the barcode already belongs to another item)",\r
"Occupied barcodes that the preview on computer \\"{0}\\" did not show: {1} — skipped (the barcode stays with the item that already has it).",\r
"Occupied (actual)",\r
"ZAV",\r
"Related cost/unit",\r
"Dependent purchase cost",\r
"Dependent procurement cost",\r
"Dependent cost included in purchase cost (reduces margin){0}",\r
"Dependent cost for costing sheet {0} — {1}{2}",\r
"Dependent costs that are not included in the purchase cost",\r
"Dependent procurement costs",\r
"Related procurement costs (forwarding, transport, customs)",\r
"Dependent purchase costs (added to purchase value)",\r
"The dependent costs of this costing sheet have already been allocated to items. The cost can be changed after the allocation is cancelled; the allocation is then repeated.",\r
"Dependent costs: estimate of a cost whose invoice has not arrived (deferral until the invoice is received)",\r
"completed",\r
"Finish",\r
"Finish",\r
"Finish and open Finance",\r
"compressed",\r
"The sum of amounts by rates ({0}) does not equal the advance amount ({1}).",\r
"Total deleted",\r
"total credits {0} ≠ {1} from the statement",\r
"The sum of payments ({0}) is not equal to the amount to be paid ({1}).",\r
"Sum by rates",\r
"the sum by rates ({0}) does not equal \\"Total incl. VAT\\" ({1})",\r
"sum by rates {0} does not equal \\"Total with VAT\\" {1}",\r
"sum of what was read {0} / {1}, while the statement shows {2} / {3}",\r
"The sum of turnover by rates is {0}, but \\"UKUPAN POREZ → Promet\\" is {1}.",\r
"The total is compared with the daily takings from the trade ledger in the same period.",\r
"Total items",\r
"The sum of the items ({0} EUR) does not equal the invoice amount ({1} EUR). Difference: {2} EUR.",\r
"The sum of the items equals the invoice amount.",\r
"The sum of the rates ({0} / {1} / {2}) does not match UKUPAN POREZ. Verification against the image is required.",\r
"The sum of all units equals PR-PDV for the same period: output VAT from takings, input from invoices. Takings without a separated VAT enter here only in turnover, not in VAT.",\r
"total debits {0} ≠ {1} from the statement",\r
"Summary expense voucher: {0}",\r
"SUMMARY JOURNAL VOUCHER — GOODS EXPENSE",\r
"totals row (previous / debit / credit / new) not found",\r
"Totals by day",\r
"Totals by supplier",\r
"Totals by month",\r
"Totals by outlet",\r
"Totals by document type",\r
"the totals from the statement were not read, control check is not possible",\r
"ZBroj",\r
"green",\r
"green",\r
"wants {0}",\r
"Wants a specific shift",\r
"Land",\r
"Land held for sale",\r
"female",\r
"Zeta",\r
"Ziraat Bank",\r
"Bank account",\r
"Bank account (18 digits)",\r
"Bank account (for bank transfer on the invoice)",\r
"Bank account {0} has been entered.",\r
"Bank account {0} has already been entered.",\r
"The bank account has {0} digits, but it must have exactly 18 (bank 3 + account 13 + check 2). The shortened form with dashes is also allowed (e.g. 540-32116541-40); zeros are added automatically.",\r
"Contractor's bank account",\r
"The bank account has been deleted.",\r
"The bank account has been entered.",\r
"The bank account must have 18 digits or be left empty.",\r
"The bank account does not exist.",\r
"Bank account not entered (Settings → Company).",\r
"No bank account has been entered.",\r
"Lessor's bank account",\r
"Bank accounts",\r
"Cereals",\r
"Cereals containing gluten",\r
"ZK",\r
"emblem",\r
"Emblem",\r
"Emblem",\r
"The emblem must be square (difference between sides up to 10 %).",\r
"No emblem has been set.",\r
"The zone has not been recognised yet.",\r
"VAT Act Art. 18 para. 2–3: a supply is deemed made at the time the invoice is issued; if no invoice is issued, VAT is calculated eight days from the date of supply.",\r
"VAT Act Art. 18 para. 3: if an invoice has not been issued, VAT is calculated eight days after the delivery date.",\r
"VAT Act Art. 18 para. 4 (advance), Art. 20 para. 9 (credit note to a taxpayer customer); PPZPDV Art. 121 para. 4",\r
"VAT Act Art. 18 para. 4, Art. 20 para. 9, Art. 31 para. 2; VAT Act Implementing Rules Art. 76, Art. 121 para. 4",\r
"VAT Act Art. 20 para. 9",\r
"VAT Act Art. 20 para. 9: the customer notifies in writing that they have reduced the input VAT deduction",\r
"VAT Act Art. 24a para. 1 pt. 1; Rulebook 117/24 Art. 2",\r
"VAT Act Art. 24a para. 1 pt. 10; Rulebook Art. 13",\r
"VAT Act Art. 24a para. 1 pt. 11; Rulebook Art. 14",\r
"VAT Act Art. 24a para. 1 pt. 12; Rulebook Art. 15 and Art. 3",\r
"VAT Act Art. 24a para. 1 pt. 2",\r
"VAT Act Art. 24a para. 1 pt. 4; Rulebook Art. 6–7",\r
"VAT Act Art. 24a para. 1 pt. 6; Rulebook Art. 9 (28/25)",\r
"VAT Act Art. 24a para. 2 pt. 1; Rulebook Art. 16",\r
"VAT Act Art. 24a para. 2 pt. 3; Rulebook 117/24 Art. 18",\r
"VAT Act Art. 25 — PR PDV-2 field 13.",\r
"VAT Act Art. 26–27 — PR PDV-2 field 14.",\r
"VAT Act Art. 37 para. 5: input VAT is not deducted for passenger cars and motorcycles, fuel, lubricants, parts and services for them, newly built residential buildings and entertainment. Such VAT goes into PR-PDV field 26 and into the cost (purchase value).",\r
"VAT Act Art. 37 para. 6–7: VAT from the customs declaration is deducted in the period in which the declaration was received. Customs duty and excise duty are not VAT. The base and VAT are entered as stated on the declaration (suggestion: customs value + customs duty + excise duty).",\r
"VAT Act Art. 71e: \\"The provisions of Article 24a paragraph 1 point 1) and Article 25 paragraph 1 point 12d) of this Act cease to apply on 31 December 2022.\\" Bread, flour and oil are not sold at 0 % since 01.01.2023. An item at 0 % without basis should be checked (rate or basis on the Items screen).",\r
"ZR:{0}",\r
"JOURNAL OF CORRECTIVE INVOICES",\r
"Official I-RAČ form (15 columns, Rulebook on the application of the VAT Act, Art. 122):",\r
"Official U-RAČ form (17 columns, Rulebook on the application of the VAT Act, Art. 123; date of receipt = date of registration; invoices from foreign suppliers for goods are not in it — import VAT goes by customs declaration to field 20):",\r
"\\"Euro model\\" (Government proposals of 17.09.2026)",\r
"(related party)",\r
"(with {0} previously entered in {1})",\r
"). The program does not calculate the tax; the calculation is confirmed by the accountant. Payout and repayment are posted from the statement (type \\"Loan / borrowing\\") or through the cash desk.",\r
"{0}\\n\\nSave the voucher anyway?",\r
"{0}\\n\\nRecord the leave?",\r
"{0}\\n\\nRecord the loan?",\r
"{0}\\nSource: {1}.\\n\\nFrom {2} (by payroll month) the following will apply:\\n{3}\\n\\n{4}\\n\\nThe parameters are enabled only once the law is published in the \\"Official Gazette of Montenegro\\". Has the law been published, and should the parameters be enabled?",\r
"{0} — valid from {1}.",\r
"{0} · attachment {1}",\r
"{0} (foreigner): the permit was issued on {1}, and the employment contract is dated {2} — after the deadline of {3} hours ({4}). The date needs to be checked.",\r
"{0} (foreigner): the permit was issued on {1}. The employment contract must be concluded and the employee registered for insurance within {2} hours of the permit being issued — by {3} ({4}).",\r
"{0} (foreigner): the temporary residence and work permit expires on {1} (in {2} days). A new permit should be issued before it expires.",\r
"{0} (foreigner): the temporary residence and work permit expired on {1} ({2} days ago). The employee's status needs to be checked; employing a foreigner who is residing unlawfully is a misdemeanour ({3}).",\r
"{0} (foreigner): it has not been confirmed that a copy of the permit is kept at the workplace ({1}).",\r
"{0} (foreigner): the {1} of the temporary residence and work permit has not been entered.",\r
"{0} (foreigner): work start {1}. If the employee has not started work, the ministry must be notified within {2} days — by {3} ({4}).",\r
"{0} (foreigner): employment ended on {1}, before the permit expired{2}. The ministry must be notified within {3} days — by {4} ({5}). The date of notification is entered in the employee's data.",\r
"{0} is a related party: the loan is subject to withholding tax from the first euro ({1}). The tax calculation is confirmed by the accountant.",\r
"{0}; calculation confirmed by the accountant",\r
"{0}: {1}, and the law provides {2} ({3}). More days may be granted by the employer (employment contract, employer's act).",\r
"{0}: {1}{2}, and the law provides at most {3} working days in a calendar year ({4}). Days beyond that should be entered as \\"Unpaid leave\\".",\r
"{0}: loans in {1} amount to {2} EUR — above {3} EUR per year. Withholding tax is payable on loans to natural persons above that amount ({4}). The tax calculation is confirmed by the accountant.",\r
"• {0}: {1} (now {2})",\r
"• values from the Rates tab (rows entered for this date are removed)",\r
"✉ By e-mail",\r
"➕ Enter parameter",\r
"🤝 Loans to natural persons",\r
"employer's act",\r
"Employer's act",\r
"Program update: a package is applied only with a verified fingerprint (SHA-256), and a failed version rolls back to the previous one automatically. Program window: navigation and new windows are blocked, the sender of every internal call is verified, opening a file does not run executables. The fiscal certificate password is stored encrypted with Windows account protection.",\r
"No change (values from the Rates tab apply)",\r
"Security fixes",\r
"Security fixes are released in the latest version of the program and delivered by update. An older version receives fixes by upgrading to the latest one.",\r
"No. {0}",\r
"Permit number",\r
"Art. 210a of the Foreigners Act",\r
"Art. 28a of the Corporate Income Tax Act (\\"Official Gazette of Montenegro\\", No. 104/26)",\r
"Art. 87 para. 4 of the Labour Law",\r
"Art. 87 para. 6 of the Labour Law",\r
"Art. 88 para. 1 of the Labour Law",\r
"given",\r
"Given",\r
"Given in {0}.",\r
"The date from which the parameter applies is required.",\r
"The date from which the parameters apply is required.",\r
"The loan date is required.",\r
"Security update log",\r
"The document was created earlier: a message draft is opened with the file from the export folder. Sending via an SMTP server is possible for a document created in this session of the program.",\r
"Contributions and tax remain as in the Rates tab.",\r
"Delivery of the act to the employee by e-mail; the record of sending remains in the e-mail log as evidence (Art. 176a of the Labour Law)",\r
"Delivered by e-mail",\r
"Permit issued",\r
"Permit valid until",\r
"EUR per year, withholding tax is payable, and for related parties from the first euro (",\r
"Record of loans to natural persons by person and year (withholding tax from 01.01.2027)",\r
"Record of loans the company gives to natural persons, by person and year. From",\r
"Cash {0} EUR: paying and receiving cash of {1} EUR or more is no longer permitted ({2} para. 1). Payment is made through a transaction account (para. 3).",\r
"Cash {0}: {1} EUR (together with this payment). The ban on cash of {2} EUR or more also applies to several related transactions, including loans ({3} para. 2).",\r
"The person's first and last name is required.",\r
"Corrected",\r
"above {0} EUR per year — withholding tax",\r
"Amount to which the withholding tax applies",\r
"JMBG has 13 digits.",\r
"employer penalty {0}–{1} EUR, {2}",\r
"Compromise (minimum wage +200 EUR, the rest unchanged)",\r
"a copy of the permit is kept at the workplace",\r
"through the cash desk with this person within ±30 days",\r
"Person",\r
"person with a disability ({0}; applies from {1})",\r
"Licence: signature and PIB are verified, including for a remembered licence; a server response for another company is not accepted.",\r
"The proposal has three levels of minimum net wage (1,000 / 1,250 / 1,400 EUR); the program keeps two — the values by qualification level must be entered according to the published text.",\r
"Ministry notified (did not start / termination)",\r
"On the Rates tab",\r
"on loans to natural persons above",\r
"A message draft with the existing file is available in the Windows program. On this device the document must be created again and then sent.",\r
"statements from negotiations — not a draft law",\r
"There are no parameters with an effective date — the values from the \\"Rates and thresholds\\" table apply for all months.",\r
"There are no loans for the selected year.",\r
"Unknown parameter variant.",\r
"Delete this entry from the loan record?",\r
"OC",\r
"Paternity leave (Art. 126a of the Labour Law, 10 working days from the child's birth)",\r
"from 01.12.2026; applied automatically). Increases for seniority and other grounds are regulated by the company in its rulebook (",\r
"Withholding tax applies",\r
"Parameter",\r
"The parameter was entered from {0}.",\r
"A parameter entered here applies from its date, by payroll month: the salary for a month before that date is calculated using the old values, and from that month using the new values, regardless of when the calculation is run. Closed payroll calculations are not changed. While the table is empty, the values from the \\"Rates and thresholds\\" table apply. The prepared variants for 01.01.2027 are templates: the \\"Euro model\\" laws had not been published by 10.11.2026, so a variant is enabled only after publication in the \\"Official Gazette of Montenegro\\", with each value checked against the published text.",\r
"Parameters with an effective date (law amendments)",\r
"PH",\r
"Paid — urgent family reason (Art. 87 of the Labour Law, 1 working day)",\r
"Paid — death of an immediate family member (Art. 87 of the Labour Law, 7 working days)",\r
"Withholding tax on loans to natural persons above {0} EUR per year; related parties from the first euro ({1}). The tax has not been calculated.",\r
"Withholding tax on loans to natural persons applies from {0} ({1}).",\r
"withholding tax on loans applies from {0}.",\r
"Latest security update: version {0} ({1})",\r
"related party",\r
"Related party",\r
"related party — withholding tax from the first euro",\r
"The loan repayment has been recorded.",\r
"The loan has been recorded.",\r
"Loans to natural persons",\r
"Loans to natural persons — {0}",\r
"draft laws — not adopted",\r
"Overview by person —",\r
"working days",\r
"working day",\r
"validity period",\r
"The permit validity cannot be earlier than the issue date.",\r
"with this person (loans) within ±30 days",\r
"with this partner within ±30 days",\r
"What was corrected, in which version and when.",\r
"Balance as at 31.12.{0}.",\r
"Foreigner",\r
"foreigner (residence and work permit)",\r
"Foreigner with a temporary residence and work permit — employer deadlines: contract and registration {0} hours from the permit being issued, notifications {1} and {2} days, copy of the permit at the workplace ({3})",\r
"{0}{1} is enclosed. Delivery is made to the employee's e-mail address from the employer's records ({2}).",\r
"Contract",\r
"Removes the rows entered for the selected date.",\r
"Row removal (the value from the Rates tab or an earlier row applies)",\r
"{0} of {1} parameters enabled. The values can be corrected in the table below; open payroll calculations are recalculated with the \\"Calculate all\\" button.",\r
"Remove \\"{0}\\" from {1}?",\r
"Payment in = cash enters the cash desk (debit 2430); payout = cash leaves (credit 2430). Contra account: supplier 4330, expense 5xxx, employee 2210, bank account 2410 (the deposit of takings is posted automatically from the statement). Cash of 10,000 EUR or more to another person is not entered (payment goes through the account).",\r
"The variant is enabled only after the law is published in the \\"Official Gazette of Montenegro\\" — confirmation is required.",\r
"applicable regulations",\r
"Version {0} receives security fixes until {1}",\r
"Version {0} received security fixes until {1} An update to the latest version is required.",\r
"Connection to the local IRIS server: an encrypted connection is accepted only with the certificate remembered at the time of connecting; requests go through the main process of the program.",\r
"Owner, director, their family member and another related party — no tax-exempt amount",\r
"returned",\r
"Returned",\r
"Returned in {0}.",\r
"The value has been changed.",\r
"Value from",\r
"The parameter value must be a non-negative number.",\r
"WHERE substr(Datum,1,4)=?",\r
"For {0} there are no parameters with an effective date — the values from the Rates tab apply.",\r
"No effective date is entered for this parameter.",\r
"Law on the Prevention of Money Laundering and Terrorist Financing, Art. 65",\r
"Foreigners Act (\\"Official Gazette of Montenegro\\", No. 154/26)",\r
"The employee has no e-mail address entered (HR → Contracts)."\r
]\r
`;export{e as default};
