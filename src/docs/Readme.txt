What is this project?

This project is going to be the Frontend (and perhaps backend) to a
Star Citizen player database lookup. The aim of this project is to
build a database of Star citizen players and to rate them by their
behaviour. It is intended to be an in-organization tool, although
it might be fully public at some point.

The backend will hold data about players such as:
    Table players:
        - A unique identifier
        - Their known callsigns
        - Known org memberships
        - Attitude (friendly, hostile etc)
    Table users:
        - username
        - access level
        - other info necessary for user authentication

The frontend will provide a mask for looking up players, changing
information and adding new entries.